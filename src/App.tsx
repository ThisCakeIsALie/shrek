import React, { useState, useRef } from "react";
import shrekDab from "./assets/shrek-dab.gif";
import shrekNoDab from "./assets/shrek-no-dab.png";
import "./App.css";

const App: React.FC = () => {
  const [isDabbing, setDabbing] = useState(false);
  const isTouching = useRef(false);

  const savedCounter = window.localStorage.getItem("dabcounter");
  let initialCounter = 0;
  if (savedCounter !== null) {
    initialCounter = parseInt(savedCounter);
  }
  const [dabCounter, setDabCounter] = useState(initialCounter);

  async function dab() {
    const newDabCounter = dabCounter + 1;
    await setDabCounter(newDabCounter);
    await window.localStorage.setItem("dabcounter", String(newDabCounter));
  }

  async function startDabbing(e: React.SyntheticEvent) {
    await setDabbing(true);
    await dab();
  }

  function stopDabbing(e: React.SyntheticEvent) {
    setDabbing(false);
  }

  const events = {
    onTouchStart: (e: React.SyntheticEvent) => {
      e.preventDefault();
      isTouching.current = true;
      startDabbing(e);
    },
    onTouchEnd: (e: React.SyntheticEvent) => {
      e.preventDefault();
      stopDabbing(e);
    },
    onMouseDown: (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (!isTouching.current) {
        startDabbing(e);
      }
    },
    onMouseUp:(e: React.SyntheticEvent) => {
      e.preventDefault();
      isTouching.current = false;
      stopDabbing(e);
    }

  };

  return (
    <div className="App" {...events}>
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
