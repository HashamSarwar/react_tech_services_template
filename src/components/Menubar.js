import React from 'react'
import './Menubar.css'

export default function Menubar() {
    const logo = require("./assets/your_logo.png");
  const hamburger = require("./assets/hamburger.png");
  const dropdown = require("./assets/dropdown.png");
  return (
    <>
    <div id='home' className='header'>
    <div className="logo-container">
          <img className="logo" src={logo} />
          <img className="hamburger" src={hamburger}/>
    </div>
    <div className='menu-bar'>
            <ul>
                <li><a href="#home"><span className='active'>Home</span></a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#services">Services</a></li>
                
                <li><a href="#expertise">Expertise</a></li>
            </ul>
        </div>
        <div className="logo-invisible-container">
        <img className="logo-hide" />
        </div>
    </div>
    
    </>
  )
}
