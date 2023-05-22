import ColorSchemesExample from './ColorSchemesExample';
import UncontrolledExample from './UncontrolledExample';
import BasicExample from './BasicExample';
import './App.css';


function App() {

  return (
      <div>
        <ColorSchemesExample/><br/>
        <UncontrolledExample/><br/>

        <div className='itens'>
          <BasicExample/>
          <BasicExample/>
          <BasicExample/>
        </div>
      </div>
  )
}

export default App
