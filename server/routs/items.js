const express = require("express");
const router = express.Router();
const { Items } = require("../models/items");
const app = express();
var cors = require("cors");
app.use(cors());

///this function to admin to add data
router.post("/items", function (req, res) {
  var newItems = new Items({
    // firstName: req.body.firstName,
    NameOfCategory: req.body.NameOfCategory,
    NameOfItems: req.body.NameOfItems,
    Price: req.body.Price,
    description: req.body.description,
    image: req.body.image,
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
      } else {
        res.send("item already exists...");
      }
    })
    .catch((err) => {
      console.log("Error is", err.message);
    });
});

//this function to user to get all items

router.get("/getItem", function (req, res) {
  Items.find(function (err, user) {
    if (err) {
      throw err;
    }

    res.json(user);
    //console.log("hi", res.data);
  });
});

module.exports = router;
