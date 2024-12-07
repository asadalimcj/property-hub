import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ProductUpdateForm() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    catagory: "",
    description: ""
  });

  const { id } = useParams();
  console.log("Product ID from URL:", id); // This should log the correct product ID

  useEffect(() => {
    console.log("Product ID in useEffect:", id); // Check if `id` is undefined here as well
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    if (id) fetchProduct(); // Fetch only if `id` is defined
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/products/${id}`, product);
      alert("Product updated successfully");
      navigate("/");
    } catch (error) {
      console.error("Error updating product", error);
      alert("Could not update product");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-1/3 bg-slate-200 p-5 rounded-md mt-2 ">
        <input className="p-2 rounded-md text-black outline-lime-300"
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input className="p-2 rounded-md text-black outline-lime-300"
          type="text"
          name="catagory"
          value={product.catagory}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input className="p-2 rounded-md text-black outline-lime-300"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <textarea className="p-2 rounded-md text-black outline-lime-300"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button className="p-2 rounded-md w-full bg-slate-950 text-white" type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default ProductUpdateForm;
