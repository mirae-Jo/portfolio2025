import { personalInfo } from "../../data/portfolioData";

const HeroSection = () => {
  return (
    <section id='hero' className='flex flex-col justify-center h-screen p-2rem'>
      <h1 className='text-5xl font-bold leading-none'>{personalInfo.name}</h1>
      <p className='mt-4 text-xl leading-7'>A Frontend Developer</p>
    </section>
  );
};

export default HeroSection;
