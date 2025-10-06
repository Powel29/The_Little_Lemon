import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo .svg";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      {/* Hamburger icon (desktop hidden) */}
      <div
        className={`hamburger ${sidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Normal links (Desktop view) */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/services">Services</Link>

        <Link to="/booking">Reservations</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>

      {/* Sidebar (Mobile view) */}
      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleSidebar}>
          Home
        </Link>
        <Link to="/menu" onClick={toggleSidebar}>
          Menu
        </Link>
        <Link to="/services" onClick={toggleSidebar}>
          Services
        </Link>

        <Link to="/booking" onClick={toggleSidebar}>
          Reservations
        </Link>
        <Link to="/about" onClick={toggleSidebar}>
          About
        </Link>
        <Link to="/login" onClick={toggleSidebar}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
