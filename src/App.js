import './App.css';
import React, { useState, useEffect } from 'react'
import Header from '../src/components/Header'
import Input from '../src/components/Input'
import Word from '../src/components/Word'
import Noun from '../src/components/Noun'
import Synonyms from '../src/components/Synonyms'
import Verb from '../src/components/Verb'
import Source from '../src/components/Source'
import Error from './components/Error'

function App() {

  const [themeChoice, setThemeChoice] = useState(localStorage.getItem('themeChoice'))
  const [fontChoice, setFontChoice] = useState(localStorage.getItem('fontChoice'))


  // Change theme
  useEffect(() => {
    let colorContainer = document.getElementById('colorContainer')
    let fontContainer = document.getElementById('fontContainer');

    colorContainer.addEventListener('click', changeColor)
    fontContainer.addEventListener('mouseover', changeFont)
    fontContainer.addEventListener('mouseout', hideMenu)

    if (themeChoice !== 'light') {
      document.getElementById('app').classList.remove('light')
      document.getElementById('app').classList.add('dark')
      document.getElementById('lightColorChoice').classList.remove('active')
      document.getElementById('lightColorChoice').classList.add('inactive') 
      document.getElementById('darkColorChoice').classList.remove('inactive')
      document.getElementById('darkColorChoice').classList.add('active') 
    }

    if (fontChoice === 'sansTheme' ) {
      document.getElementById('app').classList.add('sansTheme')
      document.getElementById('app').classList.remove('serifTheme')
      document.getElementById('app').classList.remove('monoTheme')
      let newFont = document.getElementById('fontChoice').firstChild
      newFont.innerHTML = 'Sans Serif'
      
    }

    if (fontChoice === 'serifTheme' ) {
      document.getElementById('app').classList.remove('sansTheme')
      document.getElementById('app').classList.add('serifTheme')
      document.getElementById('app').classList.remove('monoTheme')
      let newFont = document.getElementById('fontChoice').firstChild
      newFont.innerHTML = 'Serif'
      
    }

    if (fontChoice === 'monoTheme' ) {
      document.getElementById('app').classList.remove('sansTheme')
      document.getElementById('app').classList.remove('serifTheme')
      document.getElementById('app').classList.add('monoTheme')
      let newFont = document.getElementById('fontChoice').firstChild
      newFont.innerHTML = 'Mono'
    }
  },[])

  function changeColor() {
    let lightTheme = document.getElementById('lightColorChoice')
    let darkTheme = document.getElementById('darkColorChoice')
    let app = document.getElementById('app');
    if (app.classList.contains('light')) {
      app.classList.remove('light')
      app.classList.add('dark')
      lightTheme.classList.remove('active')
      lightTheme.classList.add('inactive')
      darkTheme.classList.remove('inactive')
      darkTheme.classList.add('active')
      localStorage.setItem('themeChoice', 'dark')
    } else {
      app.classList.remove('dark')
      app.classList.add('light')
      lightTheme.classList.remove('inactive')
      lightTheme.classList.add('active')
      darkTheme.classList.remove('active')
      darkTheme.classList.add('inactive')
      localStorage.setItem('themeChoice', 'light')
    }
  }

  function changeFont() {
    let app = document.getElementById('app')
    let fontMenuWrapper = document.getElementById('fontMenuWrapper')
    let sansMenu = document.getElementById('sansMenu')
    let serifMenu = document.getElementById('serifMenu')
    let monoMenu = document.getElementById('monoMenu')
    let newFont = document.getElementById('fontChoice').firstChild

    // show the menu
    fontMenuWrapper.classList.remove('hidden')
    // Change the font based on which font is clicked
    sansMenu.addEventListener('click', () => {
      app.classList.remove('serifTheme')
      app.classList.remove('monoTheme')
      app.classList.add('sansTheme')
      newFont.innerHTML = 'Sans Serif'
      localStorage.setItem('fontChoice', 'sansTheme')
      setTimeout(() => {
        fontMenuWrapper.classList.add('hidden')
      }, 200)
    })

    serifMenu.addEventListener('click', () => {
      app.classList.add('serifTheme')
      app.classList.remove('monoTheme')
      app.classList.remove('sansTheme')
      newFont.innerHTML = 'Serif'
      localStorage.setItem('fontChoice', 'serifTheme')
      setTimeout(() => {
        fontMenuWrapper.classList.add('hidden')
      }, 200)
    })

    monoMenu.addEventListener('click', () => {
      app.classList.remove('serifTheme')
      app.classList.add('monoTheme')
      app.classList.remove('sansTheme')
      newFont.innerHTML = 'Mono'
      localStorage.setItem('fontChoice', 'monoTheme')
      setTimeout(() => {
        fontMenuWrapper.classList.add('hidden')
      }, 200)
    })
  }

  function hideMenu() {
    let fontMenuWrapper = document.getElementById('fontMenuWrapper')
    fontMenuWrapper.addEventListener('mouseout', () => {
      fontMenuWrapper.classList.add('hidden')

    })
  }

  return (
    <div id='app' className="App sansTheme light h-screen">
      <div id='mainWrapper'>
        <div id='mainContainer' className='px-6 pt-6 pb-[85px] md:pt-[58px] md:pb-[118px] md:px-10 xl:px-[352px]'>
          <div id='headerWrapper' className='mb-6 md:mb-[52px]'>
            <Header />
          </div>
          <div id='inputWrapper' className='mb-6 md:mb-[21px]'>
            <Input />
          </div>
          <div id='wordWrapper' className='hidden mb-[29px] md:mb-10'>
            <Word />
          </div>
          <div id='nounWrapper' className='hidden mb-6 md:mb-10 lg:mb-16'>
            <Noun />
          </div>
          <div id='synonymsWrapper' className='hidden mb-8 md:mb-10'>
            <Synonyms />
          </div>
          <div id='verbWrapper' className='hidden mb-6 md:mb-5'>
            <Verb />
          </div>
          <div id='sourceWrapper' className='hidden'>
            <Source />
          </div>
          <div id='errorWrapper' className='hidden'>
            <Error />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
