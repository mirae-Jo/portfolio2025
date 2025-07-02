import { projects } from "../../data/portfolioData";
import Card from "../ui/Card.tsx";

const ProjectsSection = () => {
  return (
    <section id='projects' className='p-2rem'>
      <h2 className='text-3xl font-bold leading-9'>{projects.title}</h2>
      <div className='project-list mt-8 grid grid-cols-1 gap-8 md:grid-cols-2'>
        {projects.list.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
