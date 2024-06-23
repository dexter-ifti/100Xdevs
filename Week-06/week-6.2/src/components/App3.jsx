// this code shows that static components are re-rendering when the parent dynamic somponents re-renders
// this is the problem 

import React, { useEffect, useState } from 'react'

function App3() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    const [finalValue, setFinalValue] = useState(0);

    useEffect(() => {
        let sum = 0;
        for(let i = 0 ; i <= inputValue; i++) sum += i;
        setFinalValue(sum)
    }, [inputValue])
  return (
    <>
    <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder='Find Sum from 1 to n' />
    <br />
    <h5>Sum From 1 to {inputValue} is {finalValue}</h5>
    <button onClick={() => setCount(count+1)}>Counter {count}</button>
    </>
  )
}
export default App3;