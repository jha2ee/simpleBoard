import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/file.css";
import axios from "axios";
import landingImage from "../assets/sample.jpg";

function LandingPage() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello") // API 호출
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to the Landing Page</h1>
        <img src={landingImage} alt="Landing" />
        <p>작고 소중한 나의 게시판</p>
      </div>
    </div>
  );
}

export default LandingPage;
