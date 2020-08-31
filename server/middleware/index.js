const JWT = require('jsonwebtoken')
const { User } = require('../models')

const jwtSecret = process.env.JWT_SECRET

exports.auth = async (req, res, next) => {
  try {
    //get token from header: Bearer <token>
    const token = req.headers.authorization.split(' ')[1]
    //verify this token was signed by your server
    const decodedToken = JWT.verify(token, jwtSecret)
    ///Get user details
    let user = await User.findById(decodedToken.userId)
    if (!user) throw Error('Unauthenticated')
    //put user in req object; so the controller can access current user
    req.user = user
    next()
  } catch {
    return res.status(401).json({
      message: 'Unauthenticated',
    })
  }
}
