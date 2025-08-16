import React from "react";
import beliver from "../assets/beliver.jpg";
import { FaPlay } from "react-icons/fa";

const Cards = () => {
  return (
    <div className=" w-[200px] hover:bg-gray-800  h-[260px] border-0 rounded-md group transition-all duration-300 ease-in hover:scale-95">
      <div className="relative w-[195px] ">
        <img className="px-5 py-5 border-0 rounded-2xl " src={beliver} alt="" />

        <div className="absolute right-6 top-32 ">
          <FaPlay className="text-black bg-pink-500 h-10 w-10 border-0 rounded-full px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity  ease-in" />
        </div>
      </div>
      <div className="flex flex-col ml-3">
        <h3 className="text-[15px] font-sans font-bold text-white">
          Hello jeevan whats app
        </h3>
        <p className="text-[13px] font-medium text-gray-500">hello guys</p>
      </div>
    </div>
  );
};

export default Cards;
