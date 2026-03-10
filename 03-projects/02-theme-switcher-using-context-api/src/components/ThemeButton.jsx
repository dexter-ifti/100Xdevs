import React, { useContext } from 'react'
import useTheme from '../hooks/useTheme';

function ThemeButton() {
    const {theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
        Current Theme : {theme}
    </button>
  )
}

export default ThemeButton