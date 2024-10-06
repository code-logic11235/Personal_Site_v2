
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
                    </div>
                    
                </div>

                <div className="about_carousel_wrapper">
                    <h3> Views from my Iphone</h3>
                    <Carousel/>
    
                    {/* <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: "800px" }}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="https://i.ibb.co/QCtcfNJ/Full-Size-Render-preview.jpg" className="d-block w-100" alt="..." style={{ height: "450px", objectFit: "cover" }}/>
                            </div>
                            <div className="carousel-item">
                            <img src="https://i.ibb.co/YRLvZFn/IMG-1244.jpg" className="d-block w-100" alt="..." style={{ height: "450px", objectFit: "cover" }}/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div> */}

                </div>
            </div>
           
        </section>
    )

}
{/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div className="carousel-inner">
    <div className="carousel-item active">
    <img className="d-block w-100" src="https://i.ibb.co/BN6cJ7h/IMG-2-Original.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="https://i.ibb.co/QCtcfNJ/Full-Size-Render-preview.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src="https://i.ibb.co/YRLvZFn/IMG-1244.jpg" alt="Third slide"/>
    </div>
</div>
<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
</a>
</div>
</div>
src="https://i.ibb.co/BN6cJ7h/IMG-2-Original.jpg"
src="https://i.ibb.co/QCtcfNJ/Full-Size-Render-preview.jpg"
src="https://i.ibb.co/YRLvZFn/IMG-1244.jpg"

 */}
