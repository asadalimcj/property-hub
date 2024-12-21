import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import HouseListing from "./HouseListing";
import Map from "./Map";
import { DataContext } from "../data/HousesData";
import Detail from "./Detail";
import Modal from "./Modal";
import SellForm from './SellForm';

export default function Sell() {
  const houseList = useContext(DataContext);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [showsellModal, setSellModal] = useState(false);

  const email = localStorage.getItem("email");

  const openModal = (house) => {
    setSelectedHouse(house);
  };

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
              .filter((listing) => listing.catagoryName === "sell")
              .map((listing, index) => (
                <HouseListing
                  key={index}
                  onClick={() => openModal(listing)}
                  price={listing.Price}
                  bedrooms={listing.Bedrooms}
                  bathrooms={listing.Bathrooms}
                  size={listing["Ares (Square Feet)"]}
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
          setSellModal(true);

        }}
        house={selectedHouse}
      />
      {email ? (
        <SellForm show={showsellModal} onHide={()=>setSellModal(false)}/>
      ) : (
        <Modal show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </div>
  );
}
