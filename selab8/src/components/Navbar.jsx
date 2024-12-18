import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "./Modal";
import RealEstate from '../assets/Images/Real Estate.png'

export default function Navbar() {
  const [modalShow, setModalShow] = useState(false);
  // const email = localStorage.getItem("email"); // Use the correct key name
  const [email, setEmail] = useState(localStorage.getItem("email"));

  return (
    <div className="bg-white flex items-center justify-between py-2 px-5">
      <div className="flex flex-row gap-5">
        <Link className="text-black no-underline font-bold" to="/buy">
          Buy
        </Link>
        <Link className="text-black no-underline font-bold" to="/rent">
          Rent
        </Link>
        <Link className="text-black no-underline font-bold" to="/sell">
          Sell
        </Link>
        {email ? (
          <Link className="text-black no-underline font-bold" to="/product">
            Products
          </Link>
        ) : (
          ""
        )}
      </div>
        <img src={RealEstate} alt="" height={60} width={60}></img>
      {/* Button to trigger the modal */}
      {email ? (
        <button
          onClick={() => {
            setEmail(localStorage.removeItem("email"));
          }}
          className="text-gray-700 font-bold no-underline"
        >
          Welcome, {email}
        </button>
      ) : (
        <button className="font-bold" onClick={() => setModalShow(true)}>Sign In</button>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
