import React from "react";
import { PrimaryButton } from "./PrimaryButton";

export const CallToActionCard = () => {
  return (
    <section className="max-container padding">
      <div className=" bg-green-dark text-center py-10 lg:padding lg:rounded-2xl flex flex-col justify-center items-center ">
        <h1 className="text-white font-light text-2xl lg:text-5xl pb-10">
          Prenez un rendez-vous
        </h1>
        <PrimaryButton action />
      </div>
    </section>
  );
};
