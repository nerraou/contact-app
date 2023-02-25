const User = require("../models/user");

async function register(req, res) {
  let user;
  try {
    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    });
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send({
      message: "Error while adding user!",
    });
  }
}

module.exports = { register };
