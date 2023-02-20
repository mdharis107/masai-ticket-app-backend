const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../models/user.model");
require("dotenv").config();

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user) {
    res
      .status(200)
      .send({ msg: "User already exists. Please Login", value: false });
  }

  bcrypt.hash(password, 6, async function (err, hash) {
    if (err) {
      res.send({
        msg: "Something went wrong, please try again later",
        value: false,
      });
    }

    const user = new UserModel({
      email,
      name,
      password: hash,
    });
    try {
      await user.save();
      res.send({ msg: "Signup Successful", value: true });
    } catch (err) {
      console.log(err);
      res.send({
        msg: "Something went wrong, please try again later",
        value: false,
      });
    }
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  const hash = user.password;

  bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      console.log(err);
      res.send({ msg: "Something went wrong, Please try again " });
    }
    if (result) {
      const token = jwt.sign({ userId: user._Id }, process.env.PRIVATE_KEY);
      res.send({ msg: "Login Successful", token });
    } else {
      res.send({ msg: "Invalid credentials, Please Signup if you haven't" });
    }
  });
};

module.exports = {
  signup,
  login,
};
