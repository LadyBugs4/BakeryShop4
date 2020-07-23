
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models/User-Model");
const app = express();
var cors = require("cors");
app.use(cors());
var saltRounds = 10;
const items = require("../models/User-Model");
const jsonwebtoken = require("jsonwebtoken");
router.post("/signup", function (req, res) {
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  User.findOne({ email: newUser.email })
    .then((profile) => {
      if (!profile) {
        bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
          if (err) {
            console.log("Error is", err.message);
          } else {
            newUser.password = hash;
            newUser
              .save()
              .then(() => {
                res.send("User authenticated");
              })
              .catch((err) => {
                console.log("Error is ", err.message);
              });
          }
        });
      } else {
        res.send("User already exists...");
      }
    })
    .catch((err) => {
      console.log("Error is", err.message);
    });
});
//login route
router.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;
    const usertofind = await User.findOne({ email });
    if (!usertofind) {
      return res.status(404).json({ msg: "no user with this cerdntials" });
    }
    // compare password
    if (!bcrypt.compareSync(password, usertofind.password)) {
      return res.status(401).json({ msg: "wrong cerdntials" });
    }
    // if user is valid
    const token = jsonwebtoken.sign({ id: usertofind.id }, "orieb");
    res.cookie("user-token", token, { httpOnly: true }); 
    return res.status(200).json({ jwt: token }); //
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;