import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
        <>
            <section id="home">
                <Hero />
            </section>

            <Stats />

            <section id="services">
                <Services />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="why-us">
                <WhyChooseUs />
            </section>

            <section id="process">
                <Process />
            </section>

            <section id="portfolio">
                <Portfolio />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="faq">
                <FAQ />
            </section>

            <section id="contact">
                <CTA />
            </section>
        </>
  );
}