import React from 'react';
import Nav from '../nav/Nav';


export default function Footer() {
  return (
    <section className='h-[35vh] bg-primary relative 
  md:h-[20vh]
    '>
      <div className="footer-wrapper flex flex-col justify-around items-center container
       md:pt-[40px] lg:flex-row 
      ">
        <div className="links  text-center">
          <ul className='  flex flex-wrap   pt-[50px] pb-[44px] gap-[30px] md:flex md:gap-[30px] md:flex-row md:relative md:p-0
          text-[white] md:items-start'>

            <li><a href="#">About</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
            <div className="hello scale-[0.8] ml-[20px] mt-[20px] md:hidden">
              {/* <button className='btn-small  hover:bg-secondary hover:text-primary duration-300 ease-in-out' >Say hello!</button> */}

            </div>

          </ul>
        </div>
        <div className="copywrite text-secondary flex items-center gap-8  ">
          <p className='mt-[30px] lg:mt-0 lg:text-[18px] '>Designed and developed by Ajimati Taiye &#169; 2022</p>
          {/* <p className=''>&#169; 2022, Ajimati Taiye</p> */}

        </div>

      </div>
    </section >
  )
}
