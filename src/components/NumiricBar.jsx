import React from "react";
import { confidentials } from "../constants";

export const NumiricBar = () => {
  return (
    <section className="padding flex justify-center max-container ">
      <div className="flex flex-col  items-center gap-24 margin-x bg-light-green-bg w-fit px-12 py-20   rounded-2xl md:flex-row lg:justify-evenly lg:w-full">
        {confidentials.map((conf, index) => (
          <div key={index} className="text-center flex flex-col  lg:gap-4">
            <h2 className=" font-extrabold text-5xl lg:text-6xl">{conf.number}</h2>
            <p className="text-sm lg:text-lg">{conf.label}</p>
          </div>
        ))}
      </div>  
    </section>
  );
};
