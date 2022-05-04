import React, { useState } from "react";
import { navigate, useLocation, useNavigate } from "react-router-dom";
function Login({ up }) {
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from || "/";
  const [uidPwd, setUidPwd] = useState({
    name: "",
    password: "",
  });
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(uidPwd),
  };
  const loginUser = (e) => {
    e.preventDefault();
    console.log(uidPwd);
    fetch("http://localhost:8090/user/login", options)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          up(true);
          navigate(from, { replace: true });
        }
        return res;
      })
      .then((data) => console.log(data));
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
              setUidPwd((prev) => ({ ...prev, name: e.target.value }));
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
