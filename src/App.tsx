"use client";

import { useState } from "react";
import Ba9maLogo from "./assets/ba9maLogo.jpg";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 201)); // 0 to 200 inclusive
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={Ba9maLogo} alt="AI Concept Art" className="main-image" />
      </div>

      <div className="content">
        <button onClick={generateNumber} className="generate-btn">
          Generate Number
        </button>

        {randomNumber !== null && (
          <div className="number-display">{randomNumber}</div>
        )}
      </div>
    </div>
  );
}

export default App;
