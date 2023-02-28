const userSchema = require("../validators/userValidator");
const User = require("../models/user");
const Jwt = require("jsonwebtoken");

function validateRegisterBody(req, res, next) {
  try {
    const result = userSchema.registerSchema.validate(req.body, {
      abortEarly: false,
    });
    if (!result.error) {
      req.body = result.value;
      next();
    } else {
      res.send(result.error.details);
    }
  } catch (error) {
    console.log(error);
    res.send("Error while validate user!");
  }
}

function validateLoginBody(req, res, next) {
  try {
    const result = userSchema.loginSchema.validate(req.body, {
      abortEarly: false,
    });
    if (!result.error) {
      req.body = result.value;
      next();
    } else {
      res.send(result.error.details);
    }
  } catch (error) {
    console.log(error);
    res.send("Error while validate user!");
  }
}

async function checkPhoneNumberDuplication(req, res, next) {
  try {
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });

    if (user == null) {
      return next();
    }

    res.status(409).json({
      message: "Phone number already exist!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error",
    });
  }
}

// create a middleware to validate the auth token
async function authorize(req, res, next) {
  try {
    const parts = req.headers.authorization.split(" ");
    if (parts.length != 2 || parts[0] != "Bearer") {
      res.status(401).json({
        message: "Unauthorized",
      });
    }

    const authorizationToken = parts[1];
    const decoded = Jwt.verify(authorizationToken, process.env.SECRET_KEY);
    req.userData = {
      id: decoded.id,
    };
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
}

module.exports = {
  validateRegisterBody,
  validateLoginBody,
  checkPhoneNumberDuplication,
  authorize,
};
