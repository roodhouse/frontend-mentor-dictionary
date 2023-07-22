import React from 'react'

function Synonyms() {
  return (
    <>
      <div id="synonymsContainer" className='flex'>
        <div id="synonymsHeading" className='text-gray text-base font-normal mr-6 md:text-xl'>
          <p>Synonyms</p>
        </div>
        <div id="theSynonyms" className='text-purple text-base font-bold md:text-xl'>
          <a href="/home">electronic keyboard</a>
        </div>
      </div>
    </>
  )
}

export default Synonyms