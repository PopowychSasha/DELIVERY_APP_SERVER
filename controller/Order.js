const Orders = require("../models/Order");

exports.createOrder = (req, res) => {
  Orders.create({
    totalPrice: req.body.totalProductPrice,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    name: req.body.name,
    orders: [...req.body.orderProducts],
  })
    .then(() => console.log("Order is created!"))
    .catch((err) => console.log(err.message));
  res.json("Order is created!!!");
};

exports.getOrders = (req, res) => {
  Orders.find({})
    .then((data) => res.json(data))
    .catch((err) => console.log(err.message));
};
