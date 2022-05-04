import React, { useState, useContext } from "react";
import { userContext } from "../App";
import {
  Link,
  Outlet,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
function Layout({ up }) {
  const auth = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <nav>
        <ul>
          {!auth ? (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/profile">profile</Link>
              </li>
            </>
          ) : (
            <></>
          )}

          {auth ? (
            <>
              <li>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    up(false);
                    navigate("/");
                  }}
                >
                  logout
                </Link>
              </li>
              <li>
                <Link to="/profile">profile</Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
