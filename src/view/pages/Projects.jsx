import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projectData from '../../utils/projectData'

const Projects = () => {
  return (
    <div className='bg-primary min-w-screen min-h-screen text-fourth p-5 flex flex-col items-center'>
      {projectData.map((project, index) => (
        <ProjectCard key={index} data={project}/>
      ))}
    </div>
  )
}

export default Projects
