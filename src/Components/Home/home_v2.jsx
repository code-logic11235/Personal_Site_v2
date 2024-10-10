
import React, { useState } from "react";
import SocialLink from "./socialLinks"
import "./home_v2.css"
import Banner from "./banner";
import Contact from "../Contact/contact";


export default function Home({isModalOpen, setIsModalOpen}) {
    console.log(isModalOpen)
    return (
        <section className="home section" id="home">
            <div className="home_container container ">
              {isModalOpen && <Contact isModalOpen={isModalOpen}/>}
                        
                <div className="home_content grid">
                    <div className="home_img"> </div>
                    <div className="home_data">
                    {/* <SocialLink/> */}
                      <Banner/>
                        <a href='#contact' className="button hello_button button__flex" onClick={()=>setIsModalOpen(!isModalOpen)}> say Hello 
                        <svg style = {{fill: "var(--button-text-color)"}}className="button__icon" xmlns="http://www.w3.org/2000/svg" version="1.0" width="1040.000000pt" height="1000.000000pt" viewBox="0 0 1040.000000 1000.000000" preserveAspectRatio="xMidYMid meet">
                          <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)">
   
                          <path d="M6304 9270 c-79 -11 -205 -60 -285 -111 -48 -30 -599 -576 -2212 -2192 -1181 -1184 -2166 -2176 -2188 -2205 -51 -68 -96 -162 -120 -255 -21 -83 -25 -245 -8 -329 15 -70 64 -190 107 -258 49 -79 2502 -2534 2597 -2599 246 -169 556 -174 815 -13 37 23 747 726 2211 2189 2278 2276 2225 2222 2284 2373 90 231 59 500 -82 698 -33 47 -2488 2510 -2553 2561 -142 114 -366 169 -566 141z m1520 -1784 c653 -657 1194 -1203 1202 -1213 7 -10 14 -26 14 -35 0 -17 -65 -18 -1219 -18 l-1219 0 -6 33 c-7 41 -7 2413 1 2432 3 10 10 12 22 6 9 -5 551 -547 1205 -1205z m-1724 -852 l0 -1916 -34 -34 -34 -34 -1917 0 c-1793 0 -1917 1 -1904 17 35 42 3873 3883 3880 3883 5 0 9 -844 9 -1916z m2640 -911 c0 -10 -3703 -3713 -3712 -3713 -5 0 -8 481 -8 1070 l0 1070 23 5 c12 3 265 6 562 8 490 3 544 5 585 21 204 81 342 234 391 436 5 19 9 266 9 549 0 283 3 525 6 538 l6 23 1069 0 c588 0 1069 -3 1069 -7z m-4226 -1569 c15 -6 16 -117 16 -1225 l0 -1219 -22 0 c-28 0 -2455 2421 -2444 2439 8 12 2419 17 2450 5z"/>
                          <path d="M1646 8706 c-53 -16 -124 -80 -147 -130 -25 -54 -25 -148 0 -201 23 -50 73 -98 126 -122 38 -17 112 -18 1315 -21 973 -2 1289 0 1334 9 189 39 260 262 127 400 -82 85 18 79 -1435 78 -977 -1 -1290 -4 -1320 -13z"/>
                          <path d="M1642 7761 c-102 -35 -162 -119 -162 -226 0 -75 24 -128 78 -177 77 -70 52 -68 947 -68 891 0 870 -1 945 66 54 49 80 107 80 180 0 74 -24 127 -78 176 -77 70 -52 68 -951 68 -756 -1 -809 -2 -859 -19z"/>
                          <path d="M1613 6839 c-48 -24 -99 -77 -119 -125 -8 -19 -14 -60 -14 -92 0 -115 78 -211 191 -232 68 -13 1040 -13 1108 0 114 21 191 114 191 229 0 102 -49 182 -135 222 -37 17 -76 19 -610 19 -559 0 -571 0 -612 -21z"/>
                          <path d="M1631 1966 c-91 -33 -151 -123 -151 -229 0 -83 42 -157 114 -202 l49 -30 559 -3 c373 -2 571 1 598 8 179 48 232 292 89 413 -21 19 -56 39 -78 45 -56 17 -1133 15 -1180 -2z"/>
                          </g>
                        </svg>
                          
                          </a>

                    </div>
                <SocialLink/>
    

                </div>
                    <div className="home_scroll">
                      <span className="home_scroll-name">Scroll Down</span>
                      <a href="#about" className="home_scroll-button button--flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "var(--text-color)", transform: 'msFilter'}}><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
                      </a>
                    </div>
            </div>
        </section>
    )

}



