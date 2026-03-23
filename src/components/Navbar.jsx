import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Training', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const itemBgClass = "bg-surface-color";
  const navBgClass = `bg-bg-color/95 backdrop-blur-md border-b border-border-color py-4`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-12 ${navBgClass}`}>
      <div className="flex justify-between items-center">

        {/* Left Side: Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-4 items-center"
        >
          <a href="https://github.com/pavankalyankanugonda" target="_blank" rel="noopener noreferrer" className={`p-3 ${itemBgClass} text-text-primary hover:text-accent-color transition-all rounded-xl border border-border-color hover:border-accent-color/40 flex items-center justify-center shadow-sm`}>
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kanugonda-pavan/" target="_blank" rel="noopener noreferrer" className={`p-3 ${itemBgClass} text-text-primary hover:text-accent-color transition-all rounded-xl border border-border-color hover:border-accent-color/40 flex items-center justify-center shadow-sm`}>
            <Linkedin size={20} />
          </a>
        </motion.div>

        {/* Center: Navigation Links */}
        <div className={`hidden lg:flex gap-3 items-center ${itemBgClass} px-6 py-2 rounded-full border border-border-color shadow-sm`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2 text-text-muted hover:text-text-primary hover:bg-bg-color/50 rounded-full transition-all text-xs font-bold tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Theme and CV */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className={`p-3 ${itemBgClass} text-text-primary hover:text-accent-color transition-all rounded-full border border-border-color shadow-inner hidden md:block`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="https://drive.google.com/uc?export=download&id=13B1VZfuNW8v1LHgfbzs44wS7AMauHPRh"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative px-10 py-3.5 ${itemBgClass} text-text-primary font-black tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-sm border border-border-color uppercase text-[10px] flex items-center gap-3`}
          >
            <span className="relative z-10 flex items-center gap-3">
              Download CV <Download size={16} />
            </span>
            <div className="absolute inset-0 bg-accent-color translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>

          {/* Mobile toggle */}
          <button className={`lg:hidden text-text-primary p-3 ${itemBgClass} rounded-xl border border-border-color shadow-sm`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className={`absolute top-16 left-0 w-[calc(100%-48px)] mx-6 mt-4 ${itemBgClass} border border-border-color rounded-[2rem] overflow-hidden lg:hidden shadow-2xl`}
          >
            <div className="flex flex-col gap-2 p-6">
              <div className="flex justify-between items-center px-4 py-4 border-b border-border-color/30 mb-4">
                <span className="text-[10px] font-black text-text-muted uppercase tracking-widest">Navigation Controls</span>
                <button onClick={toggleTheme} className="p-2 text-text-primary">
                  {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 text-xl font-black text-text-muted hover:text-text-primary hover:bg-bg-color/50 rounded-2xl transition-all uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
