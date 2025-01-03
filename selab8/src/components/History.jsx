import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      const email = localStorage.getItem("email");

      if (!email) {
        setError("Email is not available in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`http://localhost:4001/api/buy/${email}`);
        setHistory(res.data);
      } catch (error) {
        console.error("Error fetching history:", error);
        setError(error.response?.data?.message || "Error fetching purchase history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const groupedHistory = history.reduce((acc, item) => {
    const category = item.house?.catagoryName || "Unknown";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto">
      <Navbar />
      <h1 className="container text-3xl font-semibold mb-4">Purchase History</h1>
      {Object.keys(groupedHistory).length === 0 ? (
        <p className="text-center text-lg">No purchase history found for this email.</p>
      ) : (
        Object.keys(groupedHistory).map((category) => (
          <div key={category} className="mb-8 container">
            <h2 className="text-2xl font-bold mb-4 capitalize">{category} Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {groupedHistory[category].map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  {item.house?.Images?.[0] && (
                    <img
                      src={item.house.Images[0]}
                      alt="House"
                      className="w-full h-48 rounded-lg object-cover mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    />
                  )}
                  <div>
                    <p className="text-lg font-medium">
                      <strong>Address:</strong> {item.house?.Address || "N/A"}
                    </p>
                    <p className="text-lg font-medium">
                      <strong>Price:</strong> {item.house?.Price || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Bedrooms:</strong> {item.house?.Bedrooms || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Bathrooms:</strong> {item.house?.Bathrooms || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Date:</strong> {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
