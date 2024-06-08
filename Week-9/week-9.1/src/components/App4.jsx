import React, { useEffect, useState } from 'react'

function App4() {

    const isOnline = useIsOnline();
  return (
    <div>
        <h2>in this file we are going to create isOnline Hook</h2>
        {isOnline ? 'You are Online' : 'You are Offline'}
    </div>
  )
}

function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect( () => {
        window.addEventListener('online', () => setIsOnline(true))
        window.addEventListener('offline', () => setIsOnline(false))
    }, [])
    return isOnline; 
}

export default App4