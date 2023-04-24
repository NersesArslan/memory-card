import React, { useState } from "react";
import "../styles/scoreboard.css";
const Scoreboard = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="scoreboard">
      <h3>Current Score: {score}</h3>
      <h3>Best Score: {bestScore}</h3>
    </div>
  );
};

export default Scoreboard;
