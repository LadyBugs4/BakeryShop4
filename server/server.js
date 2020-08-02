const express = require('express')
const app = express()
const path = require('path') //native module, no need to install
require('dotenv').config()
// const logger = require('morgan')
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

// app.use(logger('dev')) // For logging out errors to the console
app.use(bodyParser.json()) // for parsing application/json
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'client'))) // For serving static files

const { resolve } = require("path");
// This is a sample test API key. Sign in to see examples pre-filled with your key.
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
//use routes
app.use('/api', routes)


const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

//handle unhandled error
process.on('unhandledRejection', error => {
  console.error('Uncaught Error', pe(error))
  return
})

app.listen(process.env.PORT, function() {
  console.log(`Server Stated on http://localhost:${process.env.PORT}`)
})
