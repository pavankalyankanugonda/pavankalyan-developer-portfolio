import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology in CS",
      details: "CGPA: 6.80",
      location: "Phagwara, Punjab",
      date: "Aug' 23 - Present",
      status: "Currently Pursuing",
      accent: "rgba(33, 37, 41, 0.05)"
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate Education (MPC)",
      details: "Percentage: 84.5",
      location: "Tirupathi, Andhra Pradesh",
      date: "Jul' 21 - May' 23",
      status: "Completed",
      accent: "rgba(33, 37, 41, 0.03)"
    },
    {
      institution: "Jeevan Jyothi E.M High School",
      degree: "Matriculation (SSC)",
      details: "Percentage: 100",
      location: "O.D.C, Andhra Pradesh",
      date: "Jun' 20 - Jun' 21",
      status: "Completed",
      accent: "rgba(33, 37, 41, 0.05)"
    }
  ];

  return (
    <section className="py-24" id="education">
      <div className="section-container">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-text-primary uppercase tracking-tight">Academic <span>Journey</span></h2>
            <div className="w-20 h-2 bg-accent-color rounded-full mt-6"></div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-10">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ x: 20 }}
              className="group relative"
            >
              {/* Card - Full Width Professional Showcase */}
              <div className="glass-card w-full p-8 md:p-12 rounded-[2.5rem] border border-border-color hover:border-accent-color transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                
                <div className="flex-1 flex flex-col md:flex-row gap-8 items-start">
                    <div className="p-6 bg-surface-color rounded-3xl text-accent-color border border-border-color shadow-inner group-hover:scale-110 transition-transform duration-500">
                        <GraduationCap size={32} />
                    </div>

                    <div className="flex-1">
                        <h3 className="text-3xl font-black text-text-primary mb-3 tracking-tighter group-hover:text-accent-color transition-colors">
                            {edu.institution}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="text-[10px] text-text-muted font-black uppercase tracking-widest flex items-center gap-2">
                                <MapPin size={12} className="text-accent-color" /> {edu.location}
                            </span>
                            <span className="px-4 py-1.5 bg-white border border-border-color rounded-full text-[10px] font-black uppercase tracking-widest text-accent-color shadow-sm">
                                {edu.status}
                            </span>
                        </div>

                        <p className="text-lg font-bold text-text-muted flex items-center gap-3">
                            {edu.degree} <ChevronRight size={18} className="text-accent-color/30" />
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-start lg:items-center border-t lg:border-t-0 lg:border-l border-border-color/50 pt-8 lg:pt-0 lg:pl-10 min-w-[300px]">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Calendar size={14} className="text-accent-color" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">Timeline</span>
                        </div>
                        <span className="text-base font-black text-text-primary">{edu.date}</span>
                    </div>

                    <div className="flex-1 px-8 py-5 bg-surface-color rounded-3xl border border-border-color shadow-inner group-hover:bg-accent-color group-hover:text-white transition-all duration-500">
                        <div className="flex items-center gap-2 mb-2 opacity-60">
                            <Award size={14} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Performance</span>
                        </div>
                        <span className="text-2xl font-black">{edu.details}</span>
                    </div>
                </div>

              </div>
              
              {/* Side focus bar - only visible on hover */}
              <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-3 h-0 group-hover:h-2/3 bg-accent-color rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
