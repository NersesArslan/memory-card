import React, { useState } from "react";

import "../styles/cards.css";

import Card from "./Card";

const Cards = ({ cardArray, shuffle }) => {
  return (
    <div className="container">
      {cardArray.map((item) => {
        return <Card src={item} onClick={shuffle} />;
      })}
    </div>
  );
};

export default Cards;
