const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();

router.get("/", userController.getUserName);
router.get("/new", userController.displayForm);
router.post("/new", userController.handleSubmit);

module.exports = router;
