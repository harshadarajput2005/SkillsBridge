const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
const registerUser = async (req, res) => {
  try {
    const { fullName, email, mobile, skill, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "Email Already Exists"
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullName,
      email,
      mobile,
      skill,
      password: hashPassword
    });

    await user.save();

    res.status(201).json({
      message: "Registration Successful"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

// Login
const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User Not Found"
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    res.status(200).json({
      message: "Login Successful"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }
};

// Get Profile
const getProfile = async (req, res) => {

  try {

    const user = await User.findOne({
      email: req.params.email
    });

    if (!user) {
      return res.status(404).json({
        message: "User Not Found"
      });
    }

    res.status(200).json({
      fullName: user.fullName,
      email: user.email,
      mobile: user.mobile,
      skill: user.skill
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  registerUser,
  loginUser,
  getProfile
};