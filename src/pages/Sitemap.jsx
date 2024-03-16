import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../sections/Footer";

export const Sitemap = () => {
  return (
    <section className=" bg-light-green-bg">
      <section className="max-container px-6 py-12 lg:py-24">
        <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-8">
          Plan du site
        </h1>
        <ul className="list-disc text-lg text-gray-800">
          <li className="mb-4">
            <Link to="/" className="text-primary hover:underline">
              Accueil
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/about" className="text-primary hover:underline">
              À propos
            </Link>
          </li>
          <li className="mb-4">
            <span className="text-primary">Services</span>
            <ul className="list-disc ml-4">
              <li className="mb-2">
                <Link
                  to="/médecineDesDents"
                  className="text-primary hover:underline"
                >
                  médecine des dents
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/ImplantsDentaires"
                  className="text-primary hover:underline"
                >
                  Implants dentaires
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/RémunérationEtInstallation"
                  className="text-primary hover:underline"
                >
                  Rémunération et installation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/Orthodontique"
                  className="text-primary hover:underline"
                >
                  Orthodontique
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/SourireHollywoodien"
                  className="text-primary hover:underline"
                >
                  Sourire hollywoodien
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/ConsultationDentaire"
                  className="text-primary hover:underline"
                >
                  Consultation dentaire
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <Link to="/contact" className="text-primary hover:underline">
              Nous contacter
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/privacy" className="text-primary hover:underline">
              Politique de confidentialité
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/terms" className="text-primary hover:underline">
              Conditions d'utilisation
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/map" className="text-primary hover:underline">
              Plan du site
            </Link>
          </li>

        </ul>
      </section>
      <Footer />
    </section>
  );
};
