const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Shop = require("./models/Shop");
const Product = require("./models/Product");
const shopRoutes = require('./routes/Shop');
const productRoutes = require('./routes/Product');
const ordersRoutes = require('./routes/Order');
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser());
app.use(shopRoutes);
app.use(productRoutes);
app.use(ordersRoutes);


const startApp = async () => {
  const DB_URL = `mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.zcicj4g.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is started on PORT ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

startApp();
