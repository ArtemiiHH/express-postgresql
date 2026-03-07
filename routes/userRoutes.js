const { Router } = require("express");
const userController = require("../controllers/userController");
const userRouter = Router();

userRouter.get("/", (req, res) => userController.getUserName);
userRouter.get("/new", (req, res) => userController.displayForm);
userRouter.post("/new", (req, res) => {
  userController.handleSubmit;
  res.redirect("/");
});

module.exports = userRouter;
