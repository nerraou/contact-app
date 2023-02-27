const router = require("express").Router();
const userControllers = require("../controllers/userControllers.js");
const userMiddlewares = require("../middleware/user");

router.post(
  "/register",
  userMiddlewares.validateRegisterBody,
  userControllers.register
);

module.exports = router;
