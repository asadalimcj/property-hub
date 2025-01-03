import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import HouseListing from "./HouseListing";
import Map from "./Map";
import { DataContext } from "../data/HousesData";
import Detail from "./Detail";
import Modal from "./Modal";
import axios from "axios";

export default function Rell() {
  const houseList = useContext(DataContext);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const email = localStorage.getItem("email");

  const openModal = (house) => {
    setSelectedHouse(house);
  };
  const BuyHouse = async (House) => {
    try {
      console.log("Selected house:", House);

      const BuyHouseData = {
        email: email,
        house: {
          Images: House.Images,
          Address: House.Address,
          Price: House.Price,
          Bedrooms: House.Bedrooms,
          Bathrooms: House.Bathrooms,
          catagoryName: House.catagoryName,
        },
      };

      console.log("BuyHouseData:", BuyHouseData);

      // Send POST request to the backend for purchasing
      const res = await axios.post(
        "http://localhost:4001/api/buy",
        BuyHouseData
      );

      if (res.status === 200) {
        alert("Purchase successful!");

        // Delete the house from the database
        const deleteRes = await axios.delete(
          `http://localhost:4001/api/houses/${House._id}`
        );
        if (deleteRes.status === 200) {
          alert("House deleted successfully!");
          setSelectedHouse(null);
        } else {
          alert("Failed to delete the house.");
        }
      } else {
        alert("Error purchasing house!");
      }
    } catch (error) {
      console.error("Error buying house:", error);
      alert("An error occurred. Please try again.");
    }
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
            <p>No houses available for Rent</p>
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
          if (selectedHouse) {
            BuyHouse(selectedHouse);
          } else {
            console.log("No house selected.");
          }
          setSelectedHouse(null);
          setModalShow(true);
        }}
        house={selectedHouse}
      />
      {email ? undefined : (
        <Modal show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </div>
  );
}
