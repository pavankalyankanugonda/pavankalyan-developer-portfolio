import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Sparkles, Github, Linkedin } from 'lucide-react';

export default function AboutMe() {
  return (
    <section className="py-32 bg-surface-color/50" id="about">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side: Square Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:w-1/3 relative"
          >
            <div className="relative group">
              {/* Decorative 'Outline' Div - Restored for depth */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-black rounded-2xl -z-10 group-hover:top-2 group-hover:left-2 transition-all"></div>
              
              {/* Main Image Container - Subtle [5/6] Squarish Crop */}
              <div className="aspect-[5/6] w-full max-w-[360px] rounded-2xl overflow-hidden border-2 border-black bg-surface-color shadow-xl relative">
                <img 
                  src="/pavan_profile.png" 
                  alt="Pavan Kalyan" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 right-4 bg-white border-2 border-black px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-black">Active Now</span>
                </div>
              </div>

              {/* Minimalist edge accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-black -z-10 rounded-tl-2xl opacity-10"></div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:w-2/3 flex flex-col gap-8"
          >
            <div>
              <h2 className="text-text-primary mb-6">
                About <span>Me</span>
              </h2>
              <div className="w-16 h-1.5 bg-accent-color rounded-full mb-10"></div>
            </div>

            <p className="text-lg text-text-primary font-bold leading-relaxed max-w-xl">
              I am a <span className="text-accent-color opacity-90">Full Stack Developer</span> dedicated to building high-performance, scalable web systems that bridge the gap between complex logic and elegant user experiences.
            </p>

            {/* Social Redirection Boxes - Smaller, Compact Width */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: Github, label: "GITHUB", href: "https://github.com/pavankalyankanugonda" },
                { icon: Linkedin, label: "LINKEDIN", href: "https://www.linkedin.com/in/kanugonda-pavan/" }
              ].map((pill, idx) => (
                <motion.a 
                  key={idx} 
                  href={pill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-4 px-8 py-4 w-fit min-w-[180px] bg-surface-color border-2 border-black rounded-2xl shadow-sm hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
                >
                  <pill.icon size={22} className="text-text-primary group-hover:text-white transition-colors" />
                  <span className="text-sm font-black uppercase tracking-widest leading-none text-text-primary group-hover:text-white">{pill.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
