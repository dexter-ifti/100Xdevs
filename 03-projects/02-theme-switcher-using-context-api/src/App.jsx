
import { useContext } from 'react'
import ThemeButton from './components/ThemeButton'
import { ThemeContext } from './context/ThemeContext'
import './index.css'
import Card from './components/Card';

function App() {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme}>
      <h1>React Theme Switcher</h1>
      <Card/>
      <ThemeButton/>
    </div>
  )
}

export default App
