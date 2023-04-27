import React from "react";

const Card = (props) => {
  const { src, className, id } = props;
  return (
    <div className={className}>
      <img src={src} id={id} />
    </div>
  );
};

export default Card;
