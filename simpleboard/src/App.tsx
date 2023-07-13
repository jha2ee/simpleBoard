
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";


import Board from "./pages/Board";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Setting from "./pages/Setting";
import QnA from "./pages/QnA";

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile/setting" element={<Setting />} />
        <Route path="/profile/qna" element={<QnA />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

