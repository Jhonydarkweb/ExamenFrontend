import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import AboutLab from "@/components/landing/AboutLab";
import ResearchAreas from "@/components/landing/ResearchAreas";
import Projects from "@/components/landing/Projects";
import Benefits from "@/components/landing/Benefits";
import Alerts from "@/components/landing/Alerts";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const scroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    const timeout = window.setTimeout(scroll, 50);
    return () => window.clearTimeout(timeout);
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <div id="about">
          <AboutLab />
        </div>
        <ResearchAreas />
        <Projects />
        <Benefits />
        <Alerts />
        <FAQ />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
