import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
import DisplayApiData from "./DisplayApiData";

export default function ApiData() {
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=50"
    );
    setData(response.data);
    console.log(response.data);
  };
  
  return (
    <div className="bg-slate-700 h-[100vh]">
      <Navbar />
      <div className="flex items-center justify-center mt-5">
        <button
          className="bg-green-400 py-1 px-2 rounded-lg font-semibold"
          onClick={fetchData}
        >
          Fetch Data
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <DisplayApiData key={item.id} name={item.author} url={item.download_url} />
        ))}
      </div>
    </div>
  );
}
