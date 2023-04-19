import React from "react";

const CardInfo = ({ title, description, buttonText, ruta }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center md:flex-row animate-fade-in opacity-0">
        <div className="w-full md:w-2/3">
          <img
            className="h-auto w-full object-cover"
            src={ruta}
            alt="Descripción de la imagen"
          />
        </div>
        <div className="bg-white rounded-md p-4 w-full md:w-1/3">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-700 duration-200 bg-primary text-white px-4 py-2 rounded-full  focus:outline-none">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
