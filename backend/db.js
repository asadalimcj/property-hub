const mongoose = require("mongoose");

const url = `mongodb+srv://asadalimcj:w3OyL66kT4eMnaz1@zearsports.w5h4a.mongodb.net/realEstate`;

const connection_db = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");

  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connection_db;
