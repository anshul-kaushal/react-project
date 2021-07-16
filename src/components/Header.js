import React from 'react';
import logo from 'img/logo.svg'

const Header = () => {
    // const logo = require('img/journal.jpg').default
    return (
    <header className="page-header">
        <div class = "upper-bar">
        <div class = "logo">
            <a href="index.html"> <img src= {logo} alt="Logo for brand" /> </a>
        </div>
        <nav aria-label="Primary" className="navigation">
          <ul className="menu">
            <li class = "hide"><a href="#">about</a></li>
            <li class = "hide"><a href="#">contact</a></li>
            <li class = "hide"><a href="#">services</a></li>
            <li class = "menu-dots-item">
              <span class = "menu-dots" id="menu">
              <i className="fas fa-ellipsis-v"></i>
            </span>
            </li>
          </ul>
        </nav>
        </div>
        <div id="menu-dropdown" className="menu-dropdown-content">
            <a href="#">About</a>
            <a href="#">services</a>
            <a href="#">contact</a>
        </div>
  
        <div class = "lower-bar">
          <h1 className="heading">Products</h1>
        </div>
    </header> 
    )
}

export default Header