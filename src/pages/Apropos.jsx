import { aboutbanner } from "../assets/images";
import { PageBanner } from "../sections/PageBanner";
import { contactSimple } from "../constants";
import { About } from "../sections/About";
import {Collaborations} from '../sections/Collaborations'
import { CallToActionCard } from "../components/CallToActionCard";
import { Map } from "../components/Map";
import { Footer } from "../sections/Footer";
import { OurTeam } from "../sections/OurTeam";


export const Apropos = () => {
  return (
    <section className="mt-[100px] ">

        <section>
          <PageBanner
            imgURL={aboutbanner}
            Label={"Votre sourire, Notre Priorité"}
          />
        </section>

        <section>
          <OurTeam/>
        </section>

        <section>
          <About />
        </section>


        <section>
          <Collaborations/>
        </section>

        <section>
          <CallToActionCard/>
        </section>

        <section>
          <Map/>
        </section>

        <section>
          <Footer/>
        </section>
      </section>
  );
};
