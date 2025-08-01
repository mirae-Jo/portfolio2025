import { projects } from "../../data/portfolioData";
import Card from "../ui/Card.tsx";

const ProjectsSection = () => {
  return (
    <section
      id='projects'
      className='min-h-screen snap-start bg-[#a1cee8]'>
      <div className='p-8 pt-20'>
        <h2 className='text-white text-[2.5rem] font-light mb-16 text-shadow-xl text-shadow-sky-800/60'>
          {projects.title}
        </h2>
        <div className='project-list grid grid-cols-1 gap-8 md:grid-cols-2'>
          {projects.list.map((project) => (
            <Card key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
