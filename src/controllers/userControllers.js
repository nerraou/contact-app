const User = require("../models/user");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

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
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });

    if (user == null) {
      return res.status(401).json({
        message: "phone number and / or password incorrect!",
      });
    }

    const isEqual = await bcrypt.compare(req.body.password, user.password);

    if (!isEqual) {
      return res.status(401).json({
        message: "phone number and / or password incorrect!",
      });
    }
    const token = Jwt.sign({ id: user.id }, process.env.SECRET_KEY);
    res.send({
      accessToken: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Eroor!",
    });
  }
}

module.exports = { register, login };
