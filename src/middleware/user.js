const { registerSchema } = require("../validators/userValidator");

function validateRegisterBody(req, res, next) {
  try {
    const result = registerSchema.validate(req.body, { abortEarly: false });
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

// create a middleware to generate Access Token

// create a middleware to validate the auth token

module.exports = { validateRegisterBody };
