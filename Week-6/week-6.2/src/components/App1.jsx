// in this file we are fetching data from the server and displaying it on the screen using the useEffect hook.
// useEffect hook is used to perform side effects in the functional component. i.e. fetching data from the server, updating the DOM, etc.

import { useEffect, useState } from 'react'
import axios from 'axios'

function App1() {
  const [todos, setTodos] = useState([]);

  useEffect( () => {
    axios.get('https://sum-server.100xdevs.com/todos')
    .then( (respoonse) => {
      setTodos(respoonse.data.todos); 
    })
  }, [])

  return (
    <>
      {todos.map( todo => <Todo todoid = {todo.id} title = { todo.title} description={todo.description}/>)}

    </>
  )
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}

export default App1;
