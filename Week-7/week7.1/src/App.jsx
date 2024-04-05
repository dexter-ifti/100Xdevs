import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}>
          <Dashboard /></Suspense>
          }></Route>
          <Route path="/" element={<Suspense fallback={"loading..."}>
          <Landing /></Suspense>
          }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate()
  return (
    <div>
      <div style={{ background: "red" }}>Fixed Top Bar</div>
      <div>
        {/* <button onClick={() => window.location.href = "/dashboard"}>Dashboard Page</button> */}
        <button onClick={() => (navigate("/"))}>Landing Page</button>
        <button onClick={() => (navigate("/dashboard"))}>Dashboard Page</button>
      </div>
    </div>
  );
}

export default App;
