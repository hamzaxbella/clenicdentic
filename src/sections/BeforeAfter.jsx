import React from "react";

export const BeforeAfter = ({ beforeAfterImages }) => {
  return (
    <section className="padding">
      <section className="max-container">
        <div className="flex justify-center">
          <h1 className=" w-fit relative text-3xl  before:h-2 before:w-full before:absolute before:-bottom-0 before:bg-gradient-to-r before:from-green-secondary before:to-shiny-green text-dark-text lg:text-5xl lg:before:-bottom-2">
            Avant & Aprés.
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly padding">
          {beforeAfterImages.map((image) => (
            <div className=" w-[20rem] lg:w-[30rem] rounded-2xl overflow-hidden h-[500px] mb-10 gap-10">
              <img loading="lazy" src={image} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
