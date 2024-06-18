import React from "react";
import UserContext from "../context/userContext.js";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="Password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
