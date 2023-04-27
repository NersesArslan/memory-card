import React from "react";

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
  return (
    <div className="container">
      <Card src={tarkovsky} className="card" />
      <Card src={bergman} className="card" />
      <Card src={kubrick} className="card" />
      <Card src={coppola} className="card" />
      <Card src={speilberg} className="card" />
      <Card src={kurosawa} className="card" />
      <Card src={fellini} className="card" />
      <Card src={godard} className="card" />
      <Card src={pta} className="card" />
    </div>
  );
};

export default Cards;
