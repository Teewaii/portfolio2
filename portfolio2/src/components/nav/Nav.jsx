import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import hamburger from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import Btn from '../btn/Btn';

export default function Nav({ toggle, toggleMenu }) {
  const [shadow, setShadow] = useState(false);
  function NavShadow() {
    if (window.scrollY >= 90) {
      setShadow(true)
    } else {
      setShadow(false)
    }
  }
  window.addEventListener('scroll', NavShadow)

  return (

    <nav className={shadow ? ' bg-primary sticky left-0 right-0 shadow-xl  top-0 NavShadow  ' : ' bg-primary  sticky left-0 right-0  z-[2000]  top-0 NavShadow'} >

      <div className='navContainer container flex items-center  justify-between py-[20px] md:py-[30px] 3xl:py-[45px] '>
        <div className="logo cursor-pointer relative z-[90] ">
          <img className='w-[40px] lg:w-[50px]' src={logo} alt="" />

        </div>
        <div className="links z-40 ">
          <ul className={toggle ? 'hidden  md:bg-opacity-0 flex-col items-start  gap-[20px] absolute top-0 left-0 right-0 pt-[128px] pb-[44px]  md:flex md:gap-[30px] md:flex-row md:relative md:p-0 ' : '  flex flex-col items-start  bg-[white]  md:bg-[inherit] absolute top-0 left-0 right-0 pt-[128px] pb-[44px]  md:flex md:gap-[30px] md:flex-row md:relative md:p-0'}>

            <li className='text-left mt-[20px] text-primary  font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
              md:text-[white]   md:border-b-0 md:pb-0 md:mt-0 md:hover:border-b-0'><a className=' ml-[40px]' href="#">About</a></li>
            <li className='text-left mt-[20px] text-primary font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
              md:text-[white]   md:border-b-0 md:pb-0 md:mt-0 md:hover:border-b-0'><a className=' ml-[40px]  ' href="#">Experience</a></li>
            <li className='text-left mt-[20px]  text-primary  font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
               md:text-[white]  md:border-b-0 md:pb-0 md:mt-0 md:hover:border-b-0'><a className=' ml-[40px]   ' href="#">Projects</a></li>
            <li className='text-left mt-[20px]   text-primary  font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:text-[white] md:border-b-0 md:pb-0 md:mt-0 md:hover:border-b-0'><a className=' ml-[40px]  ' href="#">Resume</a></li>

            <div className="hello scale-[0.8] ml-[20px] mt-[20px] md:hidden">
              {/* <button className='btn-small  hover:bg-secondary hover:text-primary duration-300 ease-in-out' >Say hello!</button> */}

            </div>

          </ul>

        </div>
        <div className="icon space-x-8 flex items-center z-[90] md:hidden ">

          <div className="toggles md:hidden relative z-[290]" onClick={toggleMenu}  >
            {toggle ?
              <img className='md:hidden w-[28px]   cursor-pointer' src={hamburger} alt="hamburger" /> :
              <img className='md:hidden w-[25px]   cursor-pointer' src={close} alt="close-menu" />}

          </div>
        </div>
      </div>

    </nav>

  )
}
