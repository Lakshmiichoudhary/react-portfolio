import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header" data-aos="fade-down" data-aos-duration="1000">
      <div className="left nav_item">
        <h3 className="logo">
          <span>Lakshmi</span>
          <span style={{ color: "#64FFDA" }}>.B</span>
        </h3>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav_links">
        <Link to="/" className="nav_item">Home</Link>
        <a href="#skills" className="nav_item">Skills</a>
        <a href="#experience" className="nav_item">Experience</a>
        <a href="#projects" className="nav_item">Projects</a>
        <a href="#contact" className="nav_item">Contact</a>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav_item" onClick={() => setMenuOpen(false)}>Home</Link>
        <a href="#skills" className="nav_item" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#experience" className="nav_item" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" className="nav_item" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" className="nav_item" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </div>
  );
};

export default Header;
