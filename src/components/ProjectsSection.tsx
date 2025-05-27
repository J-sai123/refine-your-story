
import React from 'react';
import ProjectCard from './ProjectCard';
import { GalleryHorizontal } from 'lucide-react';

import { Badge } from "@/components/ui/badge"



interface Skill {
  name: string;
  level: "Advanced" | "Intermediate" | "Beginner";
  category: string;
}

const ProjectSection = () => {
  const skills = [
    { name: "React", level: "Beginner", category: "Frontend" },
    { name: "TypeScript", level: "Beginner", category: "Languages" },
    { name: "Node.js", level: "Intermediate", category: "Backend" },
    { name: "Tailwind CSS", level: "Beginner", category: "Frontend" },
    { name: "Express", level: "Intermediate", category: "Backend" },
    { name: "MongoDB", level: "Intermediate", category: "Database" },
    { name: "Docker", level: "Beginner", category: "DevOps" },
    
  ]
  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill: Skill) => (
            <div 
              key={skill.name} 
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md"
            >
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge variant="outline" className="bg-white">
                    {skill.category}
                  </Badge>
                  <Badge 
                    variant={
                      skill.level === "Advanced" ? "default" : 
                      skill.level === "Intermediate" ? "secondary" : "outline"
                    }
                  >
                    {skill.level}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Zerodha clone",
      description: "Developed a Zerodha clone using React and Node.js to simulate stock trading functionalities with real-time data and user authentication.",
      imageUrl: "https://algodelta.com/blog/wp-content/uploads/2025/01/1683270116246.png",
      tags: ["React",  "Tailwind CSS", "Node.js","Mongodb"],
    },
    {
      title: "CIFAR-10 Image classification using ResNet50",
      description: "Built an accurate image classification model on the CIFAR-10 dataset using ResNet50, leveraging deep learning for robust object recognition.",
      imageUrl: "https://i.ytimg.com/vi/B-1qwKvJI64/maxresdefault.jpg",
      tags: ["Python", "Keras", "TensorFlow ", "NumPy & Pandas"],
    },
   /*{
      title: "Health & Fitness Tracker",
      description: "Mobile-responsive application for tracking workouts, nutrition, and progress with customizable goals.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["React Native", "TypeScript", "Node.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#"
    },
    
    {
      title: "Real Estate Marketplace",
      description: "Property listing platform with advanced search, filtering, and user authentication for buyers and sellers.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#"
    }
      */
  ];
  

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <GalleryHorizontal className="h-5 w-5 text-slate-600" />
            <h3 className="text-sm font-medium uppercase tracking-wide text-slate-600">Projects</h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects showcasing my expertise in web development and design.
            Each project represents unique challenges and solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
             /* demoLink={project.demoLink}
              codeLink={project.codeLink}
              */
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
