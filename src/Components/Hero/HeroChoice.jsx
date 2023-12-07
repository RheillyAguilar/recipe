import React from "react";
import { Link } from "react-router-dom";
import { HeroChoiceData } from "../../Constant/Data";
import "./hero.css";

const HeroChoice = ({ isDarkMode }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-10 py-28 px-5">
      {HeroChoiceData.map((choice) => (
        <div className="relative" key={choice.id}>
          <img src={choice.image} alt="" className="w-64 rounded-2xl" />
          <Link className="absolute top-[30%] left-1/2 -translate-x-1/2 translate-y-1/2" to={choice.destination}>
            <button
              className={`button bg-[#ff8906] text-[#fffffe] px-5 py-3 text-lg rounded-lg hover:text-[#ff8906] hover:bg-[#fffffe] duration-200 ease-in-out ${
                isDarkMode ? "dark-button" : "" }`}>
              {choice.title}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroChoice;
