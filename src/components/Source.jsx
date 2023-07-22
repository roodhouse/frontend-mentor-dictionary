import React from 'react'
import LinkIcon from '../assets/images/icon-new-window.svg'

function Source() {
  return (
    <>
      <div id="sourceContainer">
        <div id="sourceHeading" className='text-gray text-sm font-normal underline mb-2'>
          <p>Source</p>
        </div>
        <div id="sourceLink" className='flex items-center'>
          <div id="theLink" className='text-sm font-normal underline mr-[9px]'>
            <a href="https://en.wiktionary.org/wiki/keyboard">https://en.wiktionary.org/wiki/keyboard</a>
          </div>
          <div id="linkIcon">
            <img src={LinkIcon} alt="link icon" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Source