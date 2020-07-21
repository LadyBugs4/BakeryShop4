const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var items = require("./models/dba.js")
var cors=require("cors")
 const bcrypt = require("bcrypt");
const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
//connect between client and server
app.use(express.static(__dirname, "client"));
mongoose.connect("mongodb://localhost/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () =>
  console.log("MongoDB successfully connected")
);
// middleware
//routs path
const users = require("./routs/user");
app.use("",users);
app.use(
bodyParser.urlencoded({
  extended: false
})
);
const User2=items.dba2
console.log(User2)
var port = 7000;
app.listen(port, function () {
  console.log(" is listening on port " + port);
});
module.exports = app;