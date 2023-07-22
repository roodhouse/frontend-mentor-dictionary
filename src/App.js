import './App.css';
import Header from '../src/components/Header'
import Input from '../src/components/Input'
import Word from '../src/components/Word'
import Noun from '../src/components/Noun'
import Synonyms from '../src/components/Synonyms'
import Verb from '../src/components/Verb'
import Source from '../src/components/Source'
import Error from './components/Error'

// setup layout
// setup error layout
// convert colors
// convert font

function App() {
  return (
    <div id='app' className="App sansTheme light">
      <div id='mainWrapper'>
        <div id='mainContainer' className='px-6 pt-6 pb-[85px] md:pt-[58px] md:pb-[118px] md:px-10'>
          <div id='headerWrapper' className='mb-6 md:mb-[52px]'>
            <Header />
          </div>
          <div id='inputWrapper' className='mb-6 md:mb-[43px]'>
            <Input />
          </div>
          <div id='wordWrapper' className='mb-[29px] md:mb-10'>
            <Word />
          </div>
          <div id='nounWrapper' className='mb-6 md:mb-10'>
            <Noun />
          </div>
          <div id='synonymsWrapper' className='mb-8 md:mb-10'>
            <Synonyms />
          </div>
          <div id='verbWrapper' className='mb-6 md:mb-5'>
            <Verb />
          </div>
          <div id='sourceWrapper' className=''>
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
