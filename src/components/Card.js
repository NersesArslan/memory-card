import React from "react";
import "../styles/cards.css";
const Card = (props) => {
  const { src, id, onClick } = props;
  return (
    <div className="card">
      <img src={src} id={id} onClick={onClick} />
    </div>
  );
};

export default Card;
