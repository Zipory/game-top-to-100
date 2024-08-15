import { useState } from "react";
import StartForm from "./components/StartForm";
import TheGame from "./components/TheGame";
import Buttons from "./components/Buttons";
import "./App.css";
import Leaders from "./components/Leaders";
function App() {
  const [toStart, setToStart] = useState(false);
  function startPlay() {
    setToStart(() => !toStart); //changed from false to true
  }


  return (
    <div className="App">
      <header className="App-header">
        {toStart ? (
          <TheGame end={startPlay} />
        ) : (
          <StartForm start={startPlay} />
        )}
        <Leaders  />
      </header>
    </div>
  );
}

export default App;
