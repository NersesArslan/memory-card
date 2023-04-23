import React, { useState } from "react";

const Scoreboard = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div>
      <p>Current Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

export default Scoreboard;
