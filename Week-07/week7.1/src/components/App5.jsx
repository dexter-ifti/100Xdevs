// in this example we are using React Context API to share the state between the components
// in previous example we were passing the state and setState as props to the child component
// and the child component was using the props to update the state
// this is a good example of how to pass the state and setState as props to the child component
// and how to update the state from the child component
// this is how we can manage the state in the react application and avoid prop drilling 

import React from "react";
import { countContext } from "./context";

function App4() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <countContext.Provider value={count}>
        <Count setCount={setCount} />
      </countContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = React.useContext(countContext);
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = React.useContext(countContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default App4;
