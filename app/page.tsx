import Hero from "@/components/sections/Hero";
import About from "@/components/sections/AboutUs";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import { WhyChooseUs, AfterTreatment } from "@/components/sections/WhyChooseUs";
import Consultation from "@/components/sections/Consultation";
import Testimonials from "@/components/sections/Testimonials";
import Specialists from "@/components/sections/Specialist";
import LanguageInterpretation from "@/components/sections/LanguageInterpretation";
import EmergencyHotline from "@/components/sections/EmergencyHotline";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="whyChooeUs">
        <WhyChooseUs />
        <AfterTreatment />
      </section>
      <section id="consultation">
        <Consultation />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="languageInterpretation">
        <LanguageInterpretation />
      </section>
      <section id="specialist">
        <Specialists />
      </section>
      <section id="emergencyHotline">
        <EmergencyHotline />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
