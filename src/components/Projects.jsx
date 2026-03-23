import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, idx }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card flex flex-col rounded-2xl overflow-hidden border border-border-color hover:border-accent-color transition-all shadow-sm h-full"
    >
      <div className="relative h-48 overflow-hidden bg-surface-color">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-color/30 to-transparent"></div>
        <div className="absolute top-4 right-4 flex gap-2">
            <span className="bg-accent-color/90 px-3 py-1 rounded-full text-[9px] font-bold text-white uppercase tracking-widest leading-none">Featured</span>
            <span className="bg-surface-color/80 px-3 py-1 rounded-full text-[9px] font-bold text-text-primary uppercase tracking-widest leading-none opacity-80">{project.date}</span>
        </div>
      </div>

      <div className="card-padding flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-text-primary mb-2 group-hover:text-accent-color transition-colors tracking-tight font-bold">{project.title}</h3>
          <p className="text-text-secondary text-[10px] font-bold tracking-[0.2em] mb-4 uppercase flex items-center gap-2">
             <span className="w-8 h-[1px] bg-accent-color inline-block"></span>
             {project.tagline}
          </p>
          <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 text-[9px] bg-surface-color border border-border-color text-text-muted font-bold rounded-lg uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center pt-6 border-t border-border-color">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-primary hover:text-accent-color font-black uppercase text-[10px] tracking-widest transition-all hover:scale-110 active:scale-95"
          >
            <Github size={16} /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Civic Issue Reporting System",
      tagline: "Smart Governance Infrastructure",
      description: "A digital bridge connecting citizens to town departments. Features real-time geo-mapping for reporting local infrastructure failures like potholes and lighting, integrated with a high-transparency tracking dashboard.",
      image: "/civic.png",
      tech: ["MERN Stack", "Google Maps API", "Express", "MongoDB", "Redux"],
      date: "Spring 2025",
      github: "https://github.com/pavankalyankanugonda"
    },
    {
      title: "BYOD Management",
      tagline: "Security Infrastructure",
      description: "Designed a next-gen security framework for Bring Your Own Device policies. Features advanced JWT authentication, RBAC, and real-time monitoring of personal hardware within corporate network perimeters.",
      image: "/byod.png",
      tech: ["PHP Stack", "MySQL", "REST API", "JWT", "Tailwind"],
      date: "Spring 2025",
      github: "https://github.com/pavankalyankanugonda"
    },
    {
      title: "Real Estate Hub",
      tagline: "Operations & CRM",
      description: "A comprehensive platform for modern real estate sales. Streamlines property inventory, lead management, and digital site visit scheduling with high-precision documentation tracing.",
      image: "/realestate.png",
      tech: ["React.js", "Express", "Node.js", "MongoDB", "Framer"],
      date: "Spring 2025",
      github: "https://github.com/pavankalyankanugonda"
    }
  ];

  return (
    <section className="py-24" id="projects">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4">
            <h2 className="text-text-primary">Project <span>Universe</span></h2>
            <div className="w-16 h-1.5 bg-accent-color rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
