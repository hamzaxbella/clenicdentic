import { contactSimple, trustCards } from "../constants";
import { PrimaryButton } from "../components/PrimaryButton";
import { Link } from "react-router-dom";
import { star } from "../assets/icons";
import { dr1 } from "../assets/images";

export const Hero = () => {
  return (
    <section className="padding-x w-full lg:pt-12 bg-white-smoke text-sm  hero-height">
      <section className="max-container flex flex-col justify-evenly md:justify-center md:gap-12 lg:justify-between lg:gap-0 h-full">
        {/* CONTACT INFO */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-12 ">
          {contactSimple.map((contact) => (
            <div
              className="flex gap-2 text-md font-normal text-gray-text md:text-lg"
              key={contact.label}
            >
              <img src={contact.icon} width={20} height={20} alt="phone" />
              <p>{contact.label}</p>
            </div>
          ))}
        </div>

        <div className="lg:flex">
          <div className="lg:flex-1 pb-10">
            {/* HERO INFO */}
            <div className="flex flex-col gap-6 ">
              <p className="text-md text-primary md:text-lg ">maroc dentaire.</p>
              <h2 className="text-2xl font-medium text-dark-text leading-8 md:text-3xl md:w-3/4">
                Votre Dentiste Expérimenté pour un Sourire Sain et Lumineux.
              </h2>
              <p className="text-md md:text-lg text-gray-text ">
                Maroc Dentaire: Expertise dentaire à Marrakech. Avec le
                Dr.Karim, sourires éclatants et confort assurée. Votre santé
                bucco-dentaire, notre priorité.
              </p>
              <div className="flex gap-4 items-center">
                <PrimaryButton />
                <Link
                  to={"/about"}
                  className="text-dark-text text-md hover:ml-3 duration-200"
                >
                  {" "}
                  A propos {">"}{" "}
                </Link>
              </div>
            </div>

            {/* REVEIWS CARDS */}
            <div className="flex justify-evenly md:justify-start relative bottom-[4%] w-full gap-6 mt-12 z-[6]">
              {trustCards.map((card) => (
                <div className="flex gap-4 items-center full-shadow px-2 py-6 md:px-10 md:py-10 md:rounded-lg rounded-md bg-white-smoke hover:scale-105 cursor-pointer duration-300">
                  <img
                    src={card.icon}
                    width={30}
                    height={30}
                    alt="google and facebook reviews"
                  />
                  <div>
                    <span className="flex items-center gap-2">
                      <p className="text-xsm">{card.rating}</p>
                      <div className="flex ">
                        {Array.from({ length: card.stars }).map((_, index) => (
                          <img
                            src={star}
                            key={index}
                            width={15}
                            height={15}
                            alt="star"
                          />
                        ))}
                      </div>
                    </span>
                    <p className="text-xsm">basé sure {card.reviews} avis</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dortor Image */}
          <div className="hidden lg:block flex-1   relative">
            <div className="bg-primary w-[500px] h-[400px] absolute bottom-0 rounded-custom right-0">
            <img  src={dr1} rel="preload" fetchPriority="high" as="image" type="image/png" className="absolute bottom-0 right-0 max-w-[450px]" alt="" />
            <div className="absolute -top-4 -translate-y-full py-3 px-12 bg-white ring-1 ring-primary ring-opacity-30 rounded-xl font-bold text-primary">Karim yahya</div>
            </div>
          </div>
        </div>
        <div className=" z-[5] w-full bg-gradient-to-t from-white h-20 absolute -bottom-1 right-0"></div>
      </section>
    </section>
  );
};
