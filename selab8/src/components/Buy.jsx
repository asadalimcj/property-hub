import React, { useContext } from "react";
import Navbar from "./Navbar";
import HouseListing from "./HouseListing";
import Map from "./Map";
import { DataContext } from "../data/HousesData";

export default function Sell() {
  const houseList = useContext(DataContext);
  console.log("House List from Context:", houseList);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col-reverse sm:flex-row justify-center m-4 gap-4 flex-1">
        <Map />
        <div className="w-full md:w-1/2 flex flex-row flex-wrap gap-4 justify-center overflow-y-auto max-h-[calc(100vh-4rem)]">
          {houseList.length === 0 ? (
            <p>No houses available for sale.</p>
          ) : (
            houseList
              .filter((listing) => listing.catagoryName === "buy")
              .map((listing, index) => (
                <HouseListing
                  key={index}
                  price={listing.Price}
                  bedrooms={listing.Bedrooms}
                  bathrooms={listing.Bathrooms}
                  size={listing["Square Feet"]} 
                  address={listing.Address}
                  image={listing.Image}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}
