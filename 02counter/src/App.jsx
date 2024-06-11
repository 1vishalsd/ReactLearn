import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  const increment = () => {
    if (counter + 1 > 20) {
      alert("limit exceed");
    } else {
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    if (counter - 1 < 0) {
      alert("We are not take the Negative Value");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello React Devs</h1>
      <div>We are Count : {counter}</div>

      <button onClick={increment}>Add Counter : {counter}</button>
      <br />
      <button onClick={decrement}>Remove : {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
