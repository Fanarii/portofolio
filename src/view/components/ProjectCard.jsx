import React from 'react'
import projectData from '../../utils/projectData'

const ProjectCard = () => {
  return (
        <>
            {projectData.map((data, index) => (
                <div key={index} to={`/projects/${data.id}`} className='m-2 border-2 border-secondary rounded-l rounded-md items-center flex flex-col'>
                    <img className='h-[150px] w-[200px] object-center object-cover' src={data.img} alt={`Project Preview ${data.id}`} />
                    <h2 className='text-lg text-fourth'>{data.description}</h2>
                </div>
            ))}
        </>
  )
}

export default ProjectCard
