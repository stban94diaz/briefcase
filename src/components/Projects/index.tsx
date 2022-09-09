import projectsData from '../../services/mock-data'
import Project from '../Project'

function Projects() {
  return (
    <div>
      <div className='flex justify-center mb-10'>
        <Project project={projectsData[0]} className='md:w-full lg:w-1/2' />
      </div>
      <div className='grid grid-cols-2 grid-flow-row gap-4'>
        {projectsData.slice(1).map((p, i) => (
          <Project
            key={i} project={p} />
        ))}
      </div>
    </div>
  )
}

export default Projects
