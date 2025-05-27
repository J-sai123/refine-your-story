import React from 'react';

interface Internship {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const InternshipSection = () => {
  const internships: Internship[] = [
    {
      company: "NIELIT Virtual Academys.",
      position: "Online Internship Program in Devops",
      duration: "may 2024 - july 2024",
      location: "Remote",
      description: [
        "Learned CI/CD pipelines, containerization with Docker & Kubernetese.",
        "Learned infrastructure automation using Terraform and Ansib",
      ],
      technologies: ["Docker"]
    },
   /* {
      company: "Digital Innovations Ltd.",
      position: "Frontend Developer Intern",
      duration: "January 2024 - March 2024",
      location: "New York, NY",
      description: [
        "Built user interfaces using HTML, CSS, and JavaScript",
        "Optimized website performance and improved user experience",
        "Worked closely with design team to implement mockups",
        "Assisted in maintaining and updating existing web applications"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Git"]
    }*/
  ];

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Internship Experience</h2>
      
      <div className="space-y-6">
        {internships.map((internship, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 shadow border">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{internship.position}</h3>
                <h4 className="text-lg font-medium text-blue-600 mb-2">{internship.company}</h4>
              </div>
              <div className="md:text-right">
                <p className="text-gray-700 font-medium">{internship.duration}</p>
                <p className="text-gray-600">{internship.location}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h5 className="font-bold text-gray-800 mb-2">Key Responsibilities:</h5>
              <ul className="space-y-2">
                {internship.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-gray-700 flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-gray-800 mb-2">Technologies Used:</h5>
              <div className="flex flex-wrap gap-2">
                {internship.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* If no internships */}
      {internships.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">Currently seeking internship opportunities</p>
        </div>
      )}
    </section>
  );
};

export default InternshipSection;