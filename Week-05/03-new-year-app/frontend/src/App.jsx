import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch('https://ubiquitous-goldfish-g445rv6gqrjhgjw-3000.app.github.dev/todos')
    .then( async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
