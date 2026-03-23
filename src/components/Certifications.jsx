import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    { 
      title: "ChatGPT-4 Prompt Engineering", 
      organization: "Infosys", 
      date: "Aug' 25",
      link: "https://drive.google.com/file/d/1P65hmNQ-XK6RYjGoghePM4QYxhv68BOy/view?usp=drive_link"
    },
    { 
      title: "Cloud Computing", 
      organization: "NPTEL", 
      date: "Jan' 25",
      link: "https://drive.google.com/file/d/1qKK0dtxb7rCVmPdqcSqQvh1Ur0SZw6My/view?usp=drive_link"
    },
    { 
      title: "Binary Blitz (2024)", 
      organization: "Binary", 
      date: "Dec' 24",
      link: "https://drive.google.com/file/d/1LTsWyjd9jK0NepuJisNmdyCZjqyFirKP/view?usp=drive_link"
    },
    { 
      title: "Computer Communications", 
      organization: "University of Colorado System | Coursera", 
      date: "Nov' 24",
      link: "https://drive.google.com/file/d/1ahDeXJmQvTN2OB0O9EMS5OXa_Adh_Gbj/view?usp=drive_link"
    },
    { 
      title: "Responsive Web Design", 
      organization: "freeCodeCamp", 
      date: "Mar' 24",
      link: "https://drive.google.com/file/d/1gYHAGaaQ0TdEh1n0C9R80F1_ijDg1CUf/view?usp=drive_link"
    }
  ];

  return (
    <section className="py-24" id="certifications">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-10">
          <Award className="text-accent-color" size={28} />
          <h2 className="text-text-primary">Certificates <span>& Training</span></h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {/* Highlighted Training */}
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card card-padding rounded-2xl border border-border-color bg-surface-color/30 hover:border-accent-color transition-all group relative overflow-hidden"
          >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h3 className="text-text-primary group-hover:text-accent-color transition-colors tracking-tight">
                      CSE Pathshala - C++ Programming in OOPs and DSA
                  </h3>
                  <a 
                      href="https://drive.google.com/file/d/1Fq2td9FpzdngspecdnB5M1TPkYhuZfee/view?usp=drive_link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 bg-text-primary text-bg-color px-6 py-2.5 rounded-lg font-bold shadow-sm hover:scale-105 transition-all text-xs uppercase tracking-widest"
                  >
                      View Certificate <ExternalLink size={14} />
                  </a>
              </div>
              
              <p className="text-content text-text-muted mb-6 leading-relaxed max-w-3xl">
                  Applied object-oriented principles to build scaleable code architectures and mastered advanced data structures to solve complex algorithmic problems.
              </p>
              
              <div className="flex flex-wrap gap-3 items-center">
                  {["C++", "DSA", "OOPs", "Algorithm Optimization"].map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-surface-color border border-border-color rounded-lg text-[10px] font-bold text-text-muted uppercase tracking-widest">
                          {tag}
                      </span>
                  ))}
                  <div className="ml-auto text-[10px] font-bold text-accent-color uppercase tracking-widest">
                      Completed August 2025
                  </div>
              </div>
          </motion.div>

          {/* Grid of certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
                <motion.a 
                    key={idx}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-6 rounded-xl border border-border-color flex flex-col justify-between hover:border-secondary transition-all group"
                >
                    <div className="flex justify-between items-start gap-4 mb-4">
                        <Award size={24} className="text-text-muted group-hover:text-secondary" />
                        <ExternalLink size={14} className="text-text-muted group-hover:text-text-primary" />
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold text-text-primary mb-1 tracking-tight">{cert.title}</h3>
                        <p className="text-xs text-text-muted font-medium italic mb-4">{cert.organization}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-border-color flex justify-between items-center text-[10px] font-bold text-text-muted uppercase tracking-widest">
                        <span>ISSUED</span>
                        <span className="text-accent-color">{cert.date}</span>
                    </div>
                </motion.a>
            ))}
          </div>

          {/* Achievements */}
          <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card card-padding rounded-2xl border border-accent-color/20 bg-accent-color/5 flex flex-col md:flex-row items-center justify-between gap-8"
          >
              <div className="text-center md:text-left flex-1">
                  <h3 className="text-text-primary mb-3">Achievements & Recognition</h3>
                  <p className="text-content text-text-muted leading-relaxed mb-4">
                      Recognized specifically for problem-solving in the <span className="text-text-primary font-bold">Coding Wise Hackathon</span> and leadership as a <span className="text-accent-color font-bold">Co-ordinator</span> for the Inventix technical symposium.
                  </p>
                  <div className="flex gap-3 justify-center md:justify-start">
                      <span className="px-4 py-1.5 bg-accent-color/10 border border-accent-color/20 rounded-full text-[10px] font-bold text-accent-color uppercase tracking-widest leading-none">Hackathon Participation</span>
                      <span className="px-4 py-1.5 bg-accent-color/10 border border-accent-color/20 rounded-full text-[10px] font-bold text-accent-color uppercase">Event Coordinator</span>
                  </div>
              </div>
              <div className="h-20 w-20 bg-accent-color/10 rounded-full flex items-center justify-center border border-accent-color/20">
                   <Award size={32} className="text-accent-color" />
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
