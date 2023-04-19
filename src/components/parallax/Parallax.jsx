import React from "react";

const Parallax = () => {
  return (
    <div
      className="h-screen bg-fixed bg-cover"
      style={{
        backgroundImage: `url('https://fondosmil.com/fondo/53030.jpg')`,
      }}
    >
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <p className="mt-4 text-lg text-white">Strong fundation</p>
        <h1 className="text-4xl font-bold text-white">
          Working process with our latest porjects
        </h1>
      </div>
    </div>
  );
};

export default Parallax;
