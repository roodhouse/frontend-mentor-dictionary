import React from 'react'
import WordSound from '../assets/images/icon-play.svg'

function Word() {
  return (
    <>
      <div id="wordContainer" className='flex items-center justify-between'>
        <div id="theWordBody" className='flex flex-col'>
          <div id="theWord" className='lowercase text-[32px] font-bold mb-2'>
            <h1>Keyboard</h1>
          </div>
          <div id="thePro" className='font-["Inter"] text-lg font-normal leading-6 text-purple'>
            <p>/ˈkiːbɔːd/</p>
          </div>
        </div>
        <div id="wordSound">
          <button>
            <img src={WordSound} alt="how the word sounds" className='w-[48px] h-[48px]' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Word