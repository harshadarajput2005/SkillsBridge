const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getProfile
} = require("../controllers/userController");

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get Profile
router.get("/profile/:email", getProfile);

module.exports = router;