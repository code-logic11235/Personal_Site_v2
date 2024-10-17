import React from 'react'
import "./resume.scss"
import CV from "../../assets/Tai_pham_CV.pdf"


const Resume = () => {

let obj = [
    {"logo" : "https://upload.wikimedia.org/wikipedia/commons/b/b0/General_Motors_%282021%29.svg",
    'description': 'Contributed to both customer and business-facing e-commerce applications using React and Node.js, with a primary focus on frontend development. Developed a solid understanding of JavaScript and its broader developer ecosystem',
    'bulletPoint': 
        [
            'Led the integration of two separate web applications(Parts/Accessories site) into a single codebase.',
            'Implemented and iterated on many components throughout GM’s parts and accessories websites, including vehicle pickers, product pages, Search Results Page, and more.',
            'Integrated RESTful APIs and created API caching to reduce load times on initial site render.',
            `Pushed for more code coverage by implimenting more unit test and automation testing using tools like Jest and React Testing Library across teams of 20-30 people.`, 
            'Strengthened application security through several fixes using UI security scan tools like BlackDuck and Fortify.',

        ],"company" : "General Motors",
        'title': "Software Engineer",
        'label': 'Professional Experience',
        
    }, 
    {
        "logo" : "https://upload.wikimedia.org/wikipedia/commons/c/c3/Colorado_Buffaloes_wordmark.svg",
        "company" : "University of Colorado Boulder",
        'title': "Bachelor of Science in Computer Science",
        'bulletPoint': [],
        'label': 'Education'
    }, {
        "logo" : "https://avatars.githubusercontent.com/u/2824164?s=280&v=4",
        "company" : "Hack Reactor by Galvanize",
        'title': "Fullstack software engineering bootcamp",
        'bulletPoint': []
    }]

  return (
   <section className='resume section container' id="resume">
    <div className='resume_section_wrapper'>

        <div className='resume_intro_section'>
        <h3 className='resume_title'> Where I've honed my skills</h3>
        <p className='resume_intro_paragraph'>I bring five years of experience, including three years working at the enterprise level. I'm skilled in frontend technologies, especially UI component frameworks and the DOM. I’m skilled with JavaScript and TypeScript, and familiar with deployment tools like Webpack and Docker. What drives me most professionally is a passion for creativity and a commitment to continuous learning.</p>

            <div className='download_btn_wrapper'>
          <a target="_blank" rel="noopener noreferrer" href={CV} className="button download_button"> View my CV      
            <i className="uil uil-file download_button_icon"></i>
          </a>

        </div>
        </div>

        {obj.map((obj, key) =>{
            return (
            <div className={`experience_section ${key}`} key={key}>
                <h3 className="experience_title"> {obj.label}</h3> 
                <div className={`experience_wrapper ${key}`}>
                    <div className={`experience_title_wrapper ${key}`}>
                        {obj.logo ? <img src = {obj.logo} className={`experience_logo ${key}`}></img>: ''}
                        <div className='experience_title_right'>
                            <div className={`experience_title ${key}`}>{obj.title}</div>
                            <div className={`experience_company ${key}`}>{obj.company}</div>
                            
                        </div>

                    </div>
                    <div className={`experience_description_wrapper ${key}`} >
                        <p className="experience_description"> {obj.description}</p>
                        { obj.bulletPoint.length > 0 ? <ul className={`experience_bulletpoints ${key}`}> 
                                {obj.bulletPoint.map((bulletpoint, key)=>{
                                    return (
                                        // < className={`experience_bulletpoints ${key}`}> 
                                        <li className = "bulletpoint_list" key = {key}>{bulletpoint}</li>
                                        
                                    )
                                })}
                            </ul> : ''}
                    </div>
                </div>

            </div>

            )
        })}
    </div>
    
   </section>
  )
}

export default Resume
