import React, { useState } from "react";
import SocialLink from "./socialLinks";
import "./home_v2.css";
import Banner from "./banner";
import Contact from "../Contact/contact";

export default function Home({ isModalOpen, setIsModalOpen }) {
  return (
    <section className="home section" id="home">
      <div className="home_container container ">
        {isModalOpen && (
          <Contact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        )}

        <div className="home_content grid">
          <div className="home_img"> </div>
          <div className="home_data">
            <Banner />
            <a
              href="#contact"
              className="button hello_button button__flex"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              {" "}
              say Hello
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="0 0 32 32"
                version="1.1"
                style={{ fill: "var(--button-text-color)" }}
                className="button__icon"
              >
                <path d="M31.376 0c-0.191 0-0.422 0.054-0.691 0.168l-29.833 12.659c-1.074 0.456-1.142 1.334-0.151 1.951l8.43 5.251c0.991 0.617 2.301 1.94 2.912 2.939l5.053 8.274c0.29 0.474 0.64 0.71 0.977 0.71 0.372 0 0.727-0.286 0.97-0.851l12.758-29.805c0.345-0.808 0.148-1.296-0.426-1.297zM10.174 18.248l-6.833-4.257 22.925-9.726-14.756 15.006c-0.451-0.4-0.909-0.757-1.337-1.023zM17.898 28.602l-4.076-6.672c-0.241-0.394-0.558-0.814-0.912-1.231l14.825-15.075z" />
              </svg>
            </a>
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
