var { Schema, model, models } = require("mongoose");

var Schema = Schema;
// create  user schema contain informations of users
const itemSchema2= new Schema({
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
});

exports.Items = models["Items"] || model("Items", itemSchema2);
