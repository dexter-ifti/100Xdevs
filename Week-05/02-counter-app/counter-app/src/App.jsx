import './App.css'
import { useState } from 'react'

// one way to create a component - slightly more dumb way
// function App() {

//   const [count, setCount] = useState(0);

//   function onClickHandler() {
//     // count = count + 1;
//     setCount(count+1);
//   }

//   return (
//     <div>
//       <button onClick={onClickHandler}>Counter {count}</button>
//     </div>
//   )

// }

// another way to create a component - slightly more smart way
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      {/* <CustomButton count={count*100} setCount={setCount}></CustomButton>
      <CustomButton count={count+10} setCount={setCount}></CustomButton> */}
    </div>
  )
}
function CustomButton(props) {
  
  function onClickHandler() {
    props.setCount(props.count+1);
  }

  return <button onClick={onClickHandler}>Counter {props.count}</button>
}
export default App
