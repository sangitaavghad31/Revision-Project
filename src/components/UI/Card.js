// Write your code below:
import React from "react";
import "./Card.css";

const Card = (props) => {
  const cn = props.className? `card ${props.className}` : `card`
  return (
    <div className={cn}>
      {props.children}
    </div>
  )
}

export default Card;

