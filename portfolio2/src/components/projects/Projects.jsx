import React, { useState } from 'react';
import projects from './project';
export default function Projects() {
  const [project, setProject] = useState(0);

  function activeProject(index) {
    if (project === index) {
      return setProject(1)
    }
    setProject(index)
  }


  return (
    <section className="experience min-h-[100vh] lg:h-[90vh] bg-primary  flex flex-col items-center pt-[4rem] lg:pt-[8rem] lg:px-[11rem]">
      <h1 className='text-secondary lg:mb-[4rem] mb-[1.5rem] text-[1.5rem] lg:text-[2rem]  '>Palces I have worked</h1>

      <div className="experience-wrapper  rounded-xl px-6  border-opacity-[0.1] border-secondary 
        pb-[50px] container lg:py-[4rem] mt-[20px]
      ">


        <div className="main flex gap-[80px]">

          {/* Projects list controller start */}
          <div className="project-list   text-left flex-[0.3] border-r-[4px]  border-opacity-[0.1] border-secondary 
          flex flex-col gap-4 bg-opacity-[0.8]
          ">
            {projects.map((item, index) =>
              <h1 key={item.id} className={project === index ? 'text-[white] relative  bg-secondary bg-opacity-[0.05] text-[1.3rem] font-normal py-[20px] px-[25px] after:absolute after:bg-green  after:top-0 after:bottom-[0] after:left-[99.5%] after:right-[-4px] after:rounded-[5%] cursor-pointer' : 'text-[white] relative text-[1.3rem] font-normal py-[20px] px-[25px] cursor-pointer'}
                onClick={() => activeProject(index)}
              >
                {item.title}</h1>
            )
            }

          </div>

          {/* Projects list controller end */}
          {/* 
           Projects description end  */}
          {projects.map((item, index) =>
            <div key={item.id} className={project === index ? "project-card relative h-[50vh] flex flex-1 gap-[40px] justify-end bg-secondary bg-opacity-[0.06] border-[3px] rounded-xl border-secondary border-opacity-[0.05] p-[30px]" : "project-card hidden"}>

              <div className="desc text-left flex flex-col flex-[1] justify-center">
                <h1 className='text-[white] text-[1.8rem] mb-[50px] '>{item.head}</h1>
                <p className='text-[white]'>{item.desc}</p>
                <p className='text-secondary mt-[90px]'>{item.tools}</p>
              </div>

              <div className="img  w-[400px] flex flex-[1] rounded-xl overflow-hidden">
                <img className='h-[fit] w-[100%]' src={item.pix} alt="" />
              </div>

            </div>
            /* Projects description end */

          )
          }

        </div>
      </div>


    </section>
  )
}



