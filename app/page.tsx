import Hero from "@/components/sections/Hero";
import About from "@/components/sections/AboutUs";
import Doctors from "@/components/sections/Doctors";
import Appointments from "@/components/sections/Appointments";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      {/* <section id="services">
        <Services />
      </section> */}
      <section id="doctors">
        <Doctors />
      </section>
      <section id="appointments">
        <Appointments />
      </section>
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
