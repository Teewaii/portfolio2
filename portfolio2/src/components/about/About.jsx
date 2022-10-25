import React from 'react';
import right_arrow from '../../img/rightArrow.svg';
import right_down from '../../img/downArrow.svg';
import Btn_sec from '../btn/Btn-sec';
// import tools from '../about/tools'

const tools=[
  'React',
  'Vanila Js',
  'Html',
  'Vanila CSS',
  'TailwindCSS',
  'SCSS / SASS',
  'Figma',
  'Adobe Xd',
  'Github',
  'WordPress'
  ]

export default function About() {
  return (
    <section className='about bg-primary  
    md:pb-[40px] dark:bg-dark
    
    
    
    '>
      <div className='bucket pt-[120px] container flex flex-col items-center gap-[64px]
    lg:flex-row md:items-center 
    ' >
        <div className="desc text-left flex-[1]">
          <h2 className=" text-[white] text-[30px] ">About <span className='text-secondary font-bold' >me!</span></h2>
          <p className='text-[white]   mt-[20px] w-[95%] leading-[30px] relative font-[300]
      border-b-[1px] border-lightprim pb-[30px] md:text-[15px] 2xl:text-[19px] 2xl:leading-[38px]
        
        '>Hi, I’m Taiye and I love building software products & services that promotes business and economic growths with great user experience and accessibility. <br /><br />

            <span className='text-secondaryfont-bold'> Over the last 10 years</span> I have worked in both the advertising and IT industry through which I have been able to demonstrate exceptional skills in graphic/product design, people management, web development and efficient problem solving.<br /> <br />

            My interest in software  development started in 2013 with visual basic. In 2016 I developed more interest in web development through which I was priviledged to work on different amazing web projects across different industries  specificaly using WordPress.<br /> <br />

            Presently, I spend most of my time building more complex and scalable projects using react and vanila Js.</p>
          <div className="toosl">
            <h1 className='tools-used text-secondary  text-[18px] mt-[30px] '>Few of the tools I’ve been working with recently!</h1>

            <ul className='tool-list text-[white] flex flex-wrap  gap-[20px] mt-[13px]'>
            
            {tools.map((tool)=>(
              <li key={tool} className='flex gap-[10px] items-center' ><span><svg width="18" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
              </svg>
              </span>{tool}</li>
            ))

            }
                        
          
            </ul>
          </div>
        </div>
        <div className="hero lg:flex md:flex-[1]
        md:bg-hdsabout md:bg-contain md:bg-opacity-[0.5] md:items-center md:justify-center
         bg-center  bg-no-repeat  lg:h-[90vh] md:w-[100%]  ">

          <div className='next flex flex-col items-center pb-[150px]'>
          <h1 className='text-[white] text-[25px] md:text-[35px] mb-[20px]'>What's next!</h1>
            <div className="circle rounded-full w-[50px] h-[50px] border-[2px] animate-bounce border-secondary flex items-center justify-center">
              <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.79289 15.5624C7.18342 15.9529 7.81658 15.9529 8.20711 15.5624L14.5711 9.19841C14.9616 8.80788 14.9616 8.17472 14.5711 7.78419C14.1805 7.39367 13.5474 7.39367 13.1569 7.78419L7.5 13.441L1.84315 7.78419C1.45262 7.39367 0.819456 7.39367 0.428932 7.78419C0.0384075 8.17472 0.0384074 8.80788 0.428932 9.19841L6.79289 15.5624ZM6.5 0.710525L6.5 14.8553L8.5 14.8553L8.5 0.710526L6.5 0.710525Z" fill="#DBF66F"/>
</svg>
</span>
            </div>
           
            <Btn_sec />
          </div>
        </div>
      </div>

    </section>
  )
}


  
              {/* <li className='flex gap-[10px] items-center'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>React</li>
              <li className='flex gap-[10px] items-center'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>Vanila Js</li>
              <li className='flex gap-[10px] items-center'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>Html</li>
              <li className='flex gap-[10px] items-center'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>Vanila CSS</li>
              <li className='flex gap-[10px] items-center'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>TailwindCSS</li>
              <li className='flex gap-[10px] items-center'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>SCSS / SASS</li>
              <li className='flex gap-[10px]'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>Figma</li>
              <li className='flex gap-[10px] items-center'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>Adobe Xd</li>
              <li className='flex gap-[10px] items-center'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>Github</li>
              <li className='flex gap-[10px] items-center'><svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
</svg>
<span></span>WordPress</li> */}