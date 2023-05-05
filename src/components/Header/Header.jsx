import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navContainer">
      <span>Header</span>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/userForm">User-Form</Link>
      </nav>
    </div>
  );
};

export default Header;
