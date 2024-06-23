import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";

function App1() {
  return (
    //   this window.location.href is hard reloding the page every time button is clicked it reloads the whole page which is unneccesary 
    <div>
      {/* <button onClick={
          () => window.location.href = "/dashboard"
        }>Dashboard Button</button>
        <button onClick={
            () => window.location.href = "/"
        }>Landing Button</button> */}

      <BrowserRouter>
            <AppBar/>   
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


// it is not a good practice to use window.location.href as it reloads the whole page and it is not a single page application 
// so we can use useNavigate hook from react-router-dom to navigate to the different pages without reloading the whole page 
// the useNavigate hook is used to navigate to different pages without reloading the whole page 
// and useNavigate is always used inside the BrowserRouter otherwise it will throw an error
function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing Button</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard Button </button>
    </div>
  );
}

export default App1;
