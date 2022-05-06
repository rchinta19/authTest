import React, { useState } from "react";
import { navigate, useLocation, useNavigate } from "react-router-dom";
function Login({ up }) {
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from || "/profile";
  const [uidPwd, setUidPwd] = useState({
    username: "",
    password: "",
  });
  const options = {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(uidPwd),
  };
  const loginUser = (e) => {
    e.preventDefault();

    fetch("http://localhost:8090/user/login", options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          up({ status: data.success, tkn: data.token });
          navigate("/profile", { replace: true });
        }
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form className="login">
        <label htmlFor="userName">
          User Name
          <input
            type="text"
            maxLength={20}
            name="userName"
            value={uidPwd.userName}
            placeholder="Please Enter User Name"
            onChange={(e) => {
              setUidPwd((prev) => ({ ...prev, username: e.target.value }));
            }}
          />
        </label>
        <label htmlFor="pwd">
          password
          <input
            type="password"
            maxLength={20}
            name="pwd"
            value={uidPwd.pwd}
            placeholder="Please Enter password"
            onChange={(e) => {
              setUidPwd((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
        </label>
        <button onClick={loginUser}>login</button>
      </form>
    </div>
  );
}

export default Login;
