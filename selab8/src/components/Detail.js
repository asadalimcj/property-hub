import React from "react";
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal({ house, onHide, ...props }) {
  if (!house) return null; // Ensure house data is available

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="p-4"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{house.Address}</h2>
          <button
            onClick={onHide}
            className="text-4xl text-red-800 focus:outline-none"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {house.Images.slice(1).map((imag, index) => (
              <img
                key={index}
                src={imag}
                alt={`${index + 1}`}
                className="w-full h-48 object-cover rounded-md border border-gray-200 transform transition-transform duration-300 hover:scale-90"
              />
            ))}
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-medium text-lg">Price:</p>
              <p>{house.Price}</p>
            </div>
            <div>
              <p className="font-medium text-lg">Bedrooms:</p>
              <p>{house.Bedrooms}</p>
            </div>
            <div>
              <p className="font-medium text-lg">Bathrooms:</p>
              <p>{house.Bathrooms}</p>
            </div>
            <div>
              <p className="font-medium text-lg">Square Feet:</p>
              <p>{house["Ares (Square Feet)"]}</p>
            </div>
          </div>

          {/* About Home */}
          <div className="mt-6">
            <p className="font-medium text-lg">About Home:</p>
            <p className="text-gray-600">{house["About Home"]}</p>
          </div>

          {/* Email */}
          <div className="mt-4">
            <p className="font-medium text-lg">Email:</p>
            <p className="text-gray-600">{house.Email}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={onHide}
            className="px-6 py-2 bg-gray-700 text-white text-sm rounded-md hover:bg-gray-800"
          >
            {house.catagoryName}
          </button>
        </div>
      </div>
    </Modal>
  );
}
