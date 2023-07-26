import React from 'react'

function Word() {
  return (
    <>
      <div id="wordContainer" className='flex items-center justify-between'>
        <div id="theWordBody" className='flex flex-col'>
          <div id="theWord" className='lowercase text-[32px] font-bold mb-2 md:text-[64px]'>
            <h1></h1>
          </div>
          <div id="thePro" className='font-["Inter"] text-lg font-normal leading-6 text-purple md:text-2xl'>
            <p></p>
          </div>
        </div>
        <div id="wordSound">
          <button className='bg-[url("../src/assets/images/icon-play.svg")] bg-cover hover:bg-[url("../src/assets/images/icon-play-hover.svg")] w-[48px] h-[48px] md:w-[75px] md:h-[75px]'>
          </button>
        </div>
      </div>
    </>
  )
}

export default Word