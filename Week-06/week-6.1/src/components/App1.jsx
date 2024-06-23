import { Fragment } from "react"
import { useState } from "react"
// 1. on being change in the state of dynamic component, the all components will re-render

function App() {
  
  const [title, setTitle] = useState("dexter")
  
  function changeTitle(){
    setTitle(Math.floor(Math.random()*3000+1));
  }
  return (
    <Fragment>
      <button onClick={changeTitle}>CLick here to change Title</button>
      <Header title={title}/>
      <Header title="dexter"/>
      <Header title="ifti"></Header>
    </Fragment>
  )
}
function Header({title}){
  return <div>
    {title}
  </div>
}


export default App