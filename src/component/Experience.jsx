import React from 'react'
import "./Exprience.css"
import { experienceData } from '../data/ExperienceData'

const Experience = () => {
  return (
    <div className='exp-container' id='experience'>
      <div>
            <h2 className='exp-heading'>Exprience</h2>
        </div>
        <div className='exp-left'>
             {experienceData.map((item,id) => (
              <div key={id} className='item' data-aos="flip-up">
                <p>{item.title}</p>
                <span>{item?.date}</span>
                <ul className="list">
                  {item.Dec.map((point, index) => (
                  <li key={index} className="point">
                    {point.name}
                  </li>
                ))}
              </ul>
              </div>
             ))}
        </div>
    </div>
  )
}

export default Experience
