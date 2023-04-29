import React, { useState } from "react";

import "../styles/cards.css";
import bergman from "../pictures/bergman.avif";
import tarkovsky from "../pictures/tarkovsky.jpeg";
import coens from "../pictures/coens.jpeg";
import coppola from "../pictures/coppola.jpeg";
import fellini from "../pictures/fellini.jpeg";
import godard from "../pictures/godard.jpeg";
import kurosawa from "../pictures/kurosawa.jpeg";
import pta from "../pictures/pta.jpeg";
import scorsese from "../pictures/scorsese.jpeg";
import speilberg from "../pictures/speilberg.jpeg";
import kubrick from "../pictures/stanley.jpeg";
import villeneuve from "../pictures/villeneuve.jpeg";
import Card from "./Card";

const Cards = () => {
  const [cardArray, setCardArray] = useState([
    bergman,
    tarkovsky,
    kubrick,
    coppola,
    speilberg,
    kurosawa,
    fellini,
    godard,
    pta,
  ]);

  const shuffle = () => {
    setCardArray([...cardArray].sort(() => (Math.random() > 0.5 ? 1 : -1)));
  };

  return (
    <div className="container">
      {cardArray.map((item) => {
        return <Card src={item} onClick={shuffle} />;
      })}
    </div>
  );
};

export default Cards;
