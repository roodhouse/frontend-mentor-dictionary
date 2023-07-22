import React from 'react'

function Color() {
  return (
    <>
      <div id="colorContainer" className='w-[73px] h-[22px]'>
        <div id="lightColorChoice" className='active h-full bg-[url("/src/assets/images/lightThemeToggle.svg")] hover:bg-[url("/src/assets/images/lightThemeHoverToggle.svg")]' />
        <div id="darkColorChoice" className='inactive h-full bg-[url("/src/assets/images/darkThemeToggle.svg")] hover:bg-[url("/src/assets/images/darkThemeHoverToggle.svg")]' />
        
      </div>
    </>
  )
}

export default Color