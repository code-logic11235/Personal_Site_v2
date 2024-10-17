import React, { useState, useEffect, useRef } from "react";
import DarkModeButton from "./darkModeButton";
import Contact from "../Contact/contact";
import CV from "../../assets/Tai_pham_CV.pdf";
import "./header.css";
import { Link } from "react-router-dom";

function Header({ isModalOpen, setIsModalOpen }) {
  const [toggle, showMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef(null); // Ref to the header component


  useEffect(() => {
    if (toggle) {
      const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
          showMenu(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [toggle]);

  return (
    <>
      {isModalOpen && (
        <Contact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      <header className="header" ref={headerRef}>
        <nav className="nav container">
          <a
            href={
              window.location.hostname === "localhost"
                ? "/#home"
                : "/Personal_Site_v2/#home"
            }
            className="nav_logo"
          ></a>

          <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a
                  href={
                    window.location.hostname === "localhost"
                      ? "/#home"
                      : "/Personal_Site_v2/#home"
                  }
                  className={`nav_link ${
                    activeSection === "home" ? "active-link" : ""
                  }`}
                  onClick={() => showMenu(!toggle)}
                >
                  <i className="uil uil-house-user nav_icon"></i> Home
                </a>
              </li>

              <li className="nav_item">
                <a
                  href={
                    window.location.hostname === "localhost"
                      ? "/#about"
                      : "/Personal_Site_v2/#about"
                  }
                  className={`nav_link ${
                    activeSection === "about" ? "active-link" : ""
                  }`}
                  onClick={() => showMenu(!toggle)}
                >
                  <i className="uil uil-user nav_icon"></i> About
                </a>
              </li>

              <li className="nav_item">
                <a
                  className="nav_link"
                  rel="opener noreferrer"
                  href={CV}
                >
                  <i className="uil uil-message nav_icon"></i> Résumé
                </a>
              </li>

              <li className="nav_item">
                <Link
                   to={
                    window.location.hostname === "localhost"
                      ? "/projects"
                      : "/Personal_Site_v2/projects"
                  }
                  className="nav_link"
                  onClick={() => showMenu(!toggle)}
                >
                  <i className="uil uil-constructor nav_icon"></i> Projects
                </Link>
              </li>

              <li
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                }}
                className="nav_item"
              >
                <a
                  className={`nav_link ${
                    activeSection === "contact" ? "active-link" : ""
                  }`}
                  onClick={() => showMenu(!toggle)}
                >
                  <i className="uil uil-file-alt nav_icon"></i> Contact
                </a>
              </li>
            </ul>
            <DarkModeButton />
            <i
              className="uil uil-times nav_close"
              onClick={() => showMenu(!toggle)}
            ></i>
          </div>

          <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
            <i className="uil uil-bars nav_toggle_bars"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;