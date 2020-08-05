var express = require('express')
var router = express.Router()

/* Import Controllers*/
const controllers = require('./controllers')

/* Import Middleware*/
const middleware = require('./middleware')

/* Define all your routes*/

router.post('/register', controllers.auth.register)
router.post('/login', controllers.auth.login)
//router.post('/location', controllers.auth.location)
// Protected Routes
router.get('/profile', middleware.auth, controllers.users.currentUser)
router.post('/location', middleware.auth, controllers.products.location)
router.post('/products', middleware.auth, controllers.products.add)
router.post('/categories', middleware.auth, controllers.products.categories)

/*Export your routes*/
module.exports = router
