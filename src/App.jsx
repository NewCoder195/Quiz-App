import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tutorial from "./Components/Tutorial";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorial />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
