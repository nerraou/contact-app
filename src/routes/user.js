const router = require("express").Router();
const userControllers = require("../controllers/userControllers.js");
const userMiddlewares = require("../middleware/user");

router.post(
  "/register",
  userMiddlewares.validateRegisterBody,
  userControllers.register
);

//create new end point for Log in

module.exports = router;
