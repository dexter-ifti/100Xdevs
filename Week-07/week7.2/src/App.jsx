import { useContext, useMemo, useState } from "react";
import { CountContext } from "./context";
import App1 from "./components/App1";
import App2 from "./components/App2";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <App1></App1>
      <App2></App2>
    </div>
  );
}



export default App;
