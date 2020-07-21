const express = require("express");
const request = require("request");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var session = require("express-session");
const FileStore = require("session-file-store")(session);
var cookieParser = require("cookie-parser");
const app = express();
var cors=require("cors")
app.use(cors())
var saltRounds=10
const items = require("../models/dba");
const User2=items.dba2
console.log(User2)
 router.post("/signup",function(req, res){
var newUser = new User2({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
   User2.findOne({ email: newUser.email })
    .then( profile => {
      if (!profile) {
        bcrypt.hash(newUser.password, saltRounds, function (err, hash)  {
          if (err) {
            console.log("Error is", err.message);
          } else {
            newUser.password = hash;
             newUser
              .save()
              .then(() => {
                res.send('User authenticated');
              })
              .catch(err => {
                console.log("Error is ", err.message);
              });
          }
        });
      } else {
        res.send("User already exists...");
      }
    })
    .catch(err => {
      console.log("Error is", err.message);
    });
})
//login route
router.post("/login", function (req, res) {
  var newUser = new User2({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
   User2.findOne({ email: newUser.email })
    .then(profile => {
      if (!profile) {
        res.send("User not exist");
      } else {
        bcrypt.compare(
          newUser.password,
          profile.password,
          function (err, result) {
            if (err) {
              console.log("Error is", err.message);
            } else if (result == true){
              var userInfo = {
                user: profile,
                result: result,
              };
              res.status(200).send("User log in");
            } else {
              res.send("User Unauthorized Access");
            }
          }
        );
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
});
module.exports = router;