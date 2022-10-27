import React, { useState } from 'react'
import hd from '../../img/shot.svg'
import work from '../experience/work.json';
export default function Experience() {
  const [exp, setExp] = useState(0);

  function activeTab(index) {
    if (exp === index) {
      return setExp(1)
    }
    setExp(index)
  }
  
  return (
    <section className="experience h-[90vh] bg-primary  flex flex-col items-center ">
      <h1 className='text-secondary'>Palces I have worked</h1>
     <div className="experience-wrapper py-[4rem] border rounded-xl px-6 border-opacity-20 border-secondary  flex flex-col w-[80%] ">
    
      <div className='tabs-head  text-[1.4rem] text-secondary
        border-b flex   border-opacity-25 border-secondary 
        '     >
       { 
       work.map((work,index) =>{
          return(
       
<div  className={exp === index ?"after:rounded-[5px] p-[30px] relative bg-secondary bg-opacity-[.05]  after:absolute after:bg-green after:left-0 after:right-0 after:bottom-[-3px] after:top-[98%] text-[1.2rem] cursor-pointer":"tab  p-[30px] cursor-pointer text-[1.2rem]"} 
         onClick={() => activeTab(index)} key={index} 
          >{work.company}</div>
         
         )

})
}
</div>


 <div className="tab-contents">
 { 
       work.map((work,index) =>{
     
          return(

          <div className={exp === index ? "content text-left ml-[30px] pt-[30px]" : "tab hidden"}
            onClick={() => activeTab(index)} key={index} >
            <div className="top flex items-center gap-4">
            <h1 className='text-[white] text-[1.5rem]'>{work.title}</h1>
            <h2 className='text-[1.5rem] text-green'>{work.year}</h2>
            </div>
            <ul className='space-y-2 mt-3'>
              <h1 className='text-green text-[1.2rem]'>Duties:</h1>
              {work.desc.map((duties,index)=>(
            <li key={index} className='text-secondary flex items-center gap-2'><span><svg width="18" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#D6E869" />
          </svg>
          </span>{duties}</li>
            ))}
            </ul>
          </div>
        
        
         )

})
}
</div>
          
          
          

         





</div>
        
      
    </section>
  )
}





















// <div className='tabs-head  flex gap-[70px] justify-center text-[1.4rem] text-secondary
// border-b
// '>
//   <div className={exp === 1 ?"after:rounded-[5px] p-[30px] relative  after:absolute after:bg-green after:left-0 after:right-0 after:bottom-[-3px] after:top-[98%]":"tab  p-[30px] cursor-pointer text-[1.2rem]"}
//     onClick={() => activeTab(1)}
//   >Rimal International</div>

//   <div className={exp === 2 ?"after:rounded-[5px] p-[30px] relative  after:absolute after:bg-green after:left-0 after:right-0 after:bottom-[-3px] after:top-[98%]":"tab  p-[30px] cursor-pointer text-[1.2rem]"}
//     onClick={() => activeTab(2)}
//   >Sprout Digital</div>

//   <div className="tab  p-[30px] cursor-pointer text-[1.2rem]">240 media</div>
// </div>
// <div className="tab-contents">
//   <div className={exp === 2 ? "content text-left ml-[30px] pt-[30px]" : "tab hidden"}
//     onClick={() => activeTab(2)}>
//     <h1 className='text-[white]'>2021 - 202</h1>
//     <p className='text-secondary'>Content 1</p>
//   </div>

//   <div className={exp === 1 ? "content text-left ml-[30px] pt-[30px]" : "tab hidden"}
//     onClick={() => activeTab(1)}>
//     <h1 className='text-[white]'>2019 - 2021</h1>
//     <p className='text-secondary'>Content 1</p>
//   </div>

// </div> 