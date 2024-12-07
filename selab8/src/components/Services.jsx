import React from "react";
import { Link } from "react-router-dom";

const Services = (props) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md max-w-sm">
      <div className="mb-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500">
            <img src={props.image} alt="" />
          </span>
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{props.title}</h2>
      <p className="text-gray-600 text-center mb-4">{props.description}</p>
      <Link to="" className="border no-underline border-gray-400 text-blue-700 font-bold py-2 px-4 rounded-lg hover:bg-blue-200 focus:outline-none focus:ring focus:ring-gray-300">
        {props.button}
      </Link>
    </div>
  );
};

export default Services;
