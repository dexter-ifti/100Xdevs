import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1 className='bg-white text-red-500'>Hello from Chai aur Code</h1>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
