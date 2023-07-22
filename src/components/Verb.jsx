import React from 'react'

function Verb() {
  return (
    <>
      <div id="verbContainer">
        <div id="theVerbType" className='flex justify-between items-center mb-[31px] md:mb-10'>
          <div id="verb" className='text-lg font-bold italic md:text-2xl'>
            <p>verb</p>
          </div>
          <div id="typeVerbShape" className='w-[266px] h-[1px] md:w-[608px] lg:w-[656px]'/>
        </div>
        <div id="theVerbDef">
          <div id="defVerbHeading" className='text-gray text-base font-normal mb-[17px] md:text-xl md:mb-[25px]'>
            <p>Meaning</p>
          </div>
          <div id="defVerbList" className='pl-[14px]'>
            <ul className='text-[15px] font-normal leading-6 list-disc md:text-lg'>
              <li className='mb-[13px]'>To type on a computer keyboard.</li>
            </ul>
            <div id="example" className='text-gray text-[15px] font-normal leading-6 mb-8 md:text-lg md:mb-10'>
              <p>“Keyboarding is the part of this job I hate the most.”</p>
            </div>
            <div id="verbShape" className='w-[327px] h-[1px] md:w-[688px] lg:w-[736px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Verb

