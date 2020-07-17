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
app.use(cookieParser("moodyApplication"));
app.use(
  session({
    name: "session-id",
    secret: "Dream-catchers",
    saveUninitialized: false,
    resave: false,
    store: new FileStore(),
  })
);

const User = require("../models/dba");

router.route("/signup").post(async (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 14);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = hash;
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("That email already exists!");
  } else {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    await newUser.save();
    res.send(newUser);
  }
});

//login route
router.post("/login", function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email: email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.json("Email not found");
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.json(err);
      } else if (result === true) {
        // req.session.user = user;
        // res.cookie("user", "user", {
        //   signed: true,
        //   maxAge: 1000 * 60 * 60,
        // });
        return res.json(result);
      }
    });
  });
});

module.exports = router;

