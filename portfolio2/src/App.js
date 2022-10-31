import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Socials from './components/socials/Socials';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import Projects from './components/projects/Projects';


function App() {

  const [toggle, setToggle] = useState(true);


  function toggleMenu() {
    setToggle(prev => !prev);
  }
  return (
    <div className="App">
      <Nav
        toggle={toggle}
        toggleMenu={toggleMenu}
        setToggle={setToggle}
      />
      < Hero />
      <About />
      <Experience />
      <Projects />
      <Socials />
      <ScrollToTop style={{ color: '#146284' }} smooth component={<ChevronUpIcon />} />
      {!toggle &&
        <div className="overlay bg-primary opacity-[0.8]  absolute top-0 left-0 right-0 bottom-0" onClick={toggleMenu}></div>}
    </div>
  );
}

export default App;