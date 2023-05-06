import React from "react";

import "../styles/cards.css";

import Card from "./Card";

const Cards = ({ cardArray, onClick }) => {
  return (
    <div className="container">
      {cardArray.map((item) => {
        return <Card src={item.name} id={item.id} onClick={onClick} />;
      })}
    </div>
  );
};

export default Cards;
