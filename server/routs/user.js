const express = require("express");
const request = require("request");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//var unirest = require("unirest");
var session = require("express-session");
const FileStore = require("session-file-store")(session);
var cookieParser = require("cookie-parser");
const app = express();
var cors=require("cors")
app.use(cors())


// app.use(
//   session({
//     name: "session-id",
//     secret: "Dream-catchers",
//     saveUninitialized: false,
//     resave: false,
//     store: new FileStore(),
//   })
// );
var saltRounds=10

const items = require("../models/dba");
const User2=items.dba2
console.log(User2)

 router.post("/signup",function(req, res){
//   let hash = bcrypt.hash(req.body.password, 14);
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const password = hash;
//   let user = User2.findOne({ email:req.body.email });
//   if (user) {
//     return res.status(400).send(" email already exists!");
//   } else {
//     const newUser = new User2({
//       firstName,
//       lastName,
//       email,
//       password,
//     });
//     newUser.save();
//     res.send(newUser);
//   }
// });


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
  // const email = req.body.email;
  // const password = req.body.password;
  // // Find user by email
  // User.findOne({ email: email }).then((user) => {
  //   // Check if user exists
  //   if (!user) {
  //     return res.json("Email not found");
  //   }
  //   bcrypt.compare(password, user.password, function (err, result) {
  //     if (err) {
  //       return res.json(err);
  //     } else if (result === true) {
  //       // req.session.user = user;
  //       // res.cookie("user", "user", {
  //       //   signed: true,
  //       //   maxAge: 1000 * 60 * 60,
  //       // });
  //       return res.json(result);
  //     }
  //   });
  // });

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
            } else if (result == true) {
              req.session.user = profile;

              res.cookie("user", "user", {
                signed: true,
                maxAge: 1000 * 60 * 60,
              });
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