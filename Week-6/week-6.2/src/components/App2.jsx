//in this code we are fetching data from the server using axios and useEffect hook and displaying it on the screen.
// and the concept of dependency array is explained through the example of Todo id
// 

import React , {useState, useEffect} from 'react'
import axios from 'axios';


function App2() {
    const [id, setId] = useState(1);

  return (
    <>
    <button onClick={() => setId(1)}>1</button>
    <button onClick={() => setId(2)}>2</button>
    <button onClick={() => setId(3)}>3</button>
    <button onClick={() => setId(4)}>4</button>
    <button onClick={() => setId(5)}>5</button><br />
    <Todo id={id}></Todo>
    </>
  )
}

function Todo({id}){
    const [todo, setTodo] = useState({});
    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(response =>{ setTodo(response.data.todo)})
    }, [id])
    return (
        <>
        <h1>
          id : {id}
          </h1>
        <h1>{todo.title}</h1>
        <h3>{todo.description}</h3>
        </>
    )
}

export default App2