import React, { Fragment, useState } from "react";

// 2. on being change in the state of dynamic component, the all components will not re-render
// here state is being changed in the child component and the parent component is not re-rendering
function App() {
  return (
    <Fragment>
      <HeaderWithButton />
      <Header title="ifti"></Header>
    </Fragment>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("dexter");

  function changeTitle() {
    setTitle(Math.floor(Math.random() * 5000 + 1));
  }
  return (
    <div>
      <button onClick={changeTitle}>CLick here to change Title</button>
      <Header title={title} />
    </div>
  );
}
function Header({ title }) {
  return <div>{title}</div>;
}

export default App;