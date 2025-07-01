import { projects } from '../../data/portfolioData';
import Card from '../ui/Card.tsx';

const ProjectsSection = () => {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-3xl font-bold">{projects.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.list.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
