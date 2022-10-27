import React, { useState } from 'react'
import hd from '../../img/shot.svg'
import work from '../experience/work.json';
export default function Experience() {
  const [exp, setExp] = useState(1);

  function activeTab(index) {
    if (exp === index) {
      return setExp(1)
    }
    setExp(index)
  }
  
  return (
    <section className="experience h-[90vh] bg-primary  flex flex-col items-center ">
      <h1 className='text-secondary'>Palces I have worked</h1>
     <div className="experience-wrapper py-[4rem] border border-[yellow] flex flex-col w-[80%] ">
    
      <div className='tabs-head  text-[1.4rem] text-secondary
        border-b flex   border-opacity-25 border-secondary border
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
            <ul>
            <li className='text-secondary'>{work.desc[0,1]}</li>
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