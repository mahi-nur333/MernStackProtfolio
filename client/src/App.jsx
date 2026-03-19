import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Publication from "./components/Publication";
import About from "./components/About";
import Projects from "./components/Project";
import Leadership from "./components/Leadership";
import Award from "./components/Award";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />  
      <Hero />
      <Section id="education" title="Education">
        <Education />
      </Section>
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
      <Section id="publications" title="Publications">
        <Publication />
      </Section>
      <Section id="projects" title="Projects">
        <Projects />
      </Section>
      <Section id="leadership" title="Leadership & Community Engagement">
        <Leadership />
      </Section>
      <Section id="awards" title="Awards & Scholarships">
        <Award />
      </Section>
      <Section id="about" title="About Me">
        <About />
      </Section>
      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </div>
  );
}
export default App