
import React, { useState } from "react";
import SocialLink from "./socialLinks"
import "./home_v2.css"
import Banner from "./banner";


export default function Home() {

    return (
        <section className="home section" id="home">
            <div className="home_container container ">
                        {/* <svg version="1.0" xmlns="http://www.w3.org/2000/svg" style={{transform: "rotate(180deg)"}}
                        width="526.000000pt" height="176.000000pt" viewBox="0 0 526.000000 176.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,176.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M4330 1569 c-272 -9 -636 -23 -995 -39 -121 -6 -375 -17 -565 -25
                        -190 -8 -433 -19 -540 -25 -107 -5 -292 -14 -410 -20 -118 -6 -294 -15 -390
                        -20 -96 -5 -319 -17 -495 -25 -176 -8 -381 -20 -455 -25 -75 -6 -168 -10 -207
                        -10 -56 0 -76 -4 -94 -20 l-24 -20 35 -30 c19 -17 41 -30 50 -30 9 0 20 -4 25
                        -9 6 -4 44 -21 85 -35 41 -15 84 -31 95 -36 35 -15 210 -75 495 -169 151 -51
                        283 -96 292 -101 10 -6 25 -10 33 -10 8 0 23 -4 33 -9 9 -5 132 -46 272 -92
                        140 -45 259 -86 264 -91 6 -4 18 -8 28 -8 10 0 26 -4 36 -9 9 -5 85 -30 167
                        -57 83 -26 157 -51 165 -55 8 -4 85 -30 170 -58 85 -28 335 -111 555 -186 466
                        -158 610 -205 633 -205 33 0 101 42 204 127 134 111 186 153 437 355 112 89
                        233 187 270 216 36 30 126 102 199 160 73 59 143 115 155 126 12 10 55 46 96
                        80 119 100 191 176 191 203 0 54 -60 69 -127 32 -21 -12 -78 -55 -128 -96 -49
                        -41 -97 -80 -105 -86 -44 -34 -116 -92 -120 -97 -3 -3 -27 -24 -55 -45 -27
                        -22 -59 -48 -70 -57 -11 -9 -103 -83 -205 -164 -102 -81 -187 -150 -190 -153
                        -3 -4 -93 -77 -200 -163 -108 -85 -203 -162 -210 -169 -52 -50 -126 -98 -158
                        -104 -29 -4 -69 4 -177 40 -233 75 -404 130 -530 170 -66 20 -129 40 -140 45
                        -11 4 -74 24 -140 45 -66 21 -129 41 -140 45 -11 5 -72 24 -135 44 -205 65
                        -464 149 -485 156 -11 5 -74 25 -140 45 -66 20 -158 50 -205 65 -47 15 -150
                        49 -230 74 -362 115 -443 141 -569 183 -153 50 -169 57 -152 67 16 10 161 23
                        401 36 113 6 279 15 370 21 91 5 260 14 375 19 405 20 1015 52 1610 85 154 9
                        359 20 455 25 623 35 1155 72 1255 89 65 11 -319 11 -665 0z"/>
                        </g>
                        </svg> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="166.000000pt" height="108.000000pt" viewBox="-50 100 266.000000 288.000000" preserveAspectRatio="xMidYMid slice">

                        <g transform="translate(0.000000,288.000000) scale(0.040000,-0.040000)" fill="#000000" stroke="none">
                        <path d="M260 2549 c-112 -61 -110 -55 -64 -199 13 -41 28 -93 33 -115 48 -187 114 -457 120 -490 5 -22 14 -60 20 -85 6 -25 23 -90 36 -144 27 -108 36 -126 58 -108 10 8 17 8 24 1 8 -8 13 -5 18 10 5 17 14 21 40 19 45 -3 54 8 28 33 -20 21 -20 22 -2 40 20 20 20 24 -6 124 -7 28 -34 136 -59 240 -71 297 -71 296 3 225 23 -23 63 -57 89 -76 84 -63 115 -88 165 -136 28 -27 53 -48 58 -48 4 0 18 -12 31 -27 21 -26 36 -37 103 -83 49 -33 135 -103 135 -110 0 -3 24 -23 53 -43 28 -20 75 -58 102 -84 95 -90 132 -100 192 -53 14 11 35 20 46 20 27 0 87 47 87 69 0 9 5 22 10 27 8 8 6 15 -5 24 -10 8 -15 29 -15 59 1 37 3 43 11 28 10 -18 12 -18 30 -1 10 9 19 25 19 36 0 20 26 25 33 6 6 -19 -4 -49 -14 -42 -5 3 -13 -6 -19 -20 -5 -14 -16 -26 -25 -26 -18 0 -19 -12 -4 -27 9 -9 17 -6 31 13 11 13 28 24 39 24 11 0 32 18 49 42 31 42 39 80 18 77 -33 -4 -47 2 -42 16 8 20 24 19 24 -2 0 -13 3 -14 12 -5 7 7 20 12 30 12 10 0 18 5 18 10 0 6 -11 10 -25 10 -30 0 -31 4 -5 32 22 24 26 38 10 38 -5 0 -10 5 -10 11 0 8 4 8 14 0 18 -15 25 -4 24 37 -1 25 -7 33 -30 41 -34 12 -37 0 -5 -22 17 -13 19 -16 5 -16 -9 -1 -18 4 -20 10 -7 20 -65 -18 -72 -46 -4 -14 -11 -25 -18 -25 -6 0 -49 -40 -95 -90 -95 -100 -91 -99 -163 -37 -59 51 -181 159 -240 212 -30 28 -93 84 -140 125 -47 41 -87 77 -90 80 -3 3 -59 52 -125 110 -66 58 -129 113 -140 123 -55 50 -283 217 -296 217 -7 0 -48 -19 -89 -41z m1430 -819 c13 -9 13 -11 0 -20 -22 -15 -30 -12 -30 10 0 22 8 25 30 10z"/>
                        <path d="M2091 2373 c-1 -25 -11 -29 -27 -13 -17 17 -55 -7 -99 -63 -140 -177 -212 -275 -217 -293 -4 -17 1 -24 29 -35 20 -8 32 -18 29 -26 -3 -7 3 -17 12 -23 15 -9 15 -12 -8 -30 -21 -17 -23 -21 -10 -30 21 -13 49 -12 63 3 7 6 42 50 78 97 94 121 92 120 119 63 12 -26 45 -117 72 -203 28 -85 54 -159 59 -164 5 -6 9 -22 9 -37 0 -15 10 -49 22 -76 12 -26 22 -58 23 -69 0 -12 9 -34 20 -50 13 -20 19 -49 20 -92 2 -80 26 -117 88 -136 13 -4 17 -17 17 -60 0 -74 17 -90 84 -82 28 3 56 11 61 18 9 12 72 42 150 72 30 11 370 233 479 313 33 23 64 43 68 43 21 0 2 -51 -93 -246 -22 -45 -42 -99 -46 -120 -3 -22 -16 -49 -29 -62 -13 -13 -24 -27 -24 -33 0 -5 -9 -28 -19 -52 -60 -134 -71 -175 -64 -239 9 -92 16 -106 52 -104 23 1 41 15 81 61 29 33 61 67 71 75 11 9 21 31 23 50 4 33 17 70 52 147 8 17 14 34 14 38 0 4 9 18 20 32 11 14 20 33 20 43 0 21 65 156 79 165 6 3 11 19 11 36 0 16 4 37 8 47 5 9 25 51 45 93 21 41 37 80 37 85 0 6 14 39 31 73 16 35 29 73 27 84 -4 25 -63 68 -83 61 -7 -3 -22 3 -33 14 -32 32 -77 37 -115 13 -18 -11 -42 -29 -52 -41 -10 -11 -25 -20 -32 -20 -13 0 -161 -97 -441 -287 -51 -35 -99 -63 -107 -63 -19 0 -32 27 -100 210 -86 235 -183 484 -231 594 -24 55 -41 103 -38 108 13 20 -41 47 -95 48 -44 0 -58 4 -77 25 -12 13 -24 32 -27 42 -4 14 -5 13 -6 -4z m1109 -1367 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-34 -90 c-4 -18 -15 -44 -26 -56 -26 -31 -26 -7 0 45 11 22 20 46 21 55 0 11 2 11 6 2 3 -7 2 -28 -1 -46z"/>
                        <path d="M1773 1824 c-9 -25 13 -40 26 -16 10 19 6 32 -11 32 -5 0 -11 -7 -15 -16z"/>
                        <path d="M856 1139 c-12 -15 -16 -31 -12 -50 3 -16 1 -31 -6 -35 -17 -11 -40 27 -35 58 4 33 1 34 -63 30 -35 -3 -50 -8 -50 -18 0 -8 7 -17 15 -20 21 -8 19 -21 -5 -29 -13 -4 -31 0 -47 10 -24 16 -27 16 -35 1 -5 -9 -14 -16 -19 -16 -6 0 -8 4 -5 9 9 14 -5 42 -17 34 -6 -4 -22 -7 -35 -8 -13 0 -28 -8 -33 -17 -5 -10 -17 -14 -34 -10 -31 6 -97 -41 -89 -63 4 -8 -1 -18 -10 -21 -11 -4 -14 -13 -11 -25 4 -11 2 -19 -4 -19 -6 0 -11 -8 -11 -19 0 -10 -7 -24 -15 -31 -14 -11 -14 -15 1 -37 9 -14 14 -33 11 -43 -6 -23 56 -53 99 -48 23 2 30 8 32 31 2 16 10 31 18 34 9 3 12 13 8 25 -3 10 0 26 6 34 11 12 15 12 27 -3 13 -17 14 -16 10 5 -4 19 -1 22 23 22 30 0 73 16 160 58 30 15 59 28 64 31 5 2 6 -3 3 -12 -8 -20 18 -25 144 -26 90 -1 98 1 124 25 23 21 34 25 63 19 20 -4 41 -14 47 -22 7 -9 16 -13 22 -10 13 8 53 -21 53 -39 0 -11 4 -12 19 -4 22 11 102 13 149 4 21 -4 29 -11 25 -20 -8 -21 56 -22 68 -2 5 7 22 8 45 4 22 -4 49 -7 62 -7 12 0 22 -4 22 -9 0 -6 21 -10 48 -10 26 0 67 -9 91 -20 24 -11 49 -20 57 -20 7 0 18 -8 23 -17 5 -10 37 -26 73 -37 34 -10 71 -22 80 -27 10 -5 25 -9 33 -9 9 0 26 -6 38 -14 12 -8 51 -24 87 -36 36 -12 70 -26 75 -30 14 -12 96 -40 116 -40 9 0 19 -7 23 -15 3 -8 17 -15 31 -15 14 0 37 -11 51 -25 14 -14 30 -25 37 -25 16 0 99 -31 115 -43 23 -18 -7 -27 -80 -25 -37 1 -70 -1 -74 -4 -3 -4 -16 -3 -29 2 -18 7 -31 3 -56 -16 -18 -13 -39 -22 -46 -20 -7 3 -17 -2 -22 -11 -7 -13 -12 -14 -23 -6 -9 8 -19 9 -28 3 -24 -15 -40 -11 -40 9 0 16 -6 18 -37 14 -21 -2 -59 -5 -84 -7 -25 -1 -50 -5 -55 -9 -6 -3 -27 -2 -48 3 -31 7 -41 5 -58 -12 -25 -25 -52 -17 -43 14 3 13 3 18 -2 12 -31 -40 -91 -56 -113 -29 -10 12 -15 13 -28 3 -12 -10 -16 -10 -19 0 -3 8 -32 12 -98 12 -52 0 -128 5 -170 11 -57 9 -78 9 -89 0 -12 -10 -17 -8 -26 8 -7 14 -21 21 -41 21 -27 0 -30 -3 -24 -22 3 -13 11 -34 18 -47 10 -19 8 -25 -7 -37 -15 -11 -17 -16 -7 -28 7 -8 10 -19 7 -25 -7 -10 18 -20 65 -26 16 -2 34 -7 40 -11 6 -3 50 -12 97 -20 48 -7 112 -18 142 -24 228 -43 620 -89 770 -90 149 0 333 27 442 66 69 24 137 73 163 119 22 36 25 52 21 110 -3 45 -10 76 -23 93 -25 34 -35 33 -52 -6 -21 -47 -45 -38 -51 18 -3 31 -10 45 -20 45 -8 0 -16 10 -18 23 -3 20 0 22 22 16 38 -9 32 12 -11 42 -221 151 -644 302 -1047 374 -62 11 -71 11 -81 -4 -15 -20 -41 -12 -48 15 -4 16 -14 19 -60 19 -31 0 -58 4 -61 9 -4 5 -40 12 -82 16 -65 7 -77 5 -88 -10 -12 -17 -13 -17 -19 4 -7 29 -71 30 -87 1 -15 -27 -34 -25 -48 6 -18 37 -54 29 -63 -14 -9 -43 -11 -45 -50 -34 -42 10 -53 42 -15 42 34 0 33 15 -2 29 -39 17 -107 -8 -106 -38 1 -26 -37 -29 -57 -5 -11 13 -10 17 4 25 9 6 17 14 17 19 0 15 -28 12 -32 -2 -4 -10 -10 -10 -32 0 -37 17 -49 15 -70 -9z m254 -62 c0 -1 -9 -10 -20 -20 -19 -16 -20 -16 -20 3 0 13 7 20 20 20 11 0 20 -1 20 -3z m490 -9 c0 -7 -4 -19 -9 -27 -11 -17 -25 3 -17 24 7 18 26 20 26 3z m85 -45 c-7 -17 -8 -17 -15 2 -9 24 -2 41 12 27 6 -6 7 -19 3 -29z m-845 -17 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z m-365 -136 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16 -10z m1025 -460 c0 -11 -4 -20 -10 -20 -5 0 -10 9 -10 20 0 11 5 20 10 20 6 0 10 -9 10 -20z m1074 -103 c-2 -7 -18 -18 -34 -24 -25 -9 -30 -9 -30 3 0 8 9 14 19 14 11 0 23 5 26 10 9 15 25 12 19 -3z m-120 -67 c-21 -8 -37 -3 -29 10 3 4 15 6 27 2 21 -5 21 -6 2 -12z"/>
                        <path d="M575 899 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z"/>
                        <path d="M505 777 c-4 -14 -4 -30 -1 -36 4 -5 2 -12 -4 -16 -16 -10 -11 -25 9 -25 24 0 43 -23 35 -44 -7 -19 16 -22 33 -5 21 21 42 2 45 -43 2 -30 8 -44 19 -46 22 -4 43 48 34 87 -6 26 -4 29 14 24 12 -3 28 0 36 7 13 11 18 10 31 -8 15 -21 71 -31 87 -16 15 15 -15 44 -45 44 -17 0 -39 7 -49 16 -13 12 -22 13 -37 5 -16 -8 -25 -6 -45 9 -14 11 -30 20 -35 20 -5 0 -23 7 -38 15 -16 8 -36 15 -44 15 -9 0 -21 5 -27 11 -9 9 -14 5 -18 -14z"/>
                        <path d="M325 761 c-3 -5 -1 -13 5 -16 8 -5 8 -11 0 -20 -9 -11 -6 -19 15 -37 70 -62 175 -100 175 -63 0 15 -66 65 -88 65 -7 0 -17 11 -22 24 -5 13 -23 31 -41 40 -38 19 -36 19 -44 7z"/>
                        <path d="M857 666 c-8 -19 32 -52 66 -54 21 -1 27 3 27 17 0 11 -7 27 -16 35 -19 20 -70 21 -77 2z"/>
                        <path d="M935 590 c-4 -6 -24 -18 -46 -27 -38 -15 -65 -44 -52 -57 3 -3 26 -6 49 -6 49 0 74 25 74 72 0 28 -13 37 -25 18z"/>
                        </g>
                        </svg> */}
                <div className="home_content grid">
                    <SocialLink/>
                    <div className="home_img"> </div>
                    <div className="home_data">
                      <Banner/>
                        {/* <a href='#contact' className="button hello_button button__flex"> say Hello 
                          <svg
                            className="button__icon"
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
                          </svg></a> */}

                    </div>
                    {/* {scrolling icon} */}
                    {/* <div className="home_scroll">
                      <span className="home_scroll-name">Scroll Down</span>
                      <a href="#about" className="home_scroll-button button--flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "#0c0d0d", transform: 'msFilter'}}><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
                      </a>
                    </div> */}
                </div>
            </div>
        </section>
    )

}



