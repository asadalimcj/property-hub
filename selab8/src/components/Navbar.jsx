import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "./Modal";
import RealEstate from "../assets/Images/Real Estate.png";
import SellForm from "./SellForm";

export default function Navbar() {
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [showsSellForm, setSellForm] = useState(false);

  const handleSellClick = () => {
    if (email) {
      setSellForm(true);
    } else {
      setModalShow(true); // Open the modal if email is not set
    }
  };

  return (
    <div className="bg-white flex items-center justify-between py-2 px-5">
      <div className="flex flex-row gap-5">
        <Link className="text-black no-underline font-bold" to="/">
          Home
        </Link>
        <Link className="text-black no-underline font-bold" to="/buy">
          Buy
        </Link>
        <Link className="text-black no-underline font-bold" to="/rent">
          Rent
        </Link>
        <button
          className="text-black no-underline font-bold bg-transparent border-none"
          onClick={handleSellClick}
        >
          Sell Home
        </button>
      </div>
      <img src={RealEstate} alt="" height={60} width={60}></img>

      {email && (
        <SellForm show={showsSellForm} onHide={() => setSellForm(false)} />
      )}

      {/* Button to trigger the modal */}
      {email ? (
        <button
          onClick={() => {
            localStorage.removeItem("email");
            setEmail(null); // Update state after removal
          }}
          className="text-gray-700 font-bold no-underline"
        >
          Welcome, {email}
        </button>
      ) : (
        <button className="font-bold" onClick={() => setModalShow(true)}>
          Sign In
        </button>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
