import logo from "./logo.svg";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";
import { useState } from "react";
import bergman from "./pictures/bergman.avif";
import tarkovsky from "./pictures/tarkovsky.jpeg";

import coppola from "./pictures/coppola.jpeg";
import fellini from "./pictures/fellini.jpeg";
import godard from "./pictures/godard.jpeg";
import kurosawa from "./pictures/kurosawa.jpeg";
import pta from "./pictures/pta.jpeg";

import speilberg from "./pictures/speilberg.jpeg";
import kubrick from "./pictures/stanley.jpeg";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardArray, setCardArray] = useState([
    { name: bergman, id: "bergman" },
    { name: tarkovsky, id: "tarkovsky" },
    { name: kubrick, id: "kubrick" },
    { name: coppola, id: "coppola" },
    { name: speilberg, id: "speilberg" },
    { name: kurosawa, id: "kurosawa" },
    { name: fellini, id: "fellini" },
    { name: godard, id: "godard" },
    { name: pta, id: "pta" },
  ]);

  const shuffle = (e) => {
    setCardArray([...cardArray].sort(() => (Math.random() > 0.5 ? 1 : -1)));
    console.log(e.target.id);
  };

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      <Cards cardArray={cardArray} shuffle={shuffle} />
    </div>
  );
};

export default App;
