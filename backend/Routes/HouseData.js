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

router.post('/upload', async(req, res) => {
  try {
    const house = new productList(req.body);
    await house.save();
    res.status(201).json({ success: true, message: "Product uploaded successfully" });
  } catch (error) {
    console.error("Error in uploading product", error);
    res.status(500).json({ success: false });
  }
})

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

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await productList.findByIdAndDelete(id);
    res.json({ success: true, message: "Product Deleted" });
  } catch (error) {
    console.error('Error deleting house:', error);
    res.status(500).send({ message: 'Error deleting house!' });
  }
 
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
