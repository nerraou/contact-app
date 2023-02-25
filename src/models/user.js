const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true, maxLength: 20 },
  lastName: { type: String, maxLength: 20 },
  phoneNumber: { type: String, required: true, maxLength: 20 },
  password: { type: String, required: true, minLength: 5, maxLength: 20 },
});

UserSchema.virtual("fullName").get(function () {
  let fullName = "";
  if (this.firstName && this.lastName)
    fullName = `${this.firstName} ${this.lastName}`;
  else if (this.firstName) {
    fullName = this.firstName;
  }
  return fullName;
});

module.exports = mongoose.model("User", UserSchema);
