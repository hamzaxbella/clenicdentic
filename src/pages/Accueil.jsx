import { Hero } from "../sections/Hero";
import { NumiricBar } from "../components/NumiricBar";
import { About } from "../sections/About";
import { Services } from "../sections/Services";
import { Testimonials } from "../sections/Testimonials";
import { CallToActionCard } from "../components/CallToActionCard";
import { Map } from "../components/Map";
import { Footer } from "../sections/Footer";

export const Accueil = () => {
  return (
    <section>
      <section>
        <Hero />
      </section>

      <section>
        <NumiricBar />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Testimonials />
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
