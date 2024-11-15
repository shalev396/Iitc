import "./Head.css";
import React from "react";
// import headBackground from ".././../../public/assets/images/image-omelette.jpeg";
export default function Head() {
  return (
    <div className="head">
      <img
        className="omelet-img"
        src={"/assets/images/image-omelette.jpeg"}
        alt=""
      />
      <h1 className="page-title">Simple Omelette Recipe</h1>
      <p className="intro">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
}
