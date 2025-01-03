const express = require("express");
const router = express.Router();
const Bought = require("../models/Bought");

router.post("/", async (req, res) => {
  try {
    const { email, house } = req.body;

    if (!email || !house) {
      return res.status(400).json({ message: "Email and house are required." });
    }

    const newPurchase = new Bought({ email, house });
    await newPurchase.save();

    res.status(200).json({ message: "Purchase recorded successfully!" });
  } catch (error) {
    console.error("Error saving purchase:", error);

    res
      .status(500)
      .json({ message: "Internal Server Error. Please try again later." });
  }
});

router.get("/:email", async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const history = await Bought.find({ email });

    if (history.length === 0) {
      return res
        .status(404)
        .json({ message: "No purchases found for this email." });
    }

    res.status(200).json(history);
  } catch (error) {
    console.error("Error fetching purchase history:", error);
    res.status(500).json({
      message: "An internal error occurred while fetching purchase history.",
      error: error.message,
    });
  }
});

module.exports = router;
