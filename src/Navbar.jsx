import React, { useRef } from 'react';
import Home from './assets/Home';
import About from './assets/About';
import Contact from './assets/Contact';
import Projects from './assets/Projects';
import Skills from './assets/Skills';

function Navbar() {
  // Refs for the sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function with offset to handle fixed navbar
  const scrollToSection = (section) => {
    if (section && section.current) {
      const offset = 70; // Adjust this for your navbar height
      window.scrollTo({
        top: section.current.offsetTop - offset, // Adjust the scroll position
        behavior: 'smooth',
      });
    }
  };
  return (
    <div class="w-full h-full flex flex-col ">
      <div class="w-full h-15 fixed top-0 left-0 z-[1000] flex justify-between bg-white p-3 items-center " >
        <a href='/' class="font-medium text-3xl cursor-pointer ">Portfolio</a>
        <ul class="md:flex md:w-230 md:justify-between hidden cursor-pointer text-2xl" >
          <li><button class="hover:bg-pink-300 hover:text-white rounded-md px-2 py-1" onClick={() => scrollToSection(homeRef)}>Home</button></li>
          <li><button class="hover:bg-pink-300 hover:text-white rounded-md px-2 py-1" onClick={() => scrollToSection(aboutRef)}>About</button></li>
          <li><button class="hover:bg-pink-300 hover:text-white rounded-md px-2 py-1" onClick={() => scrollToSection(skillsRef)}>Skills</button></li>
          <li><button class="hover:bg-pink-300 hover:text-white rounded-md px-2 py-1" onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
          <li><button class="hover:bg-pink-300 hover:text-white rounded-md px-2 py-1" onClick={() => scrollToSection(contactRef)}>Contact</button></li>
        </ul>
        <div class="md:hidden">
          <a class="text-4xl" href='#'> &#8801; </a>
        </div>
      </div>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div >
  )
}
export default Navbar