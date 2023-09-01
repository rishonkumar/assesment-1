const express = require("express");
const router = express.Router();

// Import authentication controller functions
const { registerUser, loginUser } = require("../controllers/authController");

// Define authentication routes
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
