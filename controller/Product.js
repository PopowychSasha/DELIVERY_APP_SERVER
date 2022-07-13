const Product = require("../models/Product");
const Shop = require("../models/Shop");

exports.getProducts = (req, res) => {
  const shopName = req.params.shop;
  Shop.findOne({ name: shopName })
    .then(({ products }) => {
      Product.find({ _id: { $in: products } })
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err.message));
};
