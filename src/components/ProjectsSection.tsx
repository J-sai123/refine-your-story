
import React from 'react';
import ProjectCard from './ProjectCard';
import { GalleryHorizontal } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive admin dashboard for online store owners with analytics, inventory management, and order processing.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management platform with real-time updates, task assignments, and progress tracking.",
      imageUrl: "https://images.unsplash.com/photo-1481487196290-c152efe083f5",
      tags: ["React", "Firebase", "Material UI", "Redux"],
      demoLink: "#",
      codeLink: "#"
    },
    {
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
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
