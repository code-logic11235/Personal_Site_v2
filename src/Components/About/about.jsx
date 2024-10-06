
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./about.css"
import Carousel from "./carousel";

import img from '../../assets/about_headshot.png'
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
                            <div className="about_img"></div>
                            <span className="description_sentence_1"> I am a software engineer in Austin, Texas with an abundance of frontend development experience with frameworks like React and Angular. I have been at Google since June 2022, mainly doing UI development with Angular in the type-safe Dart ecosystem. Outside of work, I love experimenting with the latest and greatest TypeScript or Dart packages and most recently have been absolutely delighted by the developer experience of NextJS and SvelteKit.</span>
                        </div>
                        <span className="description_sentence_2">I've enjoyed great opportunities over the past many years to hone the skills that serve me well in software engineering roles. More than anything, I have repeatedly found that building applications (like many things!) is a game of breaking down big challenges into small, manageable chunks, then solving each chunk with a few key tools. The challenges constantly change. The tools regularly get replaced with newer, shinier ones. But, the process of approaching tasks, splitting them, and completing them remains fairly constant.</span>
                        <span className="description_sentence_3">Outside of tech, I've had some wild times like leading the worship band for Baptist Collegiate Ministry during my senior year, running lights for the Plain White T's, hosting a radio show, and working on audio productions anywhere from mixing in honky-tonk bars to recording the Greenville Symphony Orchestra. I've been to the US Grand Prix, which was a wonderful time. I love music, any kind of four-wheeled motorsports, rich coffees, and working on cars. One thing I find particularly relaxing is nature photography, where it's delightfully easy to forget about bits, bytes, and pixels; enjoy; and try to capture the beauty of a moment:</span>
                    </div>
                    
                </div>

                <div className="about_carousel_wrapper">
                    <h5> Views from my Iphone</h5>
                    <div className="carousel_wrapper">
                        <Carousel/>
                    </div>
    
                 

                </div>
            </div>
           
        </section>
    )

}
