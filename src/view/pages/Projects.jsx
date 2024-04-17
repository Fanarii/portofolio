import React from 'react'
import projectData from '../../utils/projectData'

const Projects = () => {
  return (
    <div className='bg-primary min-w-screen min-h-screen text-fourth p-5 flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-5'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projectData.map(project => (
          <div
            key={project.id}
            className='bg-white rounded-lg shadow-md p-5 flex flex-col w-full md:w-auto border border-fourth'
          >
            <img
              src={project.img}
              alt={project.name}
              className='w-full h-48 object-cover mb-4 rounded-lg'
            />
            <h2 className='text-xl font-bold mb-2'>{project.name}</h2>
            <p className='text-sm text-gray-500 mb-4'>{project.description}</p>
            <div className='flex justify-between mb-4'>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline'
              >
                View Project
              </a>
              <a
                href={project.repository}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline'
              >
                GitHub Repository
              </a>
            </div>
            <div className='flex flex-wrap'>
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  className='bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs mr-2 mb-2'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
