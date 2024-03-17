
import React, { Fragment } from "react"

function App() {

  return (
    <Fragment>
      <CardWrapper>
        Hello World
      </CardWrapper>
      <CardWrapper>
        Hi There
      </CardWrapper>
    </Fragment>
  )
}

function CardWrapper({children}){
  return <div style={{border: '10px solid red', margin: '4px', padding: '5px'}}>
    {children}
  </div>
}



export default App
