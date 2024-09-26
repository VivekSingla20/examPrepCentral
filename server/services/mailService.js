const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendOtp = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Exclusive OTP Code - Verify Your Account Now!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #4caf50; text-align: center;">Welcome to ExamPrep Central!</h2>
        <p style="font-size: 16px; color: #555;">Dear User,</p>
        <p style="font-size: 16px; color: #555;">Thank you for joining us! To complete your registration and secure your account, please use the following One-Time Password (OTP):</p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="display: inline-block; padding: 10px 20px; font-size: 20px; color: #ffffff; background-color: #4caf50; border-radius: 5px;">${otp}</span>
        </div>
        <p style="font-size: 16px; color: #555;">This OTP is valid for the next 10 minutes. Please do not share this code with anyone.</p>
        <p style="font-size: 16px; color: #555;">If you did not request this OTP, please ignore this email or contact our support team immediately.</p>
        <p style="font-size: 16px; color: #555;">We're excited to have you on board and look forward to helping you achieve your goals!</p>
        <p style="font-size: 16px; color: #555;">Best regards,</p>
        <p style="font-size: 16px; color: #555;"><strong>The ExamPrep Central Team</strong></p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent to email");
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};
