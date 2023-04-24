import React from "react";
import "../styles/cards.css";
import image from "../pictures/20211108_165336.jpg";

const Cards = () => {
  return (
    <div className="container">
      <div className="card" id="1">
        <img src={image} alt="image" />
      </div>
      <div className="card" id="2"></div>
      <div className="card" id="3"></div>
      <div className="card" id="4"></div>
      <div className="card" id="5"></div>
      <div className="card" id="6"></div>
      <div className="card" id="7"></div>
      <div className="card" id="8"></div>
      <div className="card" id="9"></div>
    </div>
  );
};

export default Cards;
