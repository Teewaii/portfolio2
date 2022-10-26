import React, { useState } from 'react'
import hd from '../../img/shot.svg'

export default function Experience() {
  const [exp, setExp] = useState(1);

  function activeTab(index) {
    setExp(index)
  }
  return (
    <section className="experience h-[90vh] bg-primary  flex flex-col items-center ">
      <div className="experience-wrapper border py-[8rem]">
        <div className='tabs-head  flex gap-[70px] justify-center text-[1.4rem] text-secondary
        border-b
        '>
          <div className="tab after:rounded-[5px] p-[30px] relative  after:absolute after:bg-green after:left-0 after:right-0 after:bottom-[-3px]
          after:top-[98%]
          cursor-pointer">Rimal International</div>
          <div className="tab  p-[30px] cursor-pointer">Sprout Digital</div>
          <div className="tab  p-[30px] cursor-pointer">240 media</div>
        </div>
        <div className="tab-contents">
          <div className="content text-left ml-[30px] pt-[30px]">
            <h1 className='text-[white]'>2021 - 202</h1>
            <p className='text-secondary'>Content 1</p>
          </div>

          <div className={exp === 2 ? "after:rounded-[5px] p-[30px] relative  after:absolute after:bg-green after:left-0 after:right-0 after:bottom-[-3px] after:top-[98%]   cursor-pointer" : "tab hidden"}
            onClick={() => activeTab(2)}>
            <h1 className='text-[white]'>2019 - 2021</h1>
            <p className='text-secondary'>Content 1</p>
          </div>

        </div>
      </div>
    </section>
  )
}
