import React from "react";
import HeaderImg from "../assets/Images/headerImage.jpg";

export default function Header() {
  return (
    <div className="flex h-[70vh]">
      <div className="relative w-full h-full">
        <img
          src={HeaderImg}
          alt="header"
          className="w-full h-full object--fill"
        />
        <div className="absolute top-[35%] left-[15%]">
          <h1 className="text-white font-bold text-8xl">
            Agents. Tours.
          </h1>
          <h1 className="text-white font-bold text-8xl">Loans. Homes.</h1>
        </div>
      </div>
    </div>
  );
}
