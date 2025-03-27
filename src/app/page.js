import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main 
    className="flex min-h-screen flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black"
    >
      <Navbar />
      <div >
        <HeroSection />
         </div>
         {/* <div className=" mt-24 mx-auto px-12 py-4"> */}
         <AboutSection />
         {/* </div> */}
        {/* <AchievementsSection /> */}
        
        <ProjectsSection />
        <EmailSection />
      {/* </div> */}
      {/* <Footer /> */}
    </main>
  );
}
