
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4', 
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold">J Sai Rakshith</div>
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Projects
          </button>
          <button 
  onClick={() => scrollToSection('Internship Experience')} 
  className="text-sm font-medium hover:text-primary/80 transition-colors"
>
  Internship Experience
</button>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Contact
          </button>
        </nav>
        <Button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex"
        >
          Get in Touch
        </Button>
        <Button 
          onClick={() => scrollToSection('contact')} 
          variant="outline"
          size="sm"
          className="md:hidden"
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;
