import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "./Modal";
import RealEstate from "../assets/Images/Real Estate.png";
import SellForm from "./SellForm";

export default function Navbar() {
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [showSellForm, setShowSellForm] = useState(false);

  const handleSellClick = () => {
    if (email) {
      setShowSellForm(true);
    } else {
      setModalShow(true);
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
        <Link
          className="text-black no-underline font-bold"
          onClick={handleSellClick}
        >
          Sell Home
        </Link>

        {/* SellForm Modal */}
        <SellForm show={showSellForm} onHide={() => setShowSellForm(false)} />

        {/* History Link */}
        {email ? (
          <Link className="text-black no-underline font-bold" to="/history">
            History
          </Link>
        ) : (
          ""
        )}
      </div>

      {/* Real Estate Logo */}
      <img src={RealEstate} alt="" height={60} width={60} />

      {/* Sign In or Logout Button */}
      {email ? (
        <button
          onClick={() => {
            localStorage.removeItem("email");
            setEmail(null);
          }}
          className="text-gray-700 font-bold no-underline"
        >
          Logout
        </button>
      ) : (
        <button className="font-bold" onClick={() => setModalShow(true)}>
          Sign In
        </button>
      )}

      {/* Login Modal */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
