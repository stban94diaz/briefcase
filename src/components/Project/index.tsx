import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

function Project({ project, className }: {
  project: {
    name: string;
    object: string;
    description: string;
    deploy?: string;
    repo: string;
  };
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <a
        className='absolute top-3 left-0 bg-gray-200 hover:bg-gray-300 p-1 rounded-full'
        href={project.repo}
        target='_blank' rel="noreferrer">
        <FaGithub size={20} />
      </a>
      <a
        className='absolute top-3 right-0 bg-gray-200 hover:bg-gray-300 p-1 rounded-full'
        href={project.deploy}
        target='_blank' rel="noreferrer">
        <FaExternalLinkAlt size={20} />
      </a>
      <h1 className='text-4xl mx-10 text-center'>
        {project.name}
      </h1>
      <iframe
        className='w-full h-52'
        src={project.deploy || project.repo} />
      <h1 className='text-2xl'>{project.object}</h1>
      <i>{project.description}</i>
    </div>
  )
}

export default Project
