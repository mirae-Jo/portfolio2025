interface Project {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
}

const Card = ({ project }: { project: Project }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-bold">{project.name}</h3>
      <p className="mt-2">{project.description}</p>
      <div className="mt-4">
        {project.stack.map((tech) => (
          <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
          GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="ml-4 text-blue-500 hover:underline">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
