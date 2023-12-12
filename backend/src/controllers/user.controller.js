const User = require("../models/user.model");
const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const userExist = await User.findOne({ email: rest.email });

    if (userExist) return res.status(400).send("User Already Exist");
    const user = new User({
      ...rest,
    });
    const salt = await bcrypt.genSalt(12);
    const hasPassword = await bcrypt.hash(password, salt);
    user.password = hasPassword;
    user.save();

    res.send({ message: "User registered Successfully" });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  console.log("login user");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ message: "User Not Found" });
    try {
      const response = await bcrypt.compare(password, user.password);
      if (!response) {
        return res.status(400).send({ message: "Invalid Username or Password" })
      }

      const token = await jwt.sign(
        {
          id: user._id,
          email: user.email,
          name: user.name,
        },
        process.env.JWT_PRIVATE_KEY
      );
      res.send({ user, token, message: "User Logged In" });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ message: "Invalid Username or Password" });
    }
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};

const getProfile = async (req, res) => {
  console.log("get user profile controller");
  const { id, email, name } = req.user;

  try {
    const user = await User.findOne({ _id: id, isDeleted: false }).populate(
      "products"
    );
    res.send({ user, message: "Profile fetched successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getProfile,
  registerUser,
  loginUser,
};
