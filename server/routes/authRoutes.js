const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/signup", authController.signup);
router.post("/verify-otp", authController.verifyOtp);
router.post("/login", authController.login);
router.post("/logout", authController.logout)

// Set reminder
router.post("/set-reminder", authMiddleware, (req, res) => {
  const { email, events } = req.body;

  events.forEach((event) => {
    const { title, date } = event;
    authController.scheduleEmail(email, title, date);
  });

  res.status(200).json({ message: "Reminders set successfully" });
});

module.exports = router;
