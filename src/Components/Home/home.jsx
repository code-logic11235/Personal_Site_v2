
import React, { useState } from "react";
import SocialLink from "./socialLinks"
import "./home.css"
import Banner from "./banner";


export default function Home() {

    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <SocialLink/>
                    <div className="home_img"> </div>
                    {Data()}
                    
                </div>
                {ScrollDown()}
            </div>
        </section>
    )

}

function Data(){
    return (
        <div className="home_data">
          <Banner/>
            {/* <h1 className="home_title"> Tai Pham </h1>
            <h3 className="home_subtitle">Software Engineer</h3>
            <p className="hone_description"> I am a remote Software engineer who day dreams about building pixel-perfect and accessible web applications</p> */}
            {/* <p className="button_contact" href="#contact"><span className="button_contact_span"></span>Contact Me</p> */}
            <a href='#contact' className="button hello_button button__flex"> say Hello <svg
                  class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="var(--container-color)"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="var(--container-color)"
                  ></path>
                </svg></a>

        </div>
    )
}

function ScrollDown() {

  return (
      <div className="home_scroll">
          <span className="home_scroll-name">Scroll Down</span>
          <a href="#about" className="home_scroll-button button--flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "#0c0d0d", transform: 'msFilter'}}><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
          </a>
      </div>
  )

}




{/* <svg
              width="32px"
              height="32px"
              class="home__scroll-mouse"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style=
                {{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: "1.5"
              }}
              
            >
              <path
                class="wheel"
                d="M123.359,79.775l0,72.843"
                style=
                  {{fill: "none",
                  stroke: "#000",
                  strokeWidth: "20px"}}
                
              ></path>
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style="
                  fill: none;
                  stroke: #000;
                  stroke-width: 20px;
                "
              ></path>
            </svg> */}