import React from 'react'
import "./skills.scss"
import SkillsCard from './skillsCard'
import CV from "../../assets/Tai_pham_CV.pdf"
const Skills = () => {


  // async function getDefaultNormalizer(){
  //   await fetch ('www.google.com');
  // }
  let frontEndSkills= {
    title: "Frontend Development",
    skills: ["React.js", "Stencil.js", "HTML", "CSS", "Javascript", "Bootstrap", "Webpack", "TypeScript", "Redux"]
  }
  let backEndSkills= {
    title: "BackEnd development",
    skills: ["MySQL", "Node.js", "MongoBD", "CI/CD pipeline", "GraphQL"]
  }
  return (
   <section className='skills section container' id="skills">
        <h2 className='skills_title'> Skills</h2>
        <h6 className='title_description' style = {{color: "gray"}}> My technical level</h6>
        {/* <div className='download_btn_wrapper'>
          <a target="_blank" rel="noopener noreferrer" href={CV} className="button download_button"> View my CV      
            <i className="uil uil-file download_button_icon"></i>
          </a>

        </div> */}

        <div className='skills_container'>
          <SkillsCard skillsObj={frontEndSkills}/>
          <SkillsCard skillsObj={backEndSkills}/>
        </div>
        <div className='skills_cv_btn'>
        </div>

   </section>
  )
}

export default Skills
