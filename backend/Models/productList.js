const mongoose = require("mongoose");

const HouseList = new mongoose.Schema({
  Images: { type: [String], required: true },
  Address: { type: String, required: true },
  Price: { type: String, required: true },
  Bedrooms: { type: Number, required: true },
  Bathrooms: { type: Number, required: true },
  Ares: { type: String, required: true }, 
  AboutHome: { type: String, required: true },
  Email: { type: String, required: true },
  catagoryName: { type: String, default: "buy", enum: ["buy", "rent", "sell"] }, 
});

module.exports = mongoose.model("House", HouseList);



