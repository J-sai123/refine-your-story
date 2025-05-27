import React from 'react';
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: "Advanced" | "Intermediate" | "Beginner";
  category: string;
}

const ProjectSection = () => {
  const skills = [
    { name: "C/C++", level: "Intermediate", category: "Languages" },
    { name: "Python", level: "Advanced", category: "Languages" },
    { name: "JavaScript", level: "Intermediate", category: "Languages" },
    { name: "HTML", level: "Advanced", category: "Frontend" },
    { name: "CSS", level: "Advanced", category: "Frontend" },
    { name: "React.js", level: "Intermediate", category: "Frontend" },
    { name: "Node.js", level: "Intermediate", category: "Backend" },
    { name: "MongoDB", level: "Intermediate", category: "Database" },
    { name: "MySQL", level: "Intermediate", category: "Database" },
    { name: "Git", level: "Intermediate", category: "Tools" },
    { name: "GitHub", level: "Intermediate", category: "Tools" },
    { name: "VS Code", level: "Advanced", category: "Tools" },
    { name: "Data Structures & Algorithms", level: "Intermediate", category: "Computer Science" },
    { name: "Operating Systems", level: "Intermediate", category: "Computer Science" },
    { name: "Object Oriented Programming", level: "Advanced", category: "Computer Science" },
    { name: "Database Management System", level: "Intermediate", category: "Computer Science" },
    { name: "Software Engineering", level: "Intermediate", category: "Computer Science" },
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

export default ProjectSection;