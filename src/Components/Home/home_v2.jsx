import React from "react";
import SocialLink from "./socialLinks";
import "./home_v2.css";
import Banner from "./banner";
import CV from "../../assets/Tai_pham_CV.pdf"

export default function Home({ isModalOpen, setIsModalOpen }) {
  return (
    <section className="home section" id="home">
      <div className="home_container container ">
        {/* {isModalOpen && (
          <Contact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        )} */}

        <div className="home_content grid">
          <div className="home_img"> </div>
          <div className="home_data">
            <Banner />
            <div className='download_btn_wrapper'>
              <a target="_blank" rel="noopener noreferrer" href={CV} className="button download_button"> View my CV      
                <i className="uil uil-file download_button_icon"></i>
              </a>
            </div>
          </div>
          <SocialLink />
        </div>
        <div className="home_scroll">
          <span className="home_scroll-name">Scroll Down</span>
          <a href="#about" className="home_scroll-button button--flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "var(--text-color)", transform: "msFilter" }}
            >
              <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
