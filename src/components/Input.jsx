import React from 'react'
import Search from '../assets/images/icon-search.svg'

function Input() {
  return (
    <>
      <div id="inputContainer" className='px-6 py-[14px] rounded-2xl'>
        <form className='flex items-center justify-between'>
          <div id="termContainer">
            <input type="text" placeholder='keyboard' className='text-base font-bold placeholder:text-base placeholder:font-bold' />
          </div>
          <div id="submitContainer" className='flex items-center'>
            <button type='submit'>
              <img src={Search} alt="Search" />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Input