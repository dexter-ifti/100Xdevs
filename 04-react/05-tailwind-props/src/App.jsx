import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj = {
    username : "John",
    age : 25,
  }

  let newArr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-x1 mb-4 rounded-xl'>Tailwind Test</h1>
      <Card username="dexter" btnText="Click Me"></Card>
      <Card username="ifti"></Card>
    </>
  )
}

export default App
