import { aboutMe, educationAndTraining } from "../../data/portfolioData";

const AboutSection = () => {
  return (
    <section
      id='about'
      className='min-h-screen snap-start bg-[#82bbda]'>
      <div className='p-8 pt-20'>
        <h2 className='text-white text-[2.5rem] font-light mb-16 text-shadow-xl text-shadow-sky-800'>
          {aboutMe.title}
        </h2>

        <div className='mb-14'>
          <h3 className='text-2xl font-semibold mb-4 text-gray-800'>
            {aboutMe.subtitle}
          </h3>
          <div className='border-l-2 border-white/80 pl-6 transition-transform duration-300 ease-in-out hover:scale-102'>
            <p className='text-lg text-gray-700 leading-relaxed'>
              {aboutMe.description}
            </p>
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-semibold mb-4 text-gray-800'>
            {educationAndTraining.title}
          </h3>
          {educationAndTraining.list.map((item, index) => (
            <div
              key={index}
              className='mb-6 border-l-2 border-white/80 pl-6 transition-transform duration-300 ease-in-out hover:scale-102'>
              <h4 className='text-xl font-bold'>{item.name}</h4>
              {item.type === "education" && (
                <p className='text-gray-700 mt-2'>{item.major}</p>
              )}
              {item.description && (
                <p className='text-gray-700 mt-2'>{item.description}</p>
              )}
              <p className='text-gray-500 mt-1'>{item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
