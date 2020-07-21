var { Schema, model, models } = require("mongoose");

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
  Role: {
    type: Schema.Types.ObjectId, // which mean role will be an id of role object 
    ref : "role" // ref === the opposite model name
  },
});


// for exampel 
// we have a role model { id :1 , title :"admin" }
// we have a user model { id:1, username : "orieb", role : 1 } -> which mean orieb is a admin role

exports.User = models["User"] || model("User", UserSchema2);
