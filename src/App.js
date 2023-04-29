import logo from "./logo.svg";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";
import { useState } from "react";
import bergman from "./pictures/bergman.avif";
// import tarkovsky from "../pictures/tarkovsky.jpeg";
// import coens from "../pictures/coens.jpeg";
// import coppola from "../pictures/coppola.jpeg";
// import fellini from "../pictures/fellini.jpeg";
// import godard from "../pictures/godard.jpeg";
// import kurosawa from "../pictures/kurosawa.jpeg";
// import pta from "../pictures/pta.jpeg";
// import scorsese from "../pictures/scorsese.jpeg";
// import speilberg from "../pictures/speilberg.jpeg";
// import kubrick from "../pictures/stanley.jpeg";
// import villeneuve from "../pictures/villeneuve.jpeg";
const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardArray, setCardArray] = useState([
    bergman,
    // tarkovsky,
    // kubrick,
    // coppola,
    // speilberg,
    // kurosawa,
    // fellini,
    // godard,
    // pta,
  ]);
  const shuffle = () => {
    setCardArray([...cardArray].sort(() => (Math.random() > 0.5 ? 1 : -1)));
  };
  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      <Cards />
    </div>
  );
};

export default App;
