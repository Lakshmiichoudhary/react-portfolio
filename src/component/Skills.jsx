import React from 'react'
import "./Skills.css"
import { SkillsData } from '../data/SkillsData'

const Skills = () => {
  return (
    <div className='skills-container'>
        <div>
            <h2 className='skills-heading'>Skills</h2>
        </div>
        <div className='skills-left'>
            {SkillsData.map((skill,id) => (
              <div key={id} className='skills'>
                  <div>{skill.icon}</div>
                  <p>{skill.name}</p>
              </div>  
            ))
            }
        </div>
    </div>
  )
}

export default Skills
