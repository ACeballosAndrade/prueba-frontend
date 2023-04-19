import React from "react";

const SectionImages = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="flex justify-center text-4xl font-bold">Latest News</h1>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-screen gap-5 py-8 px-4">
        <div className="mb-4 bg-ima1 h-screen bg-center">
          <div className="text-white px-5">
            <p>Events</p>
            <h2 className="text-2xl font-bold mt-2">Exclusive new product</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing...</p>
          </div>
        </div>

        <div className="mb-4 bg-ima2 h-screen bg-center">
          <div className="text-white px-5">
            <p>Events</p>
            <h2 className="text-2xl font-bold mt-2">Benefit Progrm Design</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing...</p>
          </div>
        </div>

        <div className="mb-4 bg-ima3 h-screen">
          <div className="text-white px-5">
            <p>Events</p>
            <h2 className="text-2xl font-bold mt-2">Content Creation for Team</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionImages;
