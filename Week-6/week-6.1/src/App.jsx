
import React, { Fragment } from "react"
import { useState } from "react"
import App1 from './components/App1'
import App2 from './components/App2'
import App3 from './components/App3'
import Todo from './components/Todo'
import WrapperComponents from './components/WrapperComponents'

function App() {

  return (
    <Fragment>
      <App1></App1>
      <App2></App2>
      <App3></App3> 
      <Todo></Todo>
      <WrapperComponents/>
     
    </Fragment>
  )
}




export default App
