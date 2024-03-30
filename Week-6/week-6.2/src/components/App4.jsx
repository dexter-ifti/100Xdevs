// this code shows that static components are re-rendering when the parent dynamic components re-renders
// this problem can be solved by using the useMomo hook 
// useMemo Hook is basically 

import React, { useEffect, useMemo, useState } from 'react'

function App3() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);
    const [count1, setCount] = useState(0);


    let count = useMemo( () => {
        let finalCount = 0;
        for(let i = 1; i <= inputValue; i++) finalCount += i;
        return finalCount;
    }, [inputValue]);
    
    useEffect( () => {
        let finalCount = 0;
        for(let i = 1; i <= inputValue; i++) finalCount += i;
        setCount(finalCount);
    }, [inputValue])
  return (
    <div>
    <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder='Find Sum from 1 to n' />
    <br />
    <h5>Sum From 1 to {inputValue} is {count1}</h5>
    <h5>Sum From 1 to {inputValue} is {count}</h5>
    <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
    </div>
  )
}
export default App3;