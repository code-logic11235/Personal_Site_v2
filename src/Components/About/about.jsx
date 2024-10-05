
import React, { useState } from "react";
import "./about.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="..." alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                </div>

            </div>
           
        </section>
    )

}



