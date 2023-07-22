import React from 'react'
import Logo from './header/Logo'
import Theme from './header/Theme'

function Header() {
  return (
    <>
      <div id="headerContainer" className='flex justify-between'>
        <div id="logoWrapper">
          <Logo />
        </div>
        <div id="themeWrapper">
          <Theme />
        </div>
      </div>
    </>
  )
}

export default Header