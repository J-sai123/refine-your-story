
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-20 pb-1 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
            I'm Alex Morgan.<br />
            <span className="text-3xl md:text-4xl lg:text-5xl opacity-85">
              Full-Stack Developer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fadeIn delay-100">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating intuitive user interfaces with clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn delay-200">
            <Button onClick={scrollToContact} size="lg" className="group">
              Get in Touch
              <ArrowRight className="ml-1 h-1 w-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
