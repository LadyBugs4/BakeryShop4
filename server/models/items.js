var { Schema, model, models } = require("mongoose");
var Schema = Schema;
// create  user schema contain informations of users
const itemSchema3= new Schema({
 NameOfCategory : {
    type: String,
    required: true,
  },
 NameOfItems : {
    type: String,
    required: true,
  },
 Price : {
    type: Number,
    required: true,
    },
    image:{
    	type: String,
    required: true,
    },
  description: {
    type: String,
    required: true,
  },
  like: {
    type: String,
  },
  NumberOfItems:{
    type:Number
  }
});
exports.Items = models["Items3"] || model("Items3", itemSchema3);