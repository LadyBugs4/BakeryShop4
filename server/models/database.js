var mongoose = require("mongoose");
const crypto = require('crypto'); // use JWT and Crypto to generate hash and salt from the received password string.
const jwt = require('jsonwebtoken');

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
    hash: String,
    salt: String
  }
  
});


UsersSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UsersSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

UsersSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

const user = mongoose.model("user", UserSchema); //to convert schema to model

module.exports.user = user; //to export
