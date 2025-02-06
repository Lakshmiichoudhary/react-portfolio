import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {

  return (
    <div className='header'
    data-aos="fade-down" 
    data-aos-duration="1000">
      <div className='left nav_item'>
      <h3 className="logo">
        <span>Lakshmi</span>
        <span style={{ color: "#64FFDA" }}>.Dev</span>
      </h3>
      </div>
      <div className='right'>
        <Link href="/" className='nav_item'>Home</Link>
        <a href="#skills" className='nav_item'>Skills</a>
        <a href="#experience" className='nav_item'>Experience</a>
        <a href="#projects" className='nav_item'>Projects</a>
        <a href="#contact" className='nav_item'>Contact</a>
      </div>
    </div>
  )
}

export default Header
