import React from "react";
import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo"></img>
      <h1>Investment Buddy</h1>
    </header>
  );
};

export default Header;
