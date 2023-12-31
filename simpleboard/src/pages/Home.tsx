import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/file.css";
import axios from "axios";

import landingImage from "../assets/bg1.jpg";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h3>This is side project for mini-simple-board.</h3>
        <br/>
        <h4>
          For only read and write functions, and have profile and setting in the
          user page.
        </h4>

        <img src={landingImage} alt="Landing" />
      </div>
    </div>
  );
}

export default LandingPage;
