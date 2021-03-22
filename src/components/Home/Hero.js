import React from "react";
import { Button } from "@material-ui/core";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>Your world is worth sharing</h1>
      <h2>Turn unused space into an opportunity</h2>
      <Button variant="outlined">Start hosting</Button>
    </div>
  );
}

export default Hero;
