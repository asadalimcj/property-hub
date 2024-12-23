import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import HouseListing from "./HouseListing";
import Map from "./Map";
import { DataContext } from "../data/HousesData";
import Detail from "./Detail";
import Modal from "./Modal";

export default function Sell() {
  const houseList = useContext(DataContext);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const email = localStorage.getItem("email");

  const openModal = (house) => {
    setSelectedHouse(house);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredHouseList = houseList.filter(
    (listing) =>
      listing.catagoryName === "rent" &&
      listing.Address.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center pt-1">
        <input
          type="text"
          placeholder="Search by address..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-md p-2 mb-4 w-full md:w-1/2"
        />
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-center m-4 gap-4 flex-1">
        <Map />
        <div className="w-full md:w-1/2 flex flex-row flex-wrap gap-4 justify-center overflow-y-auto max-h-[calc(100vh-4rem)]">
          {filteredHouseList.length === 0 ? (
            <p>No houses available for sale</p>
          ) : (
            filteredHouseList.map((listing, index) => (
              <HouseListing
                key={index}
                onClick={() => openModal(listing)}
                price={listing.Price}
                bedrooms={listing.Bedrooms}
                bathrooms={listing.Bathrooms}
                address={listing.Address}
                image={listing.Images?.[0]}
              />
            ))
          )}
        </div>
      </div>
      <Detail
        show={!!selectedHouse}
        onHide={() => {
          setSelectedHouse(null);
          setModalShow(true);
        }}
        house={selectedHouse}
      />
      {email ? (
        <h1>hello</h1>
      ) : (
        <Modal show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </div>
  );
}