const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Product", Product);
