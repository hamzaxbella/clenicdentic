import React from "react";
import { weekDays } from "../constants";

export const OpenningHours = () => {
  return (
    <section className=" max-container padding padding-x flex justify-center text-center">
      <div className="bg-primary py-8 w-full lg:w-3/4 padding-x rounded-3xl">
        <h1 className="white text-3xl text-white-smoke font-medium">Horaires d'ouvertures</h1>
        <div className="flex gap-6 padding justify-center flex-wrap">
          {weekDays.map((day) => (
            <div
              className={`${
                !day.isActive ? "bg-dark-text text-white-smoke" : 'bg-white-smoke text-dark-text'
              } w-[70px] h-[70px] rounded-full flex justify-center items-center`}
            >
              {day.day} 
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 lg:gap-12 items-center pb-6">
          <p className="text-white-smoke"><span className="font-bold">ouvert à </span>8h</p>
          <div className="relative">
            <div className=" border-b-2 border-white w-[6rem] lg:w-[20rem] h-1"></div>
            <div className=" absolute right-0 top-1/2 -translate-y-[45%]  w-2 h-2 rotate-45 border-r-2 border-t-2 border-white"></div>
          </div>
          <p className="text-white-smoke"><span className="font-bold">ferme à </span>21h</p>

        </div>
      </div>
    </section>
  );
};
