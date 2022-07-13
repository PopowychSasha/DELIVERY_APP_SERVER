const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Shop = new mongoose.Schema({
  name: { type: String, required: true },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model('Shop',Shop);
