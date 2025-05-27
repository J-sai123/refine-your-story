
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, User } from 'lucide-react';

const AboutSection: React.FC = () => {
 /* const skills = [
    "React", "TypeScript", "Node.js", "JavaScript", 
    "HTML/CSS", "Tailwind CSS", "Express", "MongoDB",
   "Next.js", "Git"
  ];
  */

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
                 Aspiring Software Engineer with a strong foundation in object-oriented programming, data structures, and full-stack development.
                  Experienced in building web applications using React and Node.js and implementing deep learning models using Python and TensorFlow.
                   Passionate about solving real-world problems through clean, efficient code and continuously learning modern technologies.
                    Currently focused on mastering Java backend development and building scalable, secure software solutions..
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
                    <Code className="h-5 w-5 text-slate-600" />
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                        <Badge variant="secondary">2023 - 2026</Badge>
                      </div>
                      <h5 className="text-muted-foreground">Vardhaman College of Engineering</h5>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Diploma</h4>
                        <Badge variant="secondary">2020 - 2023</Badge>
                      </div>
                      <h5 className="text-muted-foreground">Teegala Ram Reddy College of Technology</h5>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">SSC</h4>
                        <Badge variant="secondary">2019 - 2020</Badge>
                      </div>
                      <h5 className="text-muted-foreground">Good Faith High School</h5>
                    </div>
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
