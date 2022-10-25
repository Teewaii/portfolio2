
import React from 'react';

import Btn from '../btn/Btn';


export default function Hello() {
  return (

    <section className='hero bg-spiral-mob bg-no-repeat bg-cover bg-center h-[100vh]
    lg:bg-spiral-lg  
    '>
     <div className="hero-wrapper pt-[120px] container bg-primary h-[85vh] 
     lg:h-[80vh]  ">
     <div className="desc text-left lg:flex-[1.7]  overflow-x-hidden">
          <h2 className='mb-[5px] font-medium text-[18px] text-[white]
                    lg:text-[30px] md:mt-[50px]  3xl:mt-[100px]  3xl:text-[30px]
                    '>Hi, my name is</h2>

<h1 className='name text-secondary text-[1.8rem] mb-[12px] relative  inline-block pr-[3px]                   
                       md:text-[2.5rem] md:mb-[18px] 2xl:mb-[26px]  xl:text-[3.5rem]  bg-primary                
                       '>Ajimati Taiye,</h1>
          <h1 className='header font-700 job   text-[2rem] relative text-[white]
          mb-[10px] md:text-[68px] 2xl:text-[80px] md:leading-[4.5rem] 2xl:leading-[5rem]  md:max-w-[650px] 
           2xl:max-w-[750px] 
          
                    ' >I design & build web software solutions!</h1>
          <p className="body text-[0.9rem] md:text-[1.4rem] w-[90%] mb-[45px] text-secondary opacity-75 font-light leading-[1.3rem]
                    md:w-[85%]   2xl:text-[1.5rem]  2xl:w-[75%] md:mb-[50px] 2xl:mb-[90px] md:leading-[1.8rem] 2xl:leading-[2rem]
                    ">I’m a  software engineer with focus in frontend development and I occassionly design products & sevices with great experience and accessibility. </p>
          <Btn />
        </div>
     </div>
      
    </section>
  )
}