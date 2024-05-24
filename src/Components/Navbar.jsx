import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css"; // Importing Navbar CSS file

const Navbar = () => {
  return (
    <nav>
      <div id="leftDiv">
        <div id="logo">Curio Chase</div>
      </div>
      <div id="RightDiv">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
