import React, { useState, useEffect } from 'react'
import Search from '../assets/images/icon-search.svg'
import { useForm } from 'react-hook-form'

function Input() {

  const [appHeight, setAppHeight] = useState();
  const [wrapperHeight, setWrapperHeight] = useState()

  const { register, resetField, handleSubmit, formState: {errors} } = useForm({defaultValues: {
    word: ''
}})

useEffect(() => {

  let wordSound = document.getElementById('wordSound').firstChild
  wordSound.addEventListener('click', () => {
   let theWordSound = new Audio(wordSound.id)
   theWordSound.play()

  })

  // change height
   // get the original height of the app
   setAppHeight(document.getElementById('app').clientHeight)
   setWrapperHeight(document.getElementById('mainWrapper').clientHeight)
})

function onSubmit(e) {
  
  document.getElementById('errorWrapper').style.display = 'none'
  document.getElementById('wordWrapper').style.display = 'none'
  document.getElementById('nounWrapper').style.display = 'none'
  document.getElementById('sourceWrapper').style.display = 'none'
  let theWord = e.word
  let dictionary = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  let theLink = dictionary + theWord

  fetch(theLink)
    .then(function (response) {
      if (!response.ok) {
        // throw response.json()
        document.getElementById('errorWrapper').style.display = 'block'
        
      } else {

        return response.json()

        .then(function(theRes){
          document.getElementById('wordWrapper').style.display = 'block'
          document.getElementById('nounWrapper').style.display = 'block'
          document.getElementById('sourceWrapper').style.display = 'block'
          theWord = theRes[0]
          document.getElementById('theWord').firstChild.innerHTML = theWord.word
          document.getElementById('thePro').firstChild.innerHTML = theWord.phonetic
          document.getElementById('theLink').firstChild.innerHTML = theWord.sourceUrls[0]
          document.getElementById('theLink').firstChild.setAttribute('href', theWord.sourceUrls[0])

        
          let audio = theRes[0].phonetics;
          audio.forEach((theSound) => {
            if (theSound.audio) {
              theSound = theSound.audio
              document.getElementById('wordSound').firstChild.setAttribute('id', theSound)
            } 
          })
    
          let meanings = theWord.meanings
          let defContainer = document.getElementById('nounContainer')
          // reset the meaning container to empty before populating it with the new def
          defContainer.innerHTML = ''
            
          meanings.forEach((meaning) => {
            let meaningDiv = document.createElement('div')
            let partOfSpeechDiv = document.createElement('div')
            let partOfSpeechContent = document.createElement('h2')
            let theDef = document.createElement('div')
            let defHeading = document.createElement('div')
            let shape = document.createElement('div')
            let wordMean = document.createElement('p')
            let theList = document.createElement('div')
            let list = document.createElement('ul')
    
            meaningDiv.setAttribute('id', meaning.partOfSpeech+'Type')
            partOfSpeechDiv.setAttribute('id', meaning.partOfSpeech)
            theDef.setAttribute('id', meaning.partOfSpeech+'TheDef')
            defHeading.setAttribute('id', meaning.partOfSpeech+'Heading')
            shape.setAttribute('id', meaning.partOfSpeech+'Shape')
            wordMean.innerHTML = 'Meaning'
            theList.setAttribute('id', meaning.partOfSpeech+'listDiv')
            list.setAttribute('id', meaning.partOfSpeech+'list')
            
            meaningDiv.classList.add('type','flex', 'justify-between', 'items-center', 'mb-[31px]', 'md:mb-10')
            partOfSpeechDiv.classList.add('text-lg', 'font-bold', 'italic', 'md:text-2xl')
            theDef.classList.add('mb-8', 'md:mb-10')
            defHeading.classList.add('text-gray', 'text-base', 'font-normal', 'mb-[17px]', 'md:text-xl', 'md:mb-[25px]')
            shape.classList.add('shape', 'w-[266px]', 'h-[1px]', 'md:w-[608px]', 'lg:w-[656px]')
            theList.classList.add('pl-[14px]')
            list.classList.add('text-[15px]', 'font-normal', 'leading-6', 'list-disc', 'md:text-lg')
            
            partOfSpeechContent.innerHTML = meaning.partOfSpeech
            defContainer.append(meaningDiv, theDef)
            meaningDiv.appendChild(partOfSpeechDiv)
            theDef.append(defHeading, theList)
            defHeading.appendChild(wordMean)
            meaningDiv.appendChild(shape)
            partOfSpeechDiv.appendChild(partOfSpeechContent)
            theList.appendChild(list)        
    
            let allTheMeans = meaning.definitions
            allTheMeans.forEach((defs) => {
              let item = document.createElement('li')
              let example = document.createElement('p')
              item.classList.add('mb-[13px]')
              example.classList.add('mt-[13px]', 'text-gray', 'text-[15px]', 'font-normal', 'leading-6', 'mb-[13px]', 'md:text-lg')
              example.innerHTML = '"'+defs.example+'"'
              
              item.innerHTML = defs.definition
              list.appendChild(item)
              if (defs.example) {
                item.appendChild(example)
              }
            })
            
            // add synonym section if there is one or more synonyms listed
            if (meaning.synonyms.length >= 1) {
              let synonyms = document.createElement('div')
              let synonymsHeading = document.createElement('div')
              let synonymTitle = document.createElement('p')
              let allSynonyms = document.createElement('div')
              let synonymPara = document.createElement('p')

              synonymPara.setAttribute('id', meaning.partOfSpeech + 'synonymPara')

              synonymPara.classList.add('flex', 'flex-wrap')
              
              meaning.synonyms.forEach((link) => {
                let synonymLinkDiv = document.createElement('div')
                let synonymLink = document.createElement('a')
                synonymLink.setAttribute('href', link)
                synonymLink.classList.add('hover:underline')
                synonymLinkDiv.appendChild(synonymLink)
                synonymPara.appendChild(synonymLinkDiv)
                allSynonyms.appendChild(synonymPara)
                let lastItem = meaning.synonyms.slice(-1)
                lastItem = lastItem.toString()
                if (link !== lastItem) {
                  synonymLink.innerHTML = link 
                } else {
                  synonymLink.innerHTML = link
                }
    
              })
      
              synonyms.setAttribute('id', meaning.partOfSpeech+'Synonyms')
              allSynonyms.setAttribute('id', meaning.partOfSpeech+'SynonymsList')
              synonymsHeading.setAttribute('id', meaning.partOfSpeech+'SynonymsHeading')
              synonymTitle.innerHTML = 'Synonyms'
              
              synonyms.classList.add('flex', 'pt-[27px]')
              synonymsHeading.classList.add('text-gray', 'text-base', 'font-normal', 'mr-6', 'md:text-xl')
              allSynonyms.classList.add('text-purple', 'text-base', 'font-bold', 'md:text-xl')
      
              synonyms.appendChild(synonymsHeading)
              synonymsHeading.appendChild(synonymTitle)
              synonyms.appendChild(allSynonyms)
              theDef.append(synonyms)
    
            }

            if (meaning.synonyms.length >= 1) {
              let theKids = document.getElementById(meaning.partOfSpeech + 'synonymPara').children
              theKids = Array.from(theKids)
              let lastKid = theKids.slice(-1)
              lastKid = lastKid[0].firstChild.innerHTML
              
              theKids.forEach((kid) => {
              
                if (kid.firstChild.innerHTML !== lastKid) {
                  
                  let child = kid.firstChild  
                  let text = child.textContent;
                  child.textContent = text + ', ';
                } else {
                  console.log('last kid')
                }
                
              
              })
            }

            // create new height of the app if the results height is larger than the screen
            let newHeight = document.getElementById('nounWrapper').clientHeight
            let app = document.getElementById('app')
          
            if (newHeight >= appHeight) {
              app.style.height = '100%'
            } else {
              app.style.height = '100vh'
            }
          })
        })  
      }
    })
}

function onError() {
  console.log('error')
  document.getElementById('errorDiv').firstChild.style.display = 'block'
  document.getElementById('inputContainer').style.borderColor = '#FF5252'
  document.getElementById('inputContainer').addEventListener('input', () => {
    document.getElementById('inputContainer').style.borderColor = 'transparent'
  })

}

  return (
    <>
      <div id="inputContainer" className='px-6 py-[14px] rounded-2xl border md:py-5 mb-2 cursor-pointer'>
        <form noValidate onSubmit={handleSubmit(onSubmit, onError)} className='flex items-center justify-between'>
          <div id="termContainer" className='w-full'>
            <input 
              type="text" 
              {...register('word', {
                required: 'Whoops, can’t be empty…'
              })}
              id='word' 
              name='word' 
              placeholder='Lookup a word...' 
              className='w-[90%] caret-purple focus-visible:outline-none text-base font-bold placeholder:text-base placeholder:font-bold md:text-xl md:placeholder:text-xl placeholder:opacity-25' />
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