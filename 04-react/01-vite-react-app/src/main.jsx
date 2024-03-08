import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <h2>In MyApp Function</h2>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp />
     {/* MyApp() // 😟➡️ this will also work but not recommended for better understading and convention */}
  </>
)
