import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {

  return (
    <div className='header'>
      <div className='left nav_item'>
      <h3 className="logo">
        <span>Lakshmi</span>
        <span style={{ color: "#64FFDA" }}>.Dev</span>
      </h3>
      </div>
      <div className='right'>
        <Link to="/" className='nav_item'>Home</Link>
        <Link to="/skills" className='nav_item'>Skills</Link>
        <Link to="/experience" className='nav_item'>Experience</Link>
        <Link to="/projects" className='nav_item'>Projects</Link>
        <Link to="/contact" className='nav_item'>Contact</Link>
      </div>
    </div>
  )
}

export default Header
