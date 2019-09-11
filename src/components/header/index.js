import React from "react";
import "./header.scss";
import Nav from "../nav";
import Logo from "../../assets/images/logo.png";

export default props => {
  return (
    <header>
      <div className="top-image"></div>
      <h1 className="center">
        <img src={Logo} />
      </h1>
      <h2 className="slogan center">We deliver cupcakes for the important events in your life!</h2>
      <Nav />
    </header>
  );
}
