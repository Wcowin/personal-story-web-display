
import { useEffect } from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll function
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute("href");
      
      if (href?.startsWith("#")) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth"
          });
        }
      }
    };

    // Add event listeners to all anchor tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", handleAnchorClick as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
