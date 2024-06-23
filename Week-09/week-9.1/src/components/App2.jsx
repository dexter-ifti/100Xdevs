import React, { useEffect, useState } from 'react'

function App2() {
    const [render, setRender] = useState(true)
    useEffect( () => {
        setTimeout(() => {
            setRender(false)
        }, 10000);
    }, [])
    return (
        <div>
            <h1>In this file we're discussing about how hooks uses Life Cycle Methods which were previously provided by the only class based components</h1>
            {render ? <MyComponent /> : <h2>2nd div</h2>}
        </div>
    )
}
function MyComponent() {
    useEffect(() => {
        console.error('useEffect called || Component Mounted')

        return () => {
            console.log('useEffect called || Component Unmounted')
            console.log('Whenever the dependency array changes this component will be unmounted and then mounted again.')
        }
    }, [])
    return (
        <div>
            <h2>From Inside  Component</h2>
        </div>
    );
}

export default App2