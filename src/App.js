import { useState } from "react";
import "./App.css";
import Generator from "./components/Generator";
import Reader from "./components/Reader";

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setMode(!mode)}>Нажми</button>
      {!mode ? <Reader /> : <Generator />}
    </div>
  );
}

export default App;
