const User = require("../models/user");
const bcrypt = require("bcrypt");

//check for existing phone numbers
async function register(req, res) {
  let user;

  try {
    const hash = await bcrypt.hash(req.body.password, 13);
    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hash,
      phoneNumber: req.body.phoneNumber,
    });
    await user.save();
    res.send({
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "Error while adding user!",
    });
  }
}

//check for the phone number existing then the password use Bcrypt
async function login(req, res) {
  try {
  } catch (error) {}
}
module.exports = { register };
