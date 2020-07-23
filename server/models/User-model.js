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
    match: [
      /[\w]+?@[\w]+?\.[a-z]{2,4}/,
      "The value of path {PATH} ({VALUE}) is not a valid email address.",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    // match:[/[A-Z]+[a-z]+[?=.&$@#].{6,20}/]
    //  match:"^(?=.*[0-9])"
    //  + "(?=.*[a-z])(?=.*[A-Z])"
    //  + "(?=.*[@#$%^&+=])"
    //  + "(?=\\S+$).{8,20}$"
  },
});
exports.User = models["User"] || model("User", UserSchema2);
