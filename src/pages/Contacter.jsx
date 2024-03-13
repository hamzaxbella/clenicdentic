import { PageBanner } from "../sections/PageBanner";
import { contactbanner } from "../assets/images";
import { CallToActionCard } from "../components/CallToActionCard";
import { ContactForm } from "../sections/ContactForm";
import { Footer } from "../sections/Footer";
import { OpenningHours } from "../sections/OpenningHours";
import { Map } from "../components/Map";

export const Contacter = () => {
  return (
    <section className="mt-[100px]">
      <section>
        <PageBanner
          imgURL={contactbanner}
          Label={"N'hésitez pas à nous contacter"}
        />
      </section>

      <section>
        <ContactForm />
      </section>

      <section>
        <OpenningHours />
      </section>

      <section>
        <CallToActionCard />
      </section>

      <section>
        <Map />
      </section>

      <section>
        <Footer />
      </section>
    </section>
  );
};
