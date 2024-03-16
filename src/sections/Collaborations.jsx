import React from "react";
import { collaborations } from "../constants";

export const Collaborations = () => {
  return (
    <section className=" padding ">
      <section className="bg-light-green-bg padding">
        <div className="max-container flex justify-evenly flex-wrap gap-10 lg:gap-0">
          {collaborations.map((item) => (
            <img
              loading="lazy"
              src={item}
              className="w-[200px] h-[150px] object-cover"
              alt=""
              srcset=""
            />
          ))}
        </div>
      </section>
    </section>
  );
};
