import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App3() {
    return (
        <div>
            <h2>In this file we're discussing about Custom Hooks</h2>
            <App />
        </div>
    )
}

function useTodos(n) {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const value = setInterval(() => {
            axios.get("https://sum-server.100xdevs.com/todos")
                .then(res => {
                    setTodos(res.data.todos);
                    setLoading(false)
                })
        }, n * 1000);

        axios.get("https://sum-server.100xdevs.com/todos")
            .then(res => {
                setTodos(res.data.todos);
                setLoading(false)
            })

        // for cleanup - as on change of n, the previous interval should be cleared
        return () => {
            clearInterval(value)
        }
    }, [n])

    return { todos, loading };

}



function App() {
    const { todos, loading } = useTodos(10)

    return (
        <>
            {loading ? "loading ..." : todos.map(todo => <Track todo={todo} />)}
        </>
    )
}

function Track({ todo }) {
    return <div>
        {todo.title}
        <br />
        {todo.description}
    </div>
}

export default App3