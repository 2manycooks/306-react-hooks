import { useState } from 'react'
import './App.css';
import Hooks from './Hooks';

function App() {
  const [drill, setDrill] = useState('brrr')

  return (
    <div className="App">
      <Hooks drill={drill}/>
    </div>
  );
}

export default App;
