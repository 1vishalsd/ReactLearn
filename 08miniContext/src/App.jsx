import { useState } from "react";
import UserContextProvider from "./context/userContext";

import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>REACT CONtEXT API</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
