import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HouseLising from "./HouseListing";
import Map from "./Map";
import axios from "axios";

export default function Sell() {
  const [houseList, setHouse] = useState([]);
  useEffect(() => {
    const getHouses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/api/productlist"
        );
        setHouse(response.data);
      } catch (error) {
        console.log(error);
        alert("Failed to fetch houses");
      }
    };
    getHouses();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col-reverse sm:flex-row justify-center m-4 gap-4">
        <Map />
        <div className="w-full md:w-1/2 flex flex-row flex-wrap gap-4 justify-center">
          {houseList.map((listing, index) => (
            <HouseLising
              key={index}
              price={listing.Price}
              bedrooms={listing.Bedrooms}
              bathrooms={listing.Bathrooms}
              size={listing.SquareFeet}
              address={listing.Address}
              image={listing.Image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
