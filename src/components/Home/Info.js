import { Button } from "@material-ui/core";
import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="info">
      <div className="info-wrapper">
        <div className="left-side">
          <h1>We stand with the Asian and Pacific Islander community</h1>
          <Button className="info-btn" variant="outlined">
            Learn more
          </Button>
        </div>
        <div className="right-side">
          <p>
            We condemn racism, and denounce the violent acts that continue to
            happen to the Asian and Pacific Islander community. The number of
            anti-Asian hate crimes has alarmingly grown since the pandemic, and
            we call on our allies to join us in standing up to these injustices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
