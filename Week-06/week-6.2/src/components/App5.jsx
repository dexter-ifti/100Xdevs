//In this file the concept of useCallback and memo is used to prevent the re-rendering of the child component when the parent component is re-rendered.
// the main difference between useCallback and memo is that useCallback is used to prevent the re-creation of the function when the parent component is re-rendered and memo is used to prevent the re-rendering of the child component when the parent component is re-rendered.

import { memo, useCallback, useState } from "react";

export default function App5() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(() => {
    console.log("child clicked")
  },  [])

  return <div>
    <ButtonComponent inputFunction={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("child render")

  return <div>
    <button onClick={inputFunction}>Button clicked</button>
  </div>
})
