import React from 'react'
import "./skills.scss"
const SkillsCard = ({skillsObj}) => {

  return (
    <div className='skills_card_container'>
        <h6 className='skills_card_title'> {skillsObj.title}</h6>
        <div className='skills_body'>
            {skillsObj.skills.map((skill, key)=>{
                return (
                    <div className='skills_text flex' key = {key}>
                        <i className ="uil uil-briefcase-alt qualification_icon" >{skill}.</i>      
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default SkillsCard
