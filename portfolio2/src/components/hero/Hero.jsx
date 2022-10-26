
import React from 'react';

import Btn from '../btn/Btn';

export default function Hello() {
  return (

    <section className='hero bg-spiral-mob bg-no-repeat   bg-cover bg-bottom- h-[100vh]
    lg:bg-spiral-lg  lg:h-[91vh] 2xl:lg:h-[95vh] relative after:absolute
    after:bg-secondary after:top-[70%] after:bottom-0 after:left-0
    after:right-0 after:z-[-1] after:opacity-[0.2]
    '>

      <div className="hero-wrapper flex items-center bg-primary pt-[50px] h-[75%] 
      
      lg:h-[85%] lg:pt-0   ">
      {/* lg:h-[85%] lg:pt-[10px] 2xl:pt-[50px]  "> */}
        <div className="bucket container lg:min-w-[200px] lg:px-[10rem] ">

          <div className="desc text-left lg:flex-[1.7]  overflow-x-hidden ">
            <h2 className='mb-[5px] font-medium text-[18px] text-[white]
                    lg:text-[25px]  3xl:text-[30px]
                    '>Hi, my name is</h2>

            <h1 className='name text-secondary text-[1.8rem] mb-[12px] relative  inline-block pr-[3px]                   
                       md:text-[2.5rem] md:mb-[18px] 2xl:mb-[26px]  xl:text-[3.5rem]  bg-primary                
                       '>Ajimati Taiye,</h1>
            <h1 className='header font-700 job   text-[2rem] relative text-[white]  leading-[2.6rem]
          mb-[10px] lg:mb-[20px] md:text-[3rem] 2xl:text-[5.3rem] md:leading-[3.8rem] 2xl:leading-[6rem] 
           
           ' >I <span className='text-green'>Design</span>  & <span className='text-green'>Build</span>  Web Based Software Solutions!</h1>
            <p className="body text-[0.9rem] md:text-[1.2rem] mb-[60px] text-secondary opacity-75 font-light leading-[1.3rem]
                    md:w-[85%]   2xl:text-[1.5rem]  2xl:w-[75%] md:mb-[50px] 2xl:mb-[90px] md:leading-[1.8rem] 2xl:leading-[2.2rem]
                    tracking-wider
                    ">I’m a  software engineer with focus in frontend development and I occassionly design products & sevices with great experience and accessibility. </p>
            <Btn />
          </div>
        </div>
      </div>
   
    </section>
  )
}