import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import User from './Components/User/User'
import GitHub, { githubInfoLoader } from './Components/Github/Github.jsx'
import Layout from './Layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route 
             loader = {githubInfoLoader}
             path='github' 
             element={<GitHub />} />
            <Route path='user/:user_id' element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
