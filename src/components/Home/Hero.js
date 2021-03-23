import React from "react";
import { Button } from "@material-ui/core";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <h1>Your world is worth sharing</h1>
        <h2>Turn your extra space into your next opportunity.</h2>
        <Button className="hero-btn" variant="outlined">
          Become a Host
        </Button>
      </div>
    </div>
  );
}

export default Hero;
