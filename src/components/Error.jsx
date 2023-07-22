import React from 'react'

function Error() {
  return (
    <>
        <div id="errorContainer" className='flex flex-col justify-center items-center text-center'>
            <div id="face" className='mb-11 text-[64px]'>
                <p>😕</p>
            </div>
            <div id="errorHeading" className='mb-6 text-center text-xl font-bold'>
                <p>No Definitions Found</p>
            </div>
            <div id="errorCopy" className='text-xl font-normal'>
                <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
            </div>
        </div>
    </>
  )
}

export default Error