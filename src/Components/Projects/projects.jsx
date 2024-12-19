import React from 'react'
import "./projects.css"


const Projects = () => {

  return (
    <section className="under-construction-container section projects" id="projects">
      {/* <div className="construction-content">
        <div className='construction-content-wrapper'>
        <h1>Under Construction</h1>
        <h4 className="contruction_content_description"> Apps being Deployed  </h4>

        </div>
      </div> */}
      <div className = "project paragraph-container">
        <p>You can check out my previous work at General Motors by visiting one of the GM brands while i work to deploy some of my latest projects (updated 12/02/24):</p>
        {/* <p>Where I’ve implemented and iterated on many components, including the homepage, vehicle picker, search page, products page, and more.</p> */}
          <ul className = "gmLinks">
            <li><a href="https://accessories.gmc.com/" target="_blank" rel="noopener noreferrer">GMC Accessories</a></li>
            <li><a href="https://accessories.chevrolet.com/" target="_blank" rel="noopener noreferrer">Chevrolet Accessories</a></li>
            <li><a href="https://accessories.cadillac.com/" target="_blank" rel="noopener noreferrer">Cadillac Accessories</a></li>
            <li><a href="https://accessories.buick.com/" target="_blank" rel="noopener noreferrer">Buick Accessories</a></li>
          </ul>

      </div>
    </section>
  );
}
export default Projects;


