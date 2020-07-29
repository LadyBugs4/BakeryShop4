var express = require('express')
var router = express.Router()

/* Import Controllers*/
const controllers = require('./controllers')

/* Import Middleware*/
const middleware = require('./middleware')

/* Define all your routes*/

router.post('/register', controllers.auth.register)
router.post('/login', controllers.auth.login)

// Protected Routes
router.get('/profile', middleware.auth, controllers.users.currentUser)
router.get('/products', middleware.auth, controllers.products.all)
router.post('/products', middleware.auth, controllers.products.add)
router.post('/categories', middleware.auth, controllers.products.categories)

/*Export your routes*/
module.exports = router
