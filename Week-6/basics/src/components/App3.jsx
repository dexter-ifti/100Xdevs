import React, { Fragment, useState } from "react";
// 3. on being change in the state of dynamic component, the all components will not re-render
// here state is being changed in the child component and the parent component is not re-rendering
// here we are using React.memo to prevent re-rendering of the component
function App() {
  const [title, setTitle] = useState("dexter");

  function changeTitle() {
    setTitle(Math.floor(Math.random() * 3000 + 1));
  }
  return (
    <Fragment>
      <button onClick={changeTitle}>CLick here to change Title</button>
      <Header title={title} />
      <Header title="dexter" />
      <Header title="ifti"></Header>
    </Fragment>
  );
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
