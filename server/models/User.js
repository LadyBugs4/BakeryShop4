const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const jwtSecret ="01D15A490E649541EA99415C0A041527723EBF97F01FA27B5A796C31EE3C37D8"

let userSchema = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 7,
    match: [
      /[\w]+?@[\w]+?\.[a-z]{2,4}/,
      'The value of path {PATH} ({VALUE}) is not a valid email address.',
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
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
      PhoneNumber:{
       type: String||Number,
        //  required: true,
    }
    

})

// hash passwords for new records before saving
userSchema.pre('save', function(next) {
  if (this.isNew) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(this.password, salt)
    this.password = hash
  }
  next()
})

//validate user password
userSchema.methods.validPassword = function(inputedPassword) {
  return bcrypt.compareSync(inputedPassword, this.password)
}

//sign token for this user
userSchema.methods.getJWT = function() {
  return JWT.sign({ userId: this._id }, jwtSecret, {
    expiresIn: '7d',
  })
}

module.exports = mongoose.model('User', userSchema)
