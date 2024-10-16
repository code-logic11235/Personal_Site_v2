import React from 'react'
import "./resume.scss"


const Resume = () => {

let obj = [
    {"logo" : "https://upload.wikimedia.org/wikipedia/commons/b/b0/General_Motors_%282021%29.svg",
    'description': 'Committed code to customer and business-facing React and NodeJS ecommerce applications with emphasis in frontend development. Built a strong understanding of JavaScript and its developer ecosystem.',
    'bulletPoint': 
        [
            'Devised and created a developer utility to view and manage frontend environment variables in development mode to expedite their troubleshooting.', 
            'Strengthened application security through several fixes related to Webpack bundling.',
            'Implemented and iterated on many components throughout GM’s parts and accessories websites, including vehicle pickers, product pages, checkout forms, and more.',
            'Contributed to a rewrite of an internal application used to manage orders, catalogs, and inventory by dealers and distribution centers, speeding up their experiences through migration to React.',
            'Added code formatting as a pre-commit action and regularly pushed for higher utilization of unit testing across development pipelines and a team of 20-30 developers across projects.'
        ],"company" : "General Motors",
        'title': "Software Engineer",
        'label': 'Professional Experience',
        'duration': 'January 2022 - September 2024'
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
    <div className='resume_intro_section'>
      <h3 className='resume_title'> This is where i've honed my skills</h3>
      <p className='resume_intro_paragraph'>I have a total five years of experience with three years of enterprise level experience, well versed in frontend technologies like UI component frameworks and features of the DOM, accustomed to JavaScript and TypeScript techniques, and familiar with deployment utilities ranging from Webpack to Docker. Above all (at least professionally) I value innovation and continuous learning.</p>
    </div>
    {/* <div className="professtional_experience_section">
        <h4 className="experience_titttle"> Professional Experience</h4>
        
    </div> */}
    {obj.map((obj, key) =>{
        return (
        <div className={`experience_section ${key}`}>
            <h3 className="experience_title"> {obj.label}</h3> 
            <div className={`experience_wrapper ${key}`}>
                <div className={`experience_title_wrapper ${key}`}>
                    {obj.logo ? <img src = {obj.logo} className={`experience_logo ${key}`}></img>: ''}
                    <div className='experience_title_right'>
                        <div className={`experience_title ${key}`}>{obj.title}</div>
                        <div className={`experience_company ${key}`}>{obj.company}</div>
                        <div className={`experience_duration ${key}`}>{obj.duration}</div>
                    </div>

                </div>
                <div className={`experience_description_wrapper ${key}`} >
                    <p className="experience_description"> {obj.description}</p>
                       { obj.bulletPoint.length > 0 ? <ul className={`experience_bulletpoints ${key}`}> 
                            {obj.bulletPoint.map((bulletpoint, key)=>{
                                return (
                                    // < className={`experience_bulletpoints ${key}`}> 
                                    <li>{bulletpoint}</li>
                                    
                                )
                            })}
                        </ul> : ''}
                </div>
            </div>

        </div>

        )
    })}
    
   </section>
  )
}

export default Resume
