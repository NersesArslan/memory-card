import React from "react";
import "../styles/scoreboard.css";
const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="scoreboard">
      <h3>Current Score: {score}</h3>
      <h3>Best Score: {bestScore}</h3>
    </div>
  );
};

export default Scoreboard;
