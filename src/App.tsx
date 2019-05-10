import React, { useState } from "react";
import shrekDab from "./assets/shrek-dab.gif";
import shrekNoDab from "./assets/shrek-no-dab.png";
import "./App.css";
import { start } from "repl";

const App: React.FC = () => {
  const [isDabbing, setDabbing] = useState(false);

  const savedCounter = window.localStorage.getItem('dabcounter');
  let initialCounter = 0;
  if (savedCounter !== null) {
    initialCounter = parseInt(savedCounter);
  }
  const [dabCounter, setDabCounter] = useState(initialCounter);

  function dab() {
    const newDabCounter = dabCounter + 1;
    setDabCounter(newDabCounter);
    window.localStorage.setItem('dabcounter', String(newDabCounter));
  }

  function startDabbing(e: React.SyntheticEvent) {
    setDabbing(true);
    dab();
    e.preventDefault();
  }

  function stopDabbing(e: React.SyntheticEvent) {
    setDabbing(false);
  }

  let events = {};

  if ('ontouchstart' in window) {
    events = {
      onTouchStart: startDabbing,
      onTouchEnd: stopDabbing
    }
  } else {
    events = {
      onMouseDown: startDabbing,
      onMouseUp: stopDabbing
    }
  }

  return (
    <div
      className="App"
      {...events}
    >
      <div className="App-image-container">
        <img
          className="App-shrek-image"
          src={isDabbing ? shrekDab : shrekNoDab}
          alt="logo"
        />
      </div>
      <div className="App-counter-container">
        <h1>
          <p>Shrek has dabbed {dabCounter} times</p>
        </h1>
      </div>
    </div>
  );
};

export default App;
