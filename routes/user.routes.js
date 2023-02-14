const { Router } = require("express");
const { signup, login } = require("../controllers/user.controller");

const UserRouter = Router();

UserRouter.post("/signup", signup);

UserRouter.post("/login", login);

module.exports = { UserRouter };
