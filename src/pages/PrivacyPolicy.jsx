import React from "react";
import { Footer } from "../sections/Footer";

export const PrivacyPolicy = () => {
  return (
    <section className="">
      <section className="max-container padding padding-x">
        <h1 className="text-3xl font-semibold text-primary mb-8">
          Politique de confidentialité
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Votre confidentialité est importante pour nous. Cette politique de
          confidentialité explique comment nous recueillons, utilisons et
          protégeons vos informations personnelles lorsque vous visitez notre
          site Web.
        </p>
        <h2 className="text-xl font-semibold text-primary mb-4">
          Collecte et utilisation des informations
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Nous recueillons des informations personnelles lorsque vous nous les
          fournissez volontairement en remplissant des formulaires sur notre
          site Web ou en nous contactant par e-mail. Ces informations peuvent
          comprendre votre nom, votre adresse e-mail, votre numéro de téléphone
          et d'autres informations que vous choisissez de nous fournir.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Nous utilisons les informations que vous nous fournissez pour répondre
          à vos demandes, traiter vos commandes et fournir un meilleur service
          client. Nous ne partageons pas vos informations avec des tiers, sauf
          lorsque cela est nécessaire pour répondre à vos demandes ou pour
          respecter la loi.
        </p>
        <h2 className="text-xl font-semibold text-primary mb-4">
          Protection des informations
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Nous prenons des mesures de sécurité appropriées pour protéger vos
          informations personnelles contre tout accès non autorisé, toute
          divulgation, toute altération ou toute destruction. Toutefois,
          veuillez noter qu'aucune méthode de transmission sur Internet ou de
          stockage électronique n'est totalement sécurisée. Par conséquent, bien
          que nous nous efforcions de protéger vos informations personnelles,
          nous ne pouvons garantir leur sécurité absolue.
        </p>
        <h2 className="text-xl font-semibold text-primary mb-4">Cookies</h2>
        <p className="text-lg text-gray-600 mb-6">
          Notre site Web utilise des cookies pour améliorer votre expérience
          utilisateur. Vous pouvez choisir de refuser les cookies en ajustant
          les paramètres de votre navigateur, mais cela peut affecter certaines
          fonctionnalités de notre site.
        </p>
        <h2 className="text-xl font-semibold text-primary mb-4">
          Modifications de la politique de confidentialité
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Nous nous réservons le droit de mettre à jour ou de modifier notre
          politique de confidentialité à tout moment. Nous vous recommandons de
          consulter régulièrement cette page pour prendre connaissance des
          éventuelles modifications. En continuant à utiliser notre site Web,
          vous acceptez ces modifications.
        </p>
        <h2 className="text-xl font-semibold text-primary mb-4">
          Contactez-nous
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Si vous avez des questions ou des préoccupations concernant notre
          politique de confidentialité, n'hésitez pas à nous contacter.
        </p>
      </section>
      <Footer />
    </section>
  );
};
