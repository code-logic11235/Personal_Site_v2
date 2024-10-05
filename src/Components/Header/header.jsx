import React, { useState,useEffect } from "react";
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
        // console.log('section: ',section)
        // console.log('sectionTop: ',sectionTop)
        // console.log('sectionHeight: ',sectionHeight)

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



  return (
    <header className="header">
      <nav className="nav container">

        <a href="#home" className="nav_logo">TP.</a>

        <div className={toggle ? "nav_menu show_menu": "nav_menu"}>
          <ul className="nav_list grid">

            <li className="nav_item">
              <a href="#home" className={`nav_link ${activeSection === 'home' ? 'active-link' : ''}` } onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-house-user nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className={`nav_link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className={`nav_link ${activeSection === 'skills' ? 'active-link' : ''}` } onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#projects" className="nav_link" onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-constructor nav_icon"></i>Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link" onClick={()=> showMenu(!toggle)}>
                <i className="uil uil-message nav_icon"></i>Contact
              </a>
            </li>
          </ul>

            <i className="uil uil-times nav_close" onClick={()=> showMenu(!toggle)}></i>
        </div>

            <div className="nav_toggle" onClick={()=> showMenu(!toggle)}>
              <i className="uil uil-bars"></i>
            </div>

      </nav>
    </header>

    )
}

export default Header;
