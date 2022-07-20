import React from "react";
import HTML from "../assets/HTML5.png";
import CSS from "../assets/css3.png";
import JavaScript from "../assets/JS.png";
import "../components/Cards.css";
const Cards = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="front"> FRONT </div>
          <div className="back"> BACK </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
