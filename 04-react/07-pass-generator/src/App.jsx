import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]); 

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 99999);
    window.navigator.clipboard.writeText(password);
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);


  return (
    
    <div className='w-svw max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-800 text-orange-500'>
      <h1 className='text-white text-center my-3 text-4xl'>Password Generator</h1>
      <div className='flex shadow-rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password} 
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
      />
      <button
       onClick={copyToClipboard}
       className='outline-none bg-red-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={ () => setNumberAllowed( (prev) => !prev)} 
         />
        <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={characterAllowed}
          id='characterInput'
          onChange={ () => setCharacterAllowed( (prev) => !prev)}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
