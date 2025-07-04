interface Project {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
}

const Card = ({ project }: { project: Project }) => {
  return (
    <div className='card border border-[#3d8cb0] rounded-lg p-1rem'>
      <h3 className='text-xl font-bold leading-7'>{project.name}</h3>
      <p className='mt-2'>{project.description}</p>
      <div className='stack mt-4'>
        {project.stack.map((tech) => (
          <span
            key={tech}
            className='stack-item inline-block bg-[#3d8cb0] rounded-full px-3 py-1 text-sm font-semibold text-white/80 mr-2 mb-2'>
            {tech}
          </span>
        ))}
      </div>
      <div className='links mt-4'>
        {project.github && (
          <a
            href={project.github}
            target='_blank'
            rel='noreferrer'
            className='link mr-4 text-[#3d8cb0] hover:underline'>
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target='_blank'
            rel='noreferrer'
            className='link link-separator text-[#3d8cb0] hover:underline'>
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
