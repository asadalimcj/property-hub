import React from "react";
import Navbar from "./Navbar";
import HouseLising from "./HouseListing";
import Map from "./Map";
import asad from "./asad.png";

export default function Sell() {
  const listings = [
    {
      price: "195,000",
      bedrooms: 1,
      bathrooms: 1,
      size: 635,
      address: "Address 1",
      image: asad,
    },
    {
      price: "195,000",
      bedrooms: 1,
      bathrooms: 1,
      size: 635,
      address: "Address 2",
      image: asad,
    },
    {
      price: "195,000",
      bedrooms: 1,
      bathrooms: 1,
      size: 635,
      address: "Address 3",
      image: asad,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col-reverse sm:flex-row justify-center m-4 gap-4">
        <Map />
        <div className="w-full md:w-1/2 flex flex-row flex-wrap gap-4 justify-center">
          {listings.map((listing, index) => (
            <HouseLising
              key={index}
              price={listing.price}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              size={listing.size}
              address={listing.address}
              image={listing.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
