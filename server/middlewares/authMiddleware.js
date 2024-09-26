const jwt = require("jsonwebtoken");
const db = require("../models");
const { User } = db;

const authMiddleware = async (req, res) => {
  console.log("in Auth MiddleWare \n");
  const token = req.cookies.token;
  if (!token) {
    console.log("No token provided");
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
    console.log("User not found");
      return res.status(401).json({ error: "User not found" });
    } else {
      req.user = user;
    console.log("User found");
      return res.status(200).json(user);
    }
  } catch (error) {
    console.log("Invalid Token "+error);
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;
