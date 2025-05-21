
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  demoLink,
  codeLink
}) => {
  return (
    <div className="project-card bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          {demoLink && (
            <Button asChild variant="default" size="sm">
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Live Demo
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          )}
          
          {codeLink && (
            <Button asChild variant="outline" size="sm">
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
