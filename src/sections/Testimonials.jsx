import React from "react";
import { testimonials } from "../constants";
import { quote } from "../assets/icons";
import { star } from "../assets/icons";

export const Testimonials = () => {
  return (
    <section className="padding-x max-container">
      <section>
        <h1 className=" w-fit relative text-3xl  before:h-2 before:w-full before:absolute before:-bottom-0 before:bg-gradient-to-r before:from-green-secondary before:to-shiny-green text-dark-text lg:text-5xl lg:before:-bottom-2">
          Ce que disent nos clients.
        </h1>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-2 gap-20 padding   ">
            {testimonials.map((tes) => (
              <div className="bg-primary max-w-[500px] p-6 flex flex-col justify-between gap-8 rounded-xl ">
                <div className="flex  justify-between ">
                  <img src={quote} alt="quote" srcset="" />
                  <div className="flex items-center gap-3">
                    <p className="text-white font-bold text-lg">5.0</p>
                    <span className="flex flex-wrap ">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <img
                          src={star}
                          key={index}
                          width={20}
                          height={20}
                          alt="star"
                        />
                      ))}
                    </span>
                  </div>
                </div>
                <p
                  className={`text-white text-lg leading-8 ${
                    tes.rtl ? ` text-right` : ``
                  }`}
                >
                  {tes.label}
                </p>
                <div className="flex items-center gap-6 pt-12">
                  <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-4  border-white">
                    <img
                      src={tes.imgURL}
                      className="w-full h-full object-cover "
                      alt={tes.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="text-white flex flex-col gap-3">
                    <p className="font-bold">{tes.name}</p>
                    <p>{tes.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
