import React, { useState, useContext } from "react";
import { CountContext } from "../context";
import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";

function App2() {
  return (
    <div>
        <RecoilRoot>
            <Count />
        </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("Count Rendered");
  return (
    <div>
      <CountRender />
      <Buttons/>
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCountRenederer />
    </div>
  );
}

function EvenCountRenederer(){
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is Even" : null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <button onClick={() => setCount(count => count - 1)}>Decrement</button>
    </div>
  );
}

export default App2;
