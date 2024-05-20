import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <p>Learning Context api from Chai aur Code channel</p>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
