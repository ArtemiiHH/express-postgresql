const { Router } = require("express");
const userController = require("../controllers/userController");
const userRouter = Router();

userRouter.get("/", userController.getUserName);
userRouter.get("/new", userController.displayForm);
userRouter.post("/new", userController.handleSubmit);

module.exports = userRouter;
