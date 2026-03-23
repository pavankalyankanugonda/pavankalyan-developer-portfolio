import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe2, Wrench } from 'lucide-react';

const SkillCard = ({ category, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="glass-card card-padding rounded-2xl border border-border-color hover:border-accent-color transition-all shadow-sm group cursor-default relative overflow-hidden h-full flex flex-col gap-8"
    >
      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-surface-color shadow-inner rounded-xl group-hover:bg-accent-color/10 transition-all text-accent-color">
            {category.icon}
          </div>
          <h3 className="text-xl font-bold tracking-tight text-text-primary leading-none">{category.title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, sIdx) => (
            <div 
              key={sIdx} 
              className="flex items-center gap-2.5 px-4 py-2.5 bg-surface-color text-text-primary rounded-xl border border-border-color hover:border-accent-color transition-all font-bold tracking-widest uppercase text-[10px] shadow-sm active:scale-95"
            >
              <img 
                  src={`https://cdn.simpleicons.org/${skill.logo}/${skill.color}`} 
                  alt={skill.name} 
                  className="w-4 h-4 object-contain"
                  onError={(e) => e.target.style.display = 'none'}
              />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Code2 size={24} />,
      skills: [
          { name: "C++", logo: "cplusplus", color: "00599C" },
          { name: "Python", logo: "python", color: "3776AB" },
          { name: "Java", logo: "java", color: "007396" },
          { name: "C", logo: "c", color: "333333" }, // Darker color for C for better visibility
          { name: "JavaScript", logo: "javascript", color: "F7DF1E" }
      ],
      level: 5
    },
    {
      title: "Front-End",
      icon: <Globe2 size={24} />,
      skills: [
          { name: "React", logo: "react", color: "61DAFB" },
          { name: "HTML5", logo: "html5", color: "E34F26" },
          { name: "CSS3", logo: "css3", color: "1572B6" },
          { name: "Tailwind", logo: "tailwindcss", color: "06B6D4" }
      ],
      level: 4
    },
    {
      title: "Back-End",
      icon: <Server size={24} />,
      skills: [
          { name: "Node.js", logo: "nodedotjs", color: "339933" },
          { name: "PHP", logo: "php", color: "777BB4" },
          { name: "MySQL", logo: "mysql", color: "4479A1" },
          { name: "REST APIs", logo: "postman", color: "FF6C37" }
      ],
      level: 4
    },
    {
      title: "Tools & Git",
      icon: <Wrench size={24} />,
      skills: [
          { name: "Git", logo: "git", color: "F05032" },
          { name: "GitHub", logo: "github", color: "181717" },
          { name: "Postman", logo: "postman", color: "FF6C37" },
          { name: "VS Code", logo: "visualstudiocode", color: "007ACC" }
      ],
      level: 5
    }
  ];

  return (
    <section className="py-24" id="skills">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-text-primary">
              Technical <span>Arsenal</span>
          </h2>
          <div className="w-16 h-1.5 bg-accent-color rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
