import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Landing = React.lazy(() => import("./Landing"));
const Dashboard = React.lazy(() => import("./Dashboard"));

function App3() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading ..."}>
                <Landing />
              </Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing Button</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard Button </button>
    </div>
  );
}

export default App3;
