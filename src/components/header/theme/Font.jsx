import React from 'react'
import Arrow from '../../../assets/images/icon-arrow-down.svg'

function Font() {
  return (
    <>
      <div id="fontContainer" className='flex items-center cursor-pointer'>
        <div id="fontChoice" className='fontChoice text-right text-sm font-bold leading-[24px] pr-4 md:text-lg'>
          <p>Sans Serif</p>
        </div>
        <div id="arrow">
          <img src={Arrow} alt="arrow" />
        </div>
        <div id="fontMenuWrapper" className='hidden rounded-2xl absolute z-50 top-[68px] right-[127px] md:top-[100px] md:right-[140px] xl:right-[450px]'>
          <div id="fontMenuContainer" className='p-6 pr-[60px]'>
            <div id='sansMenu' className='font-["Inter"] text-sm font-bold leading-6 mb-4 cursor-pointer md:text-lg'>
              <p>Sans Serif</p>
            </div>
            <div id='serifMenu' className='font-["Lora"] text-sm font-bold leading-6 mb-4 cursor-pointer md:text-lg'>
              <p>Serif</p>
            </div>
            <div id='monoMenu' className='font-["Inconsolata"] text-sm font-bold leading-6 cursor-pointer md:text-lg'>
              <p>Mono</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Font