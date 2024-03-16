import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen padding-x">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary mb-8">404</h1>
        <p className="text-lg text-gray-600 mb-4">Oops ! Page non trouvée.</p>
        <p className="text-lg text-gray-600 mb-8">
          La page que vous recherchez a peut-être été supprimée ou est temporairement indisponible.
        </p>
        <Link
          to="/"
          className="bg-primary text-white px-6 py-3 rounded-full transition duration-300 hover:bg-primary-dark"
        >
          Aller à la page d'accueil
        </Link>
      </div>
    </section>
  );
};
