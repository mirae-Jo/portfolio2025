import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import MusicPlayer from "./components/ui/MusicPlayer";

function App() {
  return (
    <div className='bg-white font-pretendard text-gray-800 h-screen snap-y snap-mandatory overflow-scroll'>
      <MusicPlayer />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default App;
