import "./App.css";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Proute from "./Components/Proute";
import { useContext, useState, createContext } from "react";
import Secret from "./Components/Secret";
import Details from "./Components/Details";
export const userContext = createContext({ status: false, tkn: "" });
function App() {
  const [user, setUser] = useState({ status: false, tkn: "" });
  const auth = useContext(userContext);
  const checkAuth = (u) => {
    console.log("my auth", u, auth);
    setUser((prev) => ({ ...prev, ...u }));
    console.log(auth);
  };

  const location = useLocation();
  return (
    <div className="App">
      <userContext.Provider value={user}>
        <Routes>
          <Route element={<Layout up={checkAuth} />}>
            <Route index element={<Login up={checkAuth} />} />
            <Route path="/login" element={<Login up={checkAuth} />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <Proute auth={auth.status}>
                  <Profile />
                </Proute>
              }
            />
            <Route
              path="/secret"
              element={
                <Proute auth={auth.status}>
                  <Secret />
                </Proute>
              }
            />
            <Route
              path="/details"
              element={
                <Proute auth={auth.status}>
                  <Details tkn={auth.tkn} />
                </Proute>
              }
            />
          </Route>
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
