import React, { useContext } from "react";
import { userContext } from "../App";

function Details(props) {
  const auth = useContext(userContext);
  const fsecret = (e) => {
    e.preventDefault();
    console.log(auth.tkn);
    fetch("http://localhost:8090/user/details", {
      method: "GET",
      mode: "cors",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.tkn}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      Details
      <button onClick={fsecret}>Check acess</button>
    </div>
  );
}

export default Details;
