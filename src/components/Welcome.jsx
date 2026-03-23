import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

const Welcome = ({ onComplete }) => {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    // Stage-based Timing
    const t1 = setTimeout(() => setStage(2), 1200);
    const t2 = setTimeout(() => setStage(3), 2200);
    const t3 = setTimeout(() => onComplete(), 4000);

    return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05, 
        filter: "blur(40px)",
        transition: { duration: 1 } 
      }}
      style={{ backgroundColor: 'var(--bg-color)' }}
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden pointer-events-none transition-colors duration-500"
    >
      <AnimatePresence mode="wait">
        {stage === 1 && (
          <motion.h1 
            key="stage1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-7xl md:text-9xl font-black uppercase tracking-[0.2em] italic text-center rainbow-text"
          >
            Welcome
          </motion.h1>
        )}
        {stage === 2 && (
          <motion.h1 
            key="stage2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-center rainbow-text"
          >
            I Am
          </motion.h1>
        )}
        {stage === 3 && (
          <motion.div 
            key="stage3"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center px-4"
          >
             <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-4 rainbow-text">
                Pavan Kalyan
             </h1>
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: 120 }}
               transition={{ delay: 0.4, duration: 1 }}
               className="h-2.5 rounded-full shadow-lg rainbow-text"
               style={{ backgroundSize: '100% 100%', WebkitTextFillColor: 'initial', backgroundClip: 'initial' }}
             />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Welcome;
