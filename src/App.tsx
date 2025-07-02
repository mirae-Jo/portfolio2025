import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";

function App() {
  return (
    <div className='bg-white font-pretendard text-gray-800'>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;
