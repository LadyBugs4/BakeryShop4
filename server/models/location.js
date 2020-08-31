const mongoose = require('mongoose')
const Schema = mongoose.Schema
const locationSchema = Schema({
  City:{
         type: String,
      required: true,
     },
       Area:{
     type: String,
      required: true,
     },
      RoadName:{
       type: String,
     required: true,
       },
      BuildingNumber:{
       type:Number ,
       required: true,
      },
      Floor:{
       type: String,
      required: true,
      },
      PhoneNumber:{
       type: Number,
        required: true,
    }
})
module.exports = mongoose.model('Location', locationSchema)