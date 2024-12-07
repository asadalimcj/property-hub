import React from "react";

export default function DisplayApiData(props) {
  return (
    <div className="flex flex-col items-center m-4 bg-white p-4 rounded-lg shadow-lg">
      <h1 className="text-lg font-bold mb-2">{props.name}</h1>
      <img src={props.url} alt={props.name} className="w-64 h-auto rounded-lg" />
    </div>
  );
}
