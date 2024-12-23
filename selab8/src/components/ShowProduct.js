import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ShowProduct() {
  const [data, setData] = useState([]);

  async function Getproduct() {
    try {
      const response = await axios.get("http://localhost:8080/api/product");
      setData(
        response.data.map((product) => ({ ...product, id: product._id }))
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`http://localhost:8080/api/product/${id}`);
      setData(data.filter((product) => product.id !== id));
      console.log(`Product with ID ${id} deleted`);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  useEffect(() => {
    Getproduct();
  }, []);

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4 p-4">
      {data.length > 0 ? (
        data.map((product) => (
          <div
            key={product.id}
            className="w-full md:w-[400px] bg-white shadow-lg rounded-lg p-6 flex flex-col items-start gap-2 border border-gray-200"
          >
            <div className="flex flex-row justify-between w-full">
              <h1 className="text-2xl text-gray-700 font-serif font-bold mb-2">
                {product.name}
              </h1>
              <h4 className="text-lg font-semibold text-gray-500">
                ${product.price}
              </h4>
            </div>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <button
              className="bg-red-400 text-white p-2 rounded-md mt-4 hover:bg-red-700"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No products available</p>
      )}
    </div>
  );
}
