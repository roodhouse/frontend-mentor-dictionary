import './App.css';
import Header from '../src/components/Header'
import Input from '../src/components/Input'
import Word from '../src/components/Word'
import Noun from '../src/components/Noun'
import Synonyms from '../src/components/Synonyms'
import Verb from '../src/components/Verb'
import Source from '../src/components/Source'

// setup layout
// setup error layout
// convert colors
// convert font

function App() {
  return (
    <div id='app' className="App sansTheme light">
      <div id='mainWrapper'>
        <div id='mainContainer' className='px-6 pt-6 pb-[85px]'>
          <div id='headerWrapper' className='mb-6'>
            <Header />
          </div>
          <div id='inputWrapper' className='mb-6'>
            <Input />
          </div>
          <div id='wordWrapper' className='mb-[29px]'>
            <Word />
          </div>
          <div id='nounWrapper' className='mb-6'>
            <Noun />
          </div>
          <div id='synonymsWrapper'>
            <Synonyms />
          </div>
          <div id='verbWrapper'>
            <Verb />
          </div>
          <div id='sourceWrapper'>
            <Source />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
