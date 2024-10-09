
import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./about.css"
import Carousel from "./carousel";

export default function About() {

    return (
        <section className="about section container" id="about">
            <div className="about_section_container">
                <div className="about_title">
                    <h1 className="section_title">About Me</h1>
                    {/* <span className="section_subtitle">a quick introduction</span> */}
                </div>

                <div className="description_container">
                    <div className="about_container">
                        <div className="about_img_description_1_wrapper">
                            {/* <div className="about_img"></div> */}
                            <span className="description_sentence_1"> 
                            I’m a software engineer based in Austin, Texas, with extensive experience in frontend development using React, HTML, CSS, and JavaScript. One of my most rewarding projects was redesigning GM’s eCommerce site, where I applied my UI expertise and learned new tools like TypeScript and Storybook's <a className = "about_underline_word" href="https://bradfrost.com/blog/post/atomic-design-and-storybook/">atomic design</a>. Outside of work, I love exploring the latest JavaScript frameworks and packages, always on the lookout for new ways to improve the development experience. <br></br><br></br>

Over the years, I've had amazing opportunities to refine my skills. What I've found is that building applications is much like solving puzzles—breaking down big, complex problems into smaller, manageable pieces and solving each one. While the challenges and tools evolve, this approach has remained constant for me. Whether it's experimenting with new tech or tackling an intricate UI problem, I enjoy the continuous growth that comes with every new project.
                            </span>
                        </div>
                        {/* <span className="description_sentence_2">
I've had some great opportunities to refine the skills that help me thrive in software development. What I've learned is that building applications is all about breaking complex problems into smaller, manageable pieces.. The challenges and tools might constantly change, but the process stays consistent.</span> */}
                        <span className="description_sentence_3">Outside of tech, I’ve had some wild times running the Austin Marathon, hiking the mountains peaks of Colorado, and learning to wakeboard on Lake Travis. I’ve also embraced calmer moments, like fishing the streams of Texas and growing (trying to) the largest tomato in my garden. Between life’s fast-paced and quieter moments, I always strive to find balance. It’s in nature that I can truly let go of the bits and bytes, allowing myself to appreciate and capture the beauty around me.</span>
                    </div>
                    
                </div>

                <div className="about_carousel_wrapper">
                    <h5> Views from my camera</h5>
                    <div className="carousel_wrapper">
                        <Carousel/>
                    </div>
    
                 

                </div>
            </div>
           
        </section>
    )

}
