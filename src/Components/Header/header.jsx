import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import DarkModeButton from "./darkModeButton"
import "./header.css"

function Header() {
    const [toggle, showMenu] = useState(false);

    const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;


        if (window.scrollY >= sectionTop - sectionHeight / 5) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  //FOR MODAL 

  // Get the modal
// var modal = document.querySelector('.modal');

// Get the <span> element that closes the modal
// var closeButton = document.querySelector('.close');

// Open modal (you can trigger this on button click or page load)
// modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
// closeButton.onclick = function() {
  // modal.style.display = "none";
// };

// Close modal when user clicks outside the modal
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };



  return (
    <header className="header">
      <nav className="nav container">
        
        <a href={window.location.hostname === "localhost" ? "/#home" : "/Personal_Site_v2/#home"} className="nav_logo"></a>


        <div className={toggle ? "nav_menu show_menu": "nav_menu"}>
          <ul className="nav_list grid">

            <li className="nav_item">
              <a href={window.location.hostname === "localhost" ? "/#home" : "/Personal_Site_v2/#home"} className={`nav_link ${activeSection === 'home' ? 'active-link' : ''}` } onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-house-user nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a href={window.location.hostname === "localhost" ? "/#about" : "/Personal_Site_v2/#about"} className={`nav_link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">

              <Link to= "/resume" className={`nav_link ${activeSection === 'resume' ? 'active-link' : ''}` } onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-message nav_icon"></i> Résumé
              </Link>
              
            </li>

            <li className="nav_item">
              <a href="#projects" className="nav_link" onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-constructor nav_icon"></i>Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="/contact" className={`nav_link ${activeSection === 'contact' ? 'active-link' : ''}` } onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-file-alt nav_icon"></i>Contact
              </a>
            </li>
          </ul>
          <DarkModeButton/>
            <i className="uil uil-times nav_close" onClick={()=> showMenu(!toggle)}></i>
        </div>

            <div className="nav_toggle" onClick={()=> showMenu(!toggle)}>
              <i className="uil uil-bars nav_toggle_bars"></i>
            </div>

      </nav>
    </header>

    )
}

export default Header;
