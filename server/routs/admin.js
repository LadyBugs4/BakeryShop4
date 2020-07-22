const express = require("express");
const router = express.Router();

const { Items } = require("../models/items");
const app = express();

var cors = require("cors");
app.use(cors());


//const Items = require("../models/items");


router.post("/items", function (req, res) {
  var newItems = new Items({
    // firstName: req.body.firstName,
     NameOfCategory: req.body.NameOfCategory,
      NameOfItems:req.body.NameOfItems ,
      Price: req.body.Price,
      description:req.body.description,
      image:req.body.image
  
  });
  Items.findOne({ NameOfItems: newItems.NameOfItems })
    .then((item) => {
      if (!item) {
       
            newItems
              .save()
              .then(() => {
                res.send("item added");
              })
              .catch((err) => {
                console.log("Error is ", err.message);
              });
          }
        
      else {
        res.send("item already exists...");
      }
   })
    .catch((err) => {
      console.log("Error is", err.message);
    });
});
module.exports = router;
