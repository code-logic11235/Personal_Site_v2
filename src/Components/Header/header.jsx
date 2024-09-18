import React from "react";
import "./header.css"

function Header() {
  

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">TP.</a>
        <div className="nav_menu">
          <ul className="nav_list grid">

            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="uis uis-house-user"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#projects" className="nav_link">
                <i className="uil uil-constructor nav_icon"></i>Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon">contact</i>
              </a>
            </li>

          </ul>
            <i class="uil uil-times nav_close"></i>
            <div className="nav_toggle">
              <i className="uil uil-apps"></i>
            </div>
        </div>
      </nav>
    </header>

    )
}

export default Header;
