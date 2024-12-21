const HouseListing = ({ price, bedrooms, bathrooms, size, address, image, onClick }) => {
  return (
    <div
      className="bg-white p-2 rounded-md shadow-lg h-[400px] w-full sm:w-[48%] flex flex-col cursor-pointer"
      onClick={onClick} // Add click handler
    >
      <img className="h-[50%] w-[95%] m-2" src={image} alt="" />
      <div className="p-2">
        <div className="flex flex-row items-center justify-between m-2">
          <h1 className="font-serif font-semibold">{price}</h1>
          <span className="text-2xl text-gray-500">...</span>
        </div>
        <p className="text-gray-600 m-2">
          {bedrooms} bd | {bathrooms} ba | {size} sqft
        </p>
        <p className="text-gray-600 m-2">{address}</p>
      </div>
    </div>
  );
};

export default HouseListing;
