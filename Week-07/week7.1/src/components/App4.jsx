// in this example we are passing the state and setState as props to the child component 
// and the child component is using the props to update the state
// this is a good example of how to pass the state and setState as props to the child component
// and how to update the state from the child component
// this is called prop drilling or lifting state up
// this is not the best way to manage the state in the react application
// because the state is being passed as props to the child component
// and the child component is using the props to update the state
//  because of this the child component is tightly coupled with the parent component and 
// child component is re-rendered whenever the parent component is re-rendered i.e. uneccesary re-renders
import React from "react";

function App4() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div>
      <CountRenderer count = {count}/>
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function CountRenderer({ count }) {
  return <div>{count}</div>;
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default App4;
