import React from 'react'
import Font from './theme/Font'
import Color from './theme/Color'

function Theme() {
  return (
    <>
      <div id="themeContainer" className='flex items-center'>
        <div id="fontWrapper" className='mr-4'>
          <Font />
        </div>
        <div id="themeBar" className='bar w-[1px] h-8 mr-4'></div>
        <id id="colorWrapper">
          <Color />
        </id>
      </div>
    </>
  )
}

export default Theme