import React from "react";
import Navbar from "./Navbar";
import ProductForm from "./ProductForm";
import ShowProduct from "./ShowProduct";
import ProductUpdateForm from "./ProductUpdateForm";
export default function Products() {
  return (
    <div className="bg-slate-600">
      <Navbar />
      <ProductForm />
      <ShowProduct/>
      {/* <ProductUpdateForm/> */}
    </div>
  );
}
