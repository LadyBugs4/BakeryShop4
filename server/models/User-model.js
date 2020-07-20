var { Schema, model, models } = require("mongoose");

var Schema = Schema;
// create  user schema contain informations of users
const UserSchema2 = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 7,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

exports.User = models["User"] || model("User", UserSchema2);

