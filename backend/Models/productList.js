const mongoose = require("mongoose");

const HouseList = new mongoose.Schema({
  Image: { type: String, required: true },
  price: { type: Number, required: true },
  Bedrooms: { type: String, required: true },
  Bathrooms: { type: String, required: true },
  squareFeet: { type: Number, required: true },
  Address: { type: String, required: true },
});

module.exports = mongoose.model("House", HouseList);
