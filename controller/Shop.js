const Shop = require("../models/Shop");

exports.getShops = (req, res) => {
  Shop.find()
    .then((data) => {
      const shops = data.map((item) => ({ id: item._id, name: item.name }));
      res.json(shops);
    })
    .catch((err) => console.log(err.message));
};
