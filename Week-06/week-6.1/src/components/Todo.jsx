
import React, { Fragment } from "react"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Learn react from scratch"
    },
    {
      id: 2,
      title: "Learn Tailwind",
      description: "Learn tailwind from scratch"
    },
    {
      id: 3,
      title: "Learn Vite",
      description: "Learn vite from scratch"
    }
  ])

  function addTodo(){
    setTodos([...todos, {
      id: todos.length + 1,
      title: Math.random().toString(36).substring(7),
      description: Math.random().toString(36)
    }])
  }
  return (
    <Fragment>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} id={todo.id}/>)}
    </Fragment>
  )
}

function Todo({title, description, id}){
  return <div>
    <b>{id}</b>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}






export default App
