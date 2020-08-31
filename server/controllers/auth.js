// const { validate } = require('indicative').validator
const { User } = require('../models')
const { location } = require('../models')

exports.register = async (req, res) => {

  try {
    //initialize mongoose Model
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })

    await user.save() //save user record to database

    const token = user.getJWT()
    //const expiration = process.env.NODE_ENV === 'dev' ? 100 : 604800000

    return res
      .status(201)
      .json({ data: { user, loggedInToken: token } })
  } catch (err) {
   
    return res.status(409).json({ message: 'error saving data' })
  }
}

exports.login = async (req, res) => {

 try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ msg: 'No user found with this cerdntials' })
    }

    if (!user.validPassword(password)) {
      return res.status(401).json({ msg: 'Invalid Email or Password' })
    }

    const token = user.getJWT()

    return res.status(200).json({ data: { user, token } })
  } catch (err) {
    console.log(err)
    if (err) return res.status(401).json({ message: err.message })
  }
}


