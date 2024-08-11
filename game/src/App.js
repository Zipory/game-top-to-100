import { useState } from "react";
import StartForm from "./components/SartForm";
import TheGame from "./components/TheGame";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  const [toStart, setToStart] = useState(false);
  function startPlay() {
    setToStart(() => !toStart); //changed from true to var
  }

  return (
    <div className="App">
      <header className="App-header">
        {toStart ? (
          <TheGame end={startPlay} />
        ) : (
          <StartForm start={startPlay} />
        )}
      </header>
    </div>
  );
}

export default App;
