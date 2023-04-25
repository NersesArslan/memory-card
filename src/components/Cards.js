import React from "react";
import "../styles/cards.css";
import bergman from "../pictures/bergman.avif";
import tarkovsky from "../pictures/tarkovsky.jpeg";
import coens from "../pictures/Coen_brothers_Cannes_2015_2_(CROPPED).jpg";
import coppola from "../pictures/coppola.jpeg";
import fellini from "../pictures/fellini.jpeg";
import godard from "../pictures/godard.jpeg";
import kurosawa from "../pictures/kurosawa.jpeg";
import pta from "../pictures/pta.jpeg";
import scorsese from "../pictures/scorsese.jpeg";
import speilberg from "../pictures/speilberg.jpeg";
import kubrick from "../pictures/stanley.jpeg";
import villeneuve from "../pictures/stanley.jpeg";

const Cards = () => {
  return (
    <div className="container">
      <div className="card" id="1">
        <img src={tarkovsky} alt="" />
      </div>
      <div className="card" id="2">
        <img src={bergman} alt="" />
      </div>
      <div className="card" id="3">
        <img src={coens} alt="" />
      </div>
      <div className="card" id="4"></div>
      <div className="card" id="5"></div>
      <div className="card" id="6"></div>
      <div className="card" id="7"></div>
      <div className="card" id="8"></div>
      <div className="card" id="9"></div>
      <div className="card" id="10"></div>
      <div className="card" id="11"></div>
      <div className="card" id="12"></div>
    </div>
  );
};

export default Cards;
