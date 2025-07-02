import { aboutMe } from "../../data/portfolioData";

const AboutSection = () => {
  return (
    <section id='about' className='p-2rem'>
      <h2 className='text-3xl font-bold leading-9'>{aboutMe.title}</h2>
      <p className='mt-4'>{aboutMe.description}</p>
    </section>
  );
};

export default AboutSection;
