import React, {useState, useContext} from 'react'
import {CountContext} from '../context'

function App1() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <CountContext.Provider value= {count}>
            <Count setCount={setCount}></Count>
        </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
    return (
        <div>
            <CountRender/>
            <Buttons setCount={setCount}/>
        </div>
    )
}

function CountRender(){
    const count = useContext(CountContext);
    return (
        <div>
            <b>
                {count}
            </b>
        </div>
    )
}

function Buttons({setCount}){
    const count = useContext(CountContext);
    return <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
}

export default App1