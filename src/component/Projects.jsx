import React from 'react';
import "./Projects.css";
import { projectsData } from '../data/ProjectData';

const Projects = () => {
  return (
    <div className='project-container' id='projects'>
      <h2 className='project-heading'>Projects</h2>
      <div className='project-grid'>
        {projectsData.map((project, index) => (
          <div key={index} className='project-card' data-aos="flip-down">
            <img src={project.image} alt={project.name} className='project-image' />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            <a href={project.github} target='_blank' rel='noopener noreferrer' className='project-link'>
              View Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
