import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav class="navbar">
      <img class="logo" src="./static/css/images/pb.png" />
      {/* <nav class = "nav"> */}
      <div class="nav">
        <Link to="/home">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/about">About Us</Link>
        {/* If Signed in then show these links */}
      </div>
      {/* </nav> */}
    </nav>
  );
};

export default NavBar;
