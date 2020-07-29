const { validate } = require('indicative').validator
const { Product } = require('../models')

exports.add = async (req, res) => {
  //Validate request data
  const rules = {
    name: 'required|string',
    category: 'required|string',
    price: 'required|number',
    description: 'required|string',
    image: 'required|string',
  }

  validate(req.body, rules).catch(errors => {
    return res.status(422).json(errors[0])
  })

  try {
    //initialize mongoose Model
    const product = new Product({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
    })

    await product.save() //save product record to database

    return res.status(201).json({ data: { product } })
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

    return res.status(409).json({ message: 'error saving data' })
  }
}

exports.all = async (req, res) => {
  try {
    const products = await Product.find()

    if (!products) {
      return res.status(404).json({ msg: `No products were found  ` })
    }

    return res.status(201).json({ data: { products } })
  } catch (err) {
    console.log('Error', err)
    // return res.status(409).json({ message: 'error saving data' })
  }
}

exports.categories = async (req, res) => {
  //Validate request data
  const rules = {
    category: 'required|string',
  }

  validate(req.body, rules).catch(errors => {
    return res.status(422).json(errors[0])
  })

  try {
    const { category } = req.body
    const products = await Product.find({ category })

    if (!products) {
      return res.status(404).json({ msg: `No products were found for ${category}` })
    }

    return res.status(201).json({ data: { products } })
  } catch (err) {
    console.log('Error', err)
    // return res.status(409).json({ message: 'error saving data' })
  }
}
