const router = require("express").Router();
const userControllers = require("../controllers/userControllers.js");

router.post("/register", userControllers.register);

module.exports = router;
