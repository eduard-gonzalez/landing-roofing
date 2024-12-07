import Hero from '@/components/home/Hero';
import AboutUs from '@/components/home/AboutUs';
import Services from '@/components/home/Services';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';

const HomePage = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;