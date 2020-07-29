const express = require('express')
const app = express()
const path = require('path') //native module, no need to install
require('dotenv').config()
const logger = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const pe = require('parse-error')
const routes = require('./routes')

//mongoose options
const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
}

//connect to database
mongoose.connect(process.env.MONGODB_URI, mongooseOptions).then(
  () => console.log('Database Connection established!'),
  err => console.log(err),
)

app.use(logger('dev')) // For logging out errors to the console
app.use(bodyParser.json()) // for parsing application/json
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'client'))) // For serving static files

//use routes
app.use('/api', routes)

//handle unhandled error
process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error))
  return
})

app.listen(process.env.PORT, function() {
  console.log(`Server Stated on http://localhost:${process.env.PORT}`)
})
