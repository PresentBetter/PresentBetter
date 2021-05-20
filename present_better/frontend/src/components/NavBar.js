import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div id="navbar">
      <img class="logo" src="./static/css/images/logo.png"/>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/about">About Us</Link>
        {/* If Signed in then show these links */}
      </nav>
    </div>
  );
};

export default NavBar;
