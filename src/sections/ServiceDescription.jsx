import React from "react";

export const ServiceDescription = ({ content }) => {
  return (
    <section className=" bg-light-green-bg padding text-justify mt-52">
      <section className="max-container">
        <div className="flex justify-center mb-12">
          <h1 className=" w-fit relative text-3xl  before:h-2 before:w-full before:absolute before:-bottom-0 before:bg-gradient-to-r before:from-green-secondary before:to-shiny-green text-dark-text lg:text-5xl lg:before:-bottom-2">
            {content.nom}
          </h1>
        </div>

        <p className="text-lg padding-x leading-10">{content.description}</p>
      </section>
    </section>
  );
};
