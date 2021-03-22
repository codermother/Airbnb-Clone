import React from "react";
import "./Card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

function Card2({ src, title, description, price }) {
  return (
    <div className="card2">
      <img src={src} alt="" />
      <div className="card2_info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

function Card3({ src, title, description, price }) {
  return (
    <div className="card3">
      <img src={src} alt="" />
      <div className="card3_info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
export { Card, Card2, Card3 };
