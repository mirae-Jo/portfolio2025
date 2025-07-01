import { personalInfo } from '../../data/portfolioData';

const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col justify-center h-screen p-8">
      <h1 className="text-5xl font-bold">{personalInfo.name}</h1>
      <p className="mt-4 text-xl">A Frontend Developer</p>
    </section>
  );
};

export default HeroSection;
