var mongoose = require("mongoose");

var Schema = mongoose.Schema;
// connect data base and check the connection
var db = mongoose.connection;
db.on("error", function () {
  console.log("mongoose connection error");
});
db.once("open", function () {
  console.log("mongoose connected successfully");
});
// create  user schema contain informations of users
const UserSchema = new Schema({
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

const dba = mongoose.model("dba", UserSchema); //to convert schema to model

module.exports.dba = dba; //to export
