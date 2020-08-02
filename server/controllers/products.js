const { Product } = require("../models");

exports.add = async (req, res) => {
  try {
    //initialize mongoose Model
    const product = new Product({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
    });

    await product.save(); //save product record to database

    return res.status(201).json({ data: { product } });
  } catch (err) {
    
    return res.status(409).json({ message: "error saving data" });
  }
};



exports.categories = async (req, res) => {
 

  try {
    const { category } = req.body;
    const products = await Product.find({ category });

    if (!products) {
      return res
        .status(404)
        .json({ msg: `No products were found for ${category}` });
    }

    return res.status(201).json({ data: { products } });
  } catch (err) {
    //console.log("Error", err);
    return res.status(409).json({ message: 'error saving data' })
  }
};
