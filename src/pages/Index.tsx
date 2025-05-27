
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import Internship from '@/components/Internship';


const Index: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <HeroSection />
      
        <AboutSection />  
        <Skills/>
        <ProjectsSection />
        <Internship />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
