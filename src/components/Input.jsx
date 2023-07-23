import React from 'react'
import Search from '../assets/images/icon-search.svg'
import { useForm } from 'react-hook-form'

function Input() {

  const { register, resetField, handleSubmit, formState: {errors} } = useForm({defaultValues: {
    word: ''
}})

function onSubmit() {
  console.log('bam')
}

function onError() {
  console.log('error')
  document.getElementById('errorDiv').firstChild.style.display = 'block'
  document.getElementById('inputContainer').style.borderColor = '#FF5252'
}

  return (
    <>
      <div id="inputContainer" className='px-6 py-[14px] rounded-2xl border md:py-5 mb-2'>
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)} className='flex items-center justify-between'>
          <div id="termContainer">
            <input 
              type="text" 
              {...register('word', {
                required: 'Whoops, can’t be empty…'
              })}
              id='word' 
              name='word' 
              placeholder='keyboard' 
              className='text-base font-bold placeholder:text-base placeholder:font-bold md:text-xl md:placeholder:text-xl' />
          </div>
          <div id="submitContainer" className='flex items-center'>
            <button type='submit'>
              <img src={Search} alt="Search" />
            </button>
          </div>
        </form>
      </div>
      <div id="errorDiv" className='h-6'>
        <p className='hidden text-orange'>{errors.word?.message}</p>
      </div>
    </>
  )
}

export default Input