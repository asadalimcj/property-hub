import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
const DataContext = createContext();


function HousesData({children}) {
    const [houseList, setHouse] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      try {
        const response = await axios.get(
          "https://property-hub-backend.vercel.app/api/productlist"
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
    <DataContext.Provider value={houseList}>
        {children}
    </DataContext.Provider>
  )
}


export {DataContext, HousesData};