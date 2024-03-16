import React from "react";
import { useParams } from "react-router-dom";
import { CallToActionCard } from "../components/CallToActionCard";
import { Map } from "../components/Map";
import { Navbar } from "../components/Navbar";
import { Footer } from "../sections/Footer";
import { PageBanner } from "../sections/PageBanner";
import { ServiceDescription } from '../sections/ServiceDescription';
import { Services } from "../sections/Services";
import { servicesContent as content } from '../constants';
import { BeforeAfter } from '../sections/BeforeAfter';
import { NotFound } from "../pages/NotFound"; // Import NotFound page component

export const Service = () => {
  const { service } = useParams();

  const serviceData = content[service]; // Get service content based on the route parameter

  // Check if serviceData exists, if not, redirect to NotFound page
  if (!serviceData) {
    return <NotFound />;
  }

  return (
    <div>
      <PageBanner imgURL={serviceData.bannerURL} Label={serviceData.title} />
      <ServiceDescription content={serviceData} />
      { serviceData.beforeAfter && <BeforeAfter beforeAfterImages={serviceData.beforeAfter} /> }
      <Services services={serviceData.services} />
      <CallToActionCard />
      <Map />
      <Footer />
    </div>
  );
};
