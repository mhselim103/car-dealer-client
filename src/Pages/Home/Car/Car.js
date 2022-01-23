import React from "react";

const Car = ({ car }) => {
  return (
    <div className="rounded-lg shadow-lg bg-white">
      <div className="p-2">
        <img className="rounded-lg" src={car.photo} alt="" />
      </div>

      <div className="p-3">
        <div className="flex justify-between">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{car.name}</h5>
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            ${car.price}
          </h5>
        </div>
        <p className="text-gray-700 text-base mb-4">{car.description}</p>
        {/* <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button> */}
      </div>
    </div>
  );
};

export default Car;
