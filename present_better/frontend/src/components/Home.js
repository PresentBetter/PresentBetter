import React from "react";
import { WebCam } from "../components";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        <WebCam />
      </div>
    );
  }
}

export default Home;
