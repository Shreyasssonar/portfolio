import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectName="Personal Finance Tracker" />
        <ProjectBox projectName="Sudoku Game" />
        <ProjectBox projectName="YouTube Clone" />
        <ProjectBox projectName="Airbnb-clone" />
      </div>
    </div>
  )
}

export default Projects;
