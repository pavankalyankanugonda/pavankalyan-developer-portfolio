import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownCircle, Mail, Github, Linkedin } from 'lucide-react';

const Typewriter = () => {
    const roles = ["Full Stack Developer", "MERN Stack Developer", "Responsive Web Developer"];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentRole = roles[index];
            if (isDeleting) {
                setText(currentRole.substring(0, text.length - 1));
            } else {
                setText(currentRole.substring(0, text.length + 1));
            }
            
            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex((index + 1) % roles.length);
            }
        }, isDeleting ? 50 : 150);
        
        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    return (
        <span className="text-accent-color font-bold uppercase tracking-widest text-base min-h-[1.5em] inline-block">
            {text}<span className="animate-pulse ml-1 opacity-70">|</span>
        </span>
    );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-80 pb-24 overflow-hidden" id="home">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none -z-10"></div>
      
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left info - Clean, professional layout */}
        <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div>
                <h1 className="font-bold tracking-tight mb-8 text-text-primary uppercase">
                PAVAN KALYAN
                </h1>
                
                <div className="mb-10 h-8">
                    <Typewriter />
                </div>

                <p className="text-content text-text-muted max-w-xl leading-relaxed mt-4">
                Designing <span className="text-text-primary font-bold">digital systems</span> that are as efficient as they are beautiful. Specialized in modern AI-integrated full-stack architectures.
                </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center mt-6">
                <a 
                    href="#contact" 
                    className="group relative px-8 py-3.5 bg-surface-color text-text-primary border-2 border-black font-black rounded-xl overflow-hidden transition-all hover:bg-black hover:text-white hover:scale-105 active:scale-95 shadow-sm shadow-black/5 uppercase tracking-widest text-xs"
                >
                    Get In Touch
                </a>
                <a 
                    href="https://drive.google.com/file/d/13B1VZfuNW8v1LHgfbzs44wS7AMauHPRh/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-8 py-3.5 bg-surface-color text-text-primary border-2 border-black font-black rounded-xl hover:bg-black hover:text-white transition-all flex items-center gap-3 text-xs uppercase tracking-widest shadow-sm hover:scale-105"
                >
                   View Resume <ArrowDownCircle size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 pt-8 border-t border-border-color">
                {[
                    { icon: Github, href: "https://github.com/pavankalyankanugonda", label: "Github" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/kanugonda-pavan/", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:pavankalyankanugonda@gmail.com", label: "Email" },
                ].map((social, index) => (
                    <motion.a 
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="transition-all flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] px-6 py-3 rounded-xl border-2 border-black bg-surface-color text-text-primary shadow-sm hover:bg-black hover:text-white"
                    >
                        <social.icon size={18} className="text-text-primary group-hover:text-white" />
                        <span className="inline text-text-primary group-hover:text-white">{social.label}</span>
                    </motion.a>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Right profile photo - High-end circular presentation */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95, y: 30 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             viewport={{ once: true }}
             className="relative w-full max-w-[460px]"
           >
              {/* Main Photo container - Perfect Circle */}
              <div className="relative w-full aspect-square !rounded-full overflow-hidden glass-card border-[8px] border-bg-color shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group cursor-pointer">
                 <img 
                    src="/pavan_profile.png" 
                    alt="Pavan Kalyan" 
                    className="w-full h-full object-cover object-top scale-125 block transition-transform duration-[2s] group-hover:scale-[1.35]"
                 />
                 
                 {/* Sophisticated gradient overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-bg-color/30 via-transparent to-transparent opacity-60 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent-color/5 blur-3xl -z-10 rounded-full"></div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
