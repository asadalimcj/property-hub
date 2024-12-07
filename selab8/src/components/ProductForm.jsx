import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const [produt, setPrduct] = useState({
    name: "",
    price: null,
    catagory: "",
    description: "",
  });

  const navigate = useNavigate();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setPrduct({ ...produt, [name]: value });
    console.log(e.target.value);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/product",
        produt
      );
      if (response.status === 200) {
        navigate("/");
        alert("Uploaded successfully");
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-600 gap-4 py-5 h-[100vh]">
      <h1 className="text-2xl font-bold font-serif text-gray-300">
        Upload Your Products
      </h1>
      <form className="flex flex-col gap-4 w-1/3" onSubmit={HandleSubmit}>
        <input
          type="text"
          className="bg-slate-200 text-black p-2 rounded-md outline-green-500"
          placeholder="Product name..."
          required
          name="name"
          onChange={HandleChange}
          value={produt.name}
        />
        <input
          type="text"
          className="bg-slate-200 text-black p-2 rounded-md outline-green-500"
          placeholder="Catagory..."
          required
          name="catagory"
          value={produt.catagory}
          onChange={HandleChange}
        />
        <input
          type="number"
          className="bg-slate-200 text-black p-2 rounded-md outline-green-500"
          placeholder="price..."
          required
          name="price"
          value={produt.price}
          onChange={HandleChange}
        />
        <textarea
          type="text"
          className="bg-slate-200 text-black p-2 rounded-md outline-green-500"
          rows={3}
          placeholder="description..."
          required
          name="description"
          value={produt.description}
          onChange={HandleChange}
        />
        <button
          className="bg-yellow-200 text-black p-2 rounded-md"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}
