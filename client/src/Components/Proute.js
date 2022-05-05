import React, { useContext } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import Profile from "./Profile";
import { userContext } from "../App";

function Proute({ children }) {
  const location = useLocation();
  const auth = useContext(userContext);

  if (auth) {
    return children;
  } else {
    // navigate("/");
    return <Navigate replace to="/" state={{ from: location }} />;
  }
}

export default Proute;
