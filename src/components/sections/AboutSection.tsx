import { aboutMe, education } from "../../data/portfolioData";

const AboutSection = () => {
  return (
    <section
      id='about'
      className='min-h-screen p-8 pt-20 snap-start bg-[#82bbda]'>
      <h2 className='text-white text-4xl font-bold mb-16 text-shadow-xl text-shadow-sky-800'>
        {aboutMe.title}
      </h2>

      <div className=' mb-16'>
        <h3 className='text-2xl font-semibold mb-3 text-gray-800'>
          {aboutMe.subtitle}
        </h3>
        <div className='border-l-2 border-white/80 pl-6 transition-transform duration-300 ease-in-out hover:scale-102'>
          <p className='text-lg text-gray-700 leading-relaxed'>
            {aboutMe.description}
          </p>
        </div>
      </div>

      <div className=''>
        <h3 className='text-2xl font-semibold mb-3 text-gray-800'>
          {education.title}
        </h3>
        <div className='border-l-2 border-white/80 pl-6 transition-transform duration-300 ease-in-out hover:scale-102'>
          <h4 className='text-xl font-bold'>{education.school}</h4>
          <p className='text-gray-600'>{education.major}</p>
          <p className='text-gray-500 mt-1'>{education.period}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
