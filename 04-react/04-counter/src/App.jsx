import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count = 0;

  let [count, setCounter] = useState(0);
  
  function addValue() {
    count++;
    setCounter(count);
    console.log('Incremented Value is', count);
  }

  function removeValue() {
    // prevent negative value
    if (count === 0) {
      alert('Value is already 0 and cannot be decremented further!');
      return;
    }
    count--;
    setCounter(count);
    console.log('Decremented Value is', count);
  }

  return (
    <>
      <h1>Counter Value is {count}</h1>
      <button onClick={addValue}>Adder</button><br />
      <button onClick={removeValue}>Subtractor</button>
    </>
  )
}

export default App
