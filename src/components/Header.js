import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import bannerImg from "../images/restauranfood.jpg";
import Services from "./Services";
import About from "./About";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking");
  };
  return (
    <>
      <header className="header">
        <div className="banner">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={handleClick}>Reserve Table</button>
        </div>
        {/* banner image sits in the right column */}
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </header>
      {/* Render menu cards on the home page below the header */}
      <Menu />
      <Services />
      <About />
    </>
  );
};

export default Header;
