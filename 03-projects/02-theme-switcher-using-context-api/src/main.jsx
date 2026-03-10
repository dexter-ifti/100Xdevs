import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  //  STEP 3 - wRAP THE APP 
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
