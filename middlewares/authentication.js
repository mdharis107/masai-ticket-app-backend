const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send({ msg: "Please login again" });
  }

  const token = req.headers.authorization;

  jwt.verify(token, process.env.PRIVATE_key, function (err, decoded) {
    if (err) {
      res.send({ msg: "Something went wrong, Please try again" });
    } else {
      // console.log(decoded)
      req.body.userId = decoded.userId;
      next();
    }
  });
};

module.exports = { authentication };
