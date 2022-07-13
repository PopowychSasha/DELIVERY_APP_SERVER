const mongoose = require("mongoose");

const Order = new mongoose.Schema({
  totalPrice: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  name: { type: String, required: true },
  orders: [
    {
      name: { type: String},
      img: { type: String},
      price: { type: String},
      count: { type: String}
    },
  ],
});

module.exports = mongoose.model('Order',Order);
