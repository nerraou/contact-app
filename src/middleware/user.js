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

module.exports = { validateRegisterBody };
