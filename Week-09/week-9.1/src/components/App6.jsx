import React, { useEffect } from 'react'

function useInterval(fn, timeout){
    useEffect( () => {
        const interval = setInterval(fn, timeout)
        return () => clearInterval(interval)
    }, [fn, timeout])
}

function App6() {
    const [count, setCount] = React.useState(0)
    useInterval(() => {
        setCount(count => count + 1)
    }, 1000)
  return (
    <div>
        Timer is at {count}
    </div>
  )
}

export default App6