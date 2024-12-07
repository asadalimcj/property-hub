const express = require("express");
const router = express.Router();
const productList = require("../Models/productList");


router.get("/productlist", async (req, res) => {
  try {
    const Houses = await productList.find();
    res.status(200).json(Houses)
  } catch (error) {
    console.error("Error While fetching House List:", error);
    res.status(500).json({ message: "Error fetching House", error });
  }
    
});







router.put("/updateproduct/:id", async (req, res) => {
    const updatedProduct = await product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
  res
    .status(201)
    .json({ success: true, message: "Product Updated Successfully" });
});

router.delete("/deleteProduct", async (req, res) => {
  const { id } = req.body;
  await product.findByIdAndDelete(id);
  res.json({ success: true, message: "Product Deleted" });
});
router.post("/createproduct", async (req, res) => {
  const newProduct = new product(req.body);
  await newProduct.save();
  res
    .status(201)
    .json({
      success: true,
      message: "Product Created Successfully",
      product: newProduct,
    });
});

module.exports = router;
