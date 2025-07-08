import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return (
    <section
      id='hero'
      ref={ref}
      className='text-white/80 relative flex flex-col justify-center h-screen p-12 snap-start bg-[url("https://i.pinimg.com/736x/a5/20/4c/a5204cb54edafeaed19d93acfce7cc74.jpg")] bg-no-repeat bg-center bg-cover'>
      <h1
        className={`font-thin transition-all duration-1000 ${
          isInViewport
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        } text-[4.5rem] leading-12 text-shadow-xl text-shadow-sky-950`}>
        미래
      </h1>
      <p
        className={`font-thin transition-all duration-1000 delay-300 ${
          isInViewport
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        } mt-4 text-[3.8rem] leading-none text-shadow-xl text-shadow-sky-950`}>
        A Frontend Developer
      </p>
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2'>
        <svg
          className='w-12 h-12 text-white animate-bounce drop-shadow-xl drop-shadow-sky-800'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path d='M19 13l-7 7-7-7m14-8l-7 7-7-7'></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
