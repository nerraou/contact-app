const router = require("express").Router();
const userControllers = require("../controllers/userControllers.js");
const userMiddlewares = require("../middleware/user");

router.post(
  "/register",
  userMiddlewares.validateRegisterBody,
  userMiddlewares.checkPhoneNumberDuplication,
  userControllers.register
);

//create new end point for Log in
router.post("/login", userMiddlewares.validateLoginBody, userControllers.login);

module.exports = router;
