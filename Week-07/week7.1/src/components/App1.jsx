import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";

function App1() {
  return (
    <div>
      <div style={{background: "orangered", color : "black", textAlign: "center"}}>
        This is fixed top bar
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App1;
