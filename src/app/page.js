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
    className="flex min-h-screen flex-col bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#6366f1] via-[#4f46e5] to-[#4338ca]"
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
