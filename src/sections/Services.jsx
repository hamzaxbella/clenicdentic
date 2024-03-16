import { services } from "../constants";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <section className="bg-light-green-bg">
      <section className="padding-x max-container padding section-spacing text-center">
        <div className="flex flex-col items-center">
          <h1 className=" w-fit relative text-3xl  before:h-2 before:w-full before:absolute before:-bottom-0 before:bg-gradient-to-r before:from-green-secondary before:to-shiny-green text-dark-text lg:text-5xl lg:before:-bottom-2">
            Notre Services.
          </h1>
          <p className="padding margin-x lg:w-1/2 text:md lg:text-lg leading-10 text-gray-text">
            Découvrez notre gamme complète de services dentaires, conçus pour
            répondre à vos besoins avec expertise et dévoument.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:grid-rows-2  gap-16 gap-y-32 padding max-w-[80%] md:max-w-full mx-auto">
          {services.map((service) => (
            <div className="relative flex flex-col items-center text-center justify-between gap-8 bg-white shadow-xl rounded-lg py-6 px-2 ">
              <img
                src={service.icon}
                width={100}
                className="absolute -top-1/2 translate-y-[60px]"
                alt={service.title}
              />
              <h4 className="font-semibold text-dark-text text-xl pt-8">
                {service.title}
              </h4>
              <p className="text-gray-text ">{service.description}</p>
              <Link to={service.path} className="text-primary hover:underline">
                voir plus {">"}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
