import React, { useState } from "react";

function Register() {
  const [uidPwd, setUidPwd] = useState({
    name: "",
    phone: "",
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
  const rUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:8090/user/signup", options);
  };
  return (
    <div>
      <form>
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
        <label htmlFor="phoneNumber">
          Phone Number
          <input
            type="number"
            maxLength={20}
            name="phoneNumber"
            value={uidPwd.phone}
            placeholder="Please Enter Phone Number"
            onChange={(e) => {
              setUidPwd((prev) => ({ ...prev, phone: e.target.value }));
            }}
          />
        </label>
        <label htmlFor="pwd">
          password
          <input
            type="password"
            maxLength={20}
            name="pwd"
            value={uidPwd.password}
            placeholder="Please Enter your password"
            onChange={(e) => {
              setUidPwd((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
        </label>
        <button onClick={rUser}>register</button>
      </form>
    </div>
  );
}

export default Register;
