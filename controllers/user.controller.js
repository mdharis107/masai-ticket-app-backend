const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../models/user.model");
require("dotenv").config();

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user) {
    res.send({ msg: "User already exists. Please Login", value: false });
  } else {
    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        res.status(501).send({
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
        res.status(201).send({ msg: "Signup Successful", value: true });
      } catch (err) {
        console.log(err);
        res.status(501).send({
          msg: "Something went wrong, please try again later",
          value: false,
        });
      }
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    res.status(404).send({ msg: "Please signup and then login" });
  } else {
    const hash = user.password;
    bcrypt.compare(password, hash, function (err, result) {
      if (err) {
        console.log(err);
        res
          .status(501)
          .send({ msg: "Something went wrong, Please try again " });
      }
      if (result) {
        const token = jwt.sign({ userId: user._id }, process.env.PRIVATE_KEY);
        res.status(201).send({ msg: "Login Successful", token, data: user });
      } else {
        res
          .status(401)
          .send({ msg: "Invalid credentials, Please Signup if you haven't" });
      }
    });
  }
};

module.exports = {
  signup,
  login,
};
