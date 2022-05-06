import React from "react";

export default function Secret() {
  const fsecret = (e) => {
    e.preventDefault();
    fetch("http://localhost:8090/user/secret", {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      Secret
      <button onClick={fsecret}>Check acess</button>
    </div>
  );
}
