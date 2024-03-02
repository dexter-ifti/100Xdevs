import { useState } from "react";

export function CreateTodo(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input id="title" style={{
            padding : 10, margin: 10
            }} type="text" placeholder="title" onChange={ (e) => {
            const value = e.target.value
            setTitle(value);
        }} />
        <br />
        <input id="desc" style={{
            padding : 10, margin: 10
            }} type="text" placeholder="description" onChange={ (e) => {
            const value = e.target.value;
            setDescription(value);
            }}/>
        <br />
        <button style=
        {{  padding : 10, 
            margin: 10
        }} onClick={() => {
            fetch('https://ubiquitous-goldfish-g445rv6gqrjhgjw-3000.app.github.dev/todo', {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-type" : "application/json"
                }
            })
            .then( async (res) => {
            const json = await res.json();
            alert("Todo Added");
            })
        }}>Add a Todo</button>
    </div>
}