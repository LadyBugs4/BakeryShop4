const { validate } = require('indicative').validator
const { User } = require('../models')

exports.register = async (req, res) => {
  //Validate request data
  const rules = {
    firstName: 'required|string',
    lastName: 'required|string',
    email: 'required|email',
    password: 'required|min:6|max:30',
  }

  validate(req.body, rules).catch(errors => {
    return res.status(422).json(errors[0])
  })

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
    const expiration = process.env.NODE_ENV === 'dev' ? 100 : 604800000

    return res
      .cookie('loggedInToken', token, {
        expires: new Date(Date.now() + expiration),
        secure: false, // set to true if your using https
        httpOnly: true,
      })
      .status(201)
      .json({ data: { user, loggedInToken: token } })
  } catch (err) {
    //return error if user unique field already exists
    if (err.name === 'MongoError' && err.code === 11000) {
      field = Object.keys(err.keyValue)[0]
      const response = {
        message: `${field} already exists!`,
        field: field,
      }
      return res.status(422).json(response)
    }
    console.log('err', err)

    return res.status(409).json({ message: 'error saving data' })
  }
}

exports.login = async (req, res) => {
  const rules = {
    email: 'required|email',
    password: 'required|min:6|max:30',
  }

  validate(req.body, rules).catch(errors => {
    return res.status(422).json(errors[0])
  })

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
