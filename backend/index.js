const express = require("express");
const cors = require("cors");
const connection_db = require("./db");
connection_db();

const app = express();
const port = 4001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", require("./Routes/createuser"));
app.use("/api/houses", require("./Routes/HouseData")); // Adjusted path
app.use("/api/buy", require("./Routes/BuyHouse")); // Adjusted path

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

