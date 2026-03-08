const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();

router.get("/", userController.getUsernames);
router.get("/new", userController.createUsernameGet);
router.post("/new", userController.createUsernamePost);

module.exports = router;
