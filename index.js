require("dotenv").config();
const app = require("./src/app.js");
const mongoose = require("mongoose");
const port = 3000;

// to avoid Deprecation Warning
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/myDb")
  .then(function () {
    app.listen(port, function () {
      console.log("Server started");
    });
  })
  .catch(console.log);
