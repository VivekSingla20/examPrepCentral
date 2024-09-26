const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mailService = require("../services/mailService");
const { User } = db;
const nodemailer = require("nodemailer");
const cron = require("node-cron");
require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await newUser.update({ otp, otpExpires });
    await mailService.sendOtp(email, otp);

    res.status(201).json({ message: "User created, OTP sent to email" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    if (user.otp.toString() !== otp.toString()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    if (user.otpExpires < new Date()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    await user.update({ otp: null, otpExpires: null });
    res.status(200).json({ message: "OTP verified" });
  } catch (error) {
    console.error("OTP verification error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0), // Set the cookie expiration date to the past to delete it
  });
  res.status(200).json({ message: "Logout successful" });
};

// Email reminder scheduling
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.scheduleEmail = (email, eventTitle, eventDate) => {
  const eventDateTime = new Date(eventDate);

  const fiveDaysBefore = new Date(eventDateTime);
  fiveDaysBefore.setDate(fiveDaysBefore.getDate() - 5);
  fiveDaysBefore.setHours(9, 0, 0, 0);

  const onTheDay = new Date(eventDateTime);
  onTheDay.setHours(0, 0, 0, 0);

  cron.schedule(`0 9 * * *`, () => {
    sendEmail(email, eventTitle, fiveDaysBefore);
  });

  cron.schedule(`0 0 * * *`, () => {
    sendEmail(email, eventTitle, onTheDay);
  });
};

const sendEmail = (email, eventTitle, eventDate) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Reminder for ${eventTitle}`,
    text: `This is a reminder for the event: ${eventTitle} scheduled on ${eventDate.toDateString()}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
