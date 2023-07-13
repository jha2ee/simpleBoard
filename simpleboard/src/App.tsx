import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import axios from "axios";

import Board from "./pages/Board";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello") //api 호출
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/board" Component={Board} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
