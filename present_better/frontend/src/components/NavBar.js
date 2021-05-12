import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div id="navbar">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </div>
  );
};

export default NavBar;
