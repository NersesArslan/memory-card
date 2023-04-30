import React from "react";
import uniqid from "uniqid";
import "../styles/cards.css";

import Card from "./Card";

const Cards = ({ cardArray, shuffle }) => {
  return (
    <div className="container">
      {cardArray.map((item) => {
        return <Card src={item.name} id={item.id} onClick={shuffle} />;
      })}
    </div>
  );
};

export default Cards;
