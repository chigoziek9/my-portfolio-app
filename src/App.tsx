

import "./App.css";
import { Navbars } from "../Components/Navbar";
import { Hero } from "../Components/Hero";
import { About } from "../Components/About";
import { Skills } from "../Components/Skills";
import { Projects } from "../Components/Projects";
import { Experience } from "../Components/Experience";
import { Contact } from "../Components/Contact";
import Footer from "../Components/Footer";

function App() {
  return (
    <>
       <Navbars />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
