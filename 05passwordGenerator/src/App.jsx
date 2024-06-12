import { useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setCharAllowed] = useState(false);
  return (
    <>
      <h1 className="text-4xl text-white">Password Generator</h1>
    </>
  );
}

export default App;
