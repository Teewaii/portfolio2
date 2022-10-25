import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import { ChevronUpIcon } from '@heroicons/react/24/solid'

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
      />    
    < Hero/>


    {/* <ScrollToTop style={{ color: '#146284' }} smooth component={<ChevronUpIcon />} /> */}
    </div>
  );
}

export default App;
