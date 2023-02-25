const { registerSchema } = require("../validators/userValidator");

function validateRegisterBody(req, res, next) {
  try {
    const result = registerSchema.validate(req.body);
    if (!result.error) {
      req.body = result.value;
      next();
    } else {
      res.send(result.error);
    }
  } catch (error) {
    res.send("Error while validate user!");
  }
}
