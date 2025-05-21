
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, User } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "JavaScript", 
    "HTML/CSS", "Tailwind CSS", "Express", "MongoDB",
    "PostgreSQL", "Next.js", "RESTful APIs", "Git"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-5 w-5 text-slate-600" />
                  <h3 className="text-sm font-medium uppercase tracking-wide text-slate-600">About Me</h3>
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  I'm a developer passionate about creating meaningful digital experiences
                </h2>
                <p className="text-muted-foreground mb-6">
                  With over 5 years of experience in web development, I've worked on various projects
                  ranging from small business websites to complex enterprise applications. 
                  I specialize in building responsive, accessible, and performant web applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-white">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5">
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="h-5 w-5 text-slate-600" />
                    <h3 className="text-xl font-semibold">Work Experience</h3>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Senior Frontend Developer</h4>
                        <Badge variant="secondary">2021 - Present</Badge>
                      </div>
                      <h5 className="text-muted-foreground mb-2">TechVision Inc.</h5>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Led frontend development team on enterprise SaaS platform</li>
                        <li>Implemented modern React architecture with TypeScript</li>
                        <li>Reduced page load times by 45% through optimizations</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Full Stack Developer</h4>
                        <Badge variant="secondary">2018 - 2021</Badge>
                      </div>
                      <h5 className="text-muted-foreground mb-2">WebSolutions Agency</h5>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Built responsive websites and web applications for clients</li>
                        <li>Developed RESTful APIs using Node.js and Express</li>
                        <li>Collaborated with designers to implement UI/UX designs</li>
                        <li>Maintained and improved existing client applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="h-5 w-5 text-slate-600" />
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                      <Badge variant="secondary">2014 - 2018</Badge>
                    </div>
                    <h5 className="text-muted-foreground">University of Technology</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
