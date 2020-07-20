// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const mongoose = require("mongoose");
// // var populateData = require("./models/dba.js")
// // // const user=require("./models/user")
// // const app = express();
// // app.use(bodyParser.json());
// // // Connect to MongoDB
// // //support parsing of application/x-www-form-urlencoded post data
// // app.use(bodyParser.urlencoded({ extended: true }));
// // //connect between client and server
// // app.use(express.static(__dirname, "client"));
// // mongoose.connect("mongodb://localhost/user", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });
// // mongoose.connection.on("connected", () =>
// //   console.log("MongoDB successfully connected")
// // );
// // // middleware
// // //use routs for the site
// // //populateData.saveSt();
// // //orieb
// // //routs path
// // const users = require("./routs/user");
// // app.use("",users);

// // app.use(
// // bodyParser.urlencoded({
// //   extended: false
// // })
// // );


// // mongoose.connection.on('connected', () => 
// // console.log("MongoDB successfully connected"))
// // // middleware

// // var port = 6000
// // app.listen(port, function () {
// //   console.log(" is listening on port " + port);
// // });
// // module.exports = app;





// const express = require("express");
// var cors = require('cors');
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// var populateData = require("./models/dba.js")
// const app = express();
// //make connection between server side and client side
// app.use(cors());
// //routs path
// const users = require("./routs/user");
// //const songs = require("./routes/main");
// const { Mongoose } = require("mongoose");
// // Connect to MongoDB

//   mongoose.connection.on('connected', () => 
//   console.log("MongoDB successfully connected"))
// // middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// //use routs for the site
// app.use("",users);


//  // mongoose.connection.on('connected', () => 
//  //  console.log("MongoDB successfully connected"))





// var port = 9000;
// app.listen(port, function () {
//   console.log(' listening on port ' + port);
// });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var items = require("./models/dba.js")
var cors=require("cors")
// const user=require("./models/dba")
 const bcrypt = require("bcrypt");

const app = express();
app.use(bodyParser.json());
app.use(cors())
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
//orieb
//routs path
const users = require("./routs/user");
app.use("",users);
// mongoose.connection.on('connected', () => 
// console.log("MongoDB successfully connected"))
// // middleware
app.use(
bodyParser.urlencoded({
  extended: false
})
);




const User2=items.dba2
console.log(User2)

// app.post("/signup",function(req, res){
// //   let hash = bcrypt.hash(req.body.password, 14);
// //   const firstName = req.body.firstName;
// //   const lastName = req.body.lastName;
// //   const email = req.body.email;
// //   const password = hash;
// //   let user = User2.findOne({ email:req.body.email });
// //   if (user) {
// //     return res.status(400).send(" email already exists!");
// //   } else {
// //     const newUser = new User2({
// //       firstName,
// //       lastName,
// //       email,
// //       password,
// //     });
// //     newUser.save();
// //     res.send(newUser);
// //   }
// // });
// var newUser = new User2({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: req.body.password
//   });
//    User2.findOne({ email: newUser.email })
//     .then( profile => {
//       if (!profile) {
//         bcrypt.hash(newUser.password, 10, function (err, hash)  {
//           if (err) {
//             console.log("Error is", err.message);
//           } else {
//             newUser.password = hash;
//              newUser
//               .save()
//               .then(() => {

//                 res.send('User authenticated');

//               })
//               .catch(err => {
//                 console.log("Error is ", err.message);
//               });
//           }
//         });
//       } else {
//         res.send("User already exists...");

//       }
//     })
//     .catch(err => {
//       console.log("Error is", err.message);
//     });

// })


















var port = 7000;
app.listen(port, function () {
  console.log(" is listening on port " + port);
});
module.exports = app;