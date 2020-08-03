const mongoose = require('mongoose')
const Schema = mongoose.Schema


let locationSchema = Schema({
  City:{
         type: String,
      //  required: true,
     },
       Area:{
     type: String,
      //  required: true,
     },
      RoadName:{
       type: String,
    //  required: true,
       },
      BuildingNumber:{
       type: String||Number,
        //  required: true,
      },
      Floor:{
       type: String,
      //  required: true,
      },
       DeliveryInstructions:{
       type: String,
        //  required: true,
    }
    

})

module.exports = mongoose.model('Location', locationSchema)
