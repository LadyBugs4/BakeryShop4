const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const user=require("./models/user")

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
//support parsing of application/x-www-form-urlencoded post data
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

//use routs for the site

//populateData.saveSt();

var port = 3000;

app.listen(port, function () {
  console.log(" is listening on port " + port);
});

module.exports = app;
