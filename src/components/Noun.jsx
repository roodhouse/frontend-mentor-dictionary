import React from 'react'

function Noun() {
  return (
    <>
      <div id="nounContainer">
        <div id="theType" className='flex justify-between items-center mb-[31px]'>
          <div id="noun" className='text-lg font-bold italic'>
            <p>noun</p>
          </div>
          <div id="typeShape" className='w-[266px] h-[1px]'/>
        </div>
        <div id="theDef">
          <div id="defHeading" className='text-gray text-base font-normal mb-[17px]'>
            <p>Meaning</p>
          </div>
          <div id="defList" className='pl-[14px]'>
            <ul className='text-[15px] font-normal leading-6 list-disc'>
              <li className='mb-[13px]'>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
              <li className='mb-[13px]'>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</li>
              <li>A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Noun

