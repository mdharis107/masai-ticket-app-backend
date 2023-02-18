const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user) {
    res.send({ msg: "User already exists. Please Login" });
  }

  bcrypt.hash(password, 6, async function (err, hash) {
    if (err) {
      res.send({ msg: "Something went wrong, please try again later" });
    }

    const user = new UserModel({
      email,
      name,
      password: hash,
      
    });
    try {
      await user.save();
      res.send({ msg: "Signup Successful" });
    } catch (err) {
      console.log(err);
      res.send({ msg: "Something went wrong, please try again later" });
    }
  });
};

const login = async (req, res) => {};

module.exports = {
  signup,
  login,
};
