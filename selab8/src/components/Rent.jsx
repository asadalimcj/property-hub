import React from "react";
import asad from "./asad.png";

// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "100%",
// };

// const center = {
//   lat: 37.7749,
//   lng: -122.4194,
// };
export default function Rent() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center m-4 gap-4">
      <div className="w-full md:w-1/2 bg-slate-950 h-[50vh] md:h-[100vh] text-white">
        <iframe className="flex items-center justify-a h-full w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.95368151565!2d74.0047345272737!3d31.48251798697851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731328572551!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="asad"
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 flex flex-row flex-wrap gap-4 justify-center">
        <div className="bg-white p-2 rounded-md shadow-lg h-[400px] w-full sm:w-[48%] flex flex-col">
          <img className="h-[50%] w-[95%] m-2" src={asad} alt="" />
          <div className="p-2">
            <div className="flex flex-row items-center justify-between m-2">
              <h1 className="font-serif font-semibold">$195,000</h1>
              <span className="text-4xl text-blue-600">...</span>
            </div>
            <p className="text-gray-600 m-2">1 bd | 1 ba | 635 sqft</p>
            <p className="text-gray-600 m-2">Address</p>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md shadow-lg h-[400px] w-full sm:w-[48%] flex flex-col">
          <img className="h-[50%] w-[95%] m-2" src={asad} alt="" />
          <div className="p-2">
            <div className="flex flex-row items-center justify-between m-2">
              <h1 className="font-serif font-semibold">$195,000</h1>
              <span className="text-2xl text-gray-500">...</span>
            </div>
            <p className="text-gray-600 m-2">1 bd | 1 ba | 635 sqft</p>
            <p className="text-gray-600 m-2">Address</p>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md shadow-lg h-[400px] w-full sm:w-[48%] flex flex-col">
          <img className="h-[50%] w-full m-2" src={asad} alt="" />
          <div className="p-2">
            <div className="flex flex-row items-center justify-between m-2">
              <h1 className="font-serif font-semibold">$195,000</h1>
              <span className="text-2xl text-gray-500">...</span>
            </div>
            <p className="text-gray-600 m-2">1 bd | 1 ba | 635 sqft</p>
            <p className="text-gray-600 m-2">Address</p>
          </div>
        </div>
      </div>
    </div>
  );
}
