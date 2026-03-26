import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, ExternalLink, Eye, X } from 'lucide-react';

const CardTilt = ({ children, className, cert, getThumbnailUrl, onSelected }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full">
        {children}
      </div>

    </motion.div>
  );
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

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

  const getDriveId = (link) => {
    try {
      const match = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
      return match ? match[1] : null;
    } catch (e) {
      return null;
    }
  };

  const getThumbnailUrl = (link) => {
    const id = getDriveId(link);
    return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w1000` : null;
  };

  const getPreviewUrl = (link) => {
    try {
      if (link.includes('drive.google.com')) {
        return link.replace(/\/view.*$/, '/preview');
      }
      return link;
    } catch (e) {
      return link;
    }
  };

  return (
    <section className="py-24" id="certifications">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-10">
          <Award className="text-accent-color" size={28} />
          <h2 className="text-text-primary">Certificates <span>& Training</span></h2>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {/* Highlighted Training */}
          <CardTilt 
            cert={{ title: "CSE Pathshala - C++ Programming in OOPs and DSA", link: "https://drive.google.com/file/d/1Fq2td9FpzdngspecdnB5M1TPkYhuZfee/view?usp=drive_link" }}
            getThumbnailUrl={getThumbnailUrl}
            className="group"
          >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card card-padding rounded-2xl border border-border-color bg-surface-color/95 hover:border-accent-color transition-all relative overflow-hidden h-full"
            >


                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-text-primary group-hover:text-accent-color transition-colors tracking-tight mb-4">
                        CSE Pathshala - C++ Programming in OOPs and DSA
                    </h3>
                    
                    <p className="text-content text-text-muted mb-6 leading-relaxed max-w-3xl">
                        Applied object-oriented principles to build scaleable code architectures and mastered advanced data structures to solve complex algorithmic problems.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 items-center mb-6">
                        {["C++", "DSA", "OOPs", "Algorithm Optimization"].map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 bg-surface-color border border-border-color rounded-lg text-[10px] font-bold text-text-muted uppercase tracking-widest">
                                {tag}
                            </span>
                        ))}
                        <div className="ml-auto text-[10px] font-bold text-accent-color uppercase tracking-widest">
                            Completed August 2025
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => setSelectedCert({ title: "CSE Pathshala - C++ Programming in OOPs and DSA", link: "https://drive.google.com/file/d/1Fq2td9FpzdngspecdnB5M1TPkYhuZfee/view?usp=drive_link" })}
                            className="group flex items-center gap-2 bg-accent-color/10 border border-accent-color/20 text-accent-color px-6 py-2.5 rounded-lg font-bold shadow-sm hover:bg-accent-color/20 transition-all text-xs uppercase tracking-widest"
                        >
                            Preview <Eye size={14} />
                        </button>
                        <a 
                            href="https://drive.google.com/file/d/1Fq2td9FpzdngspecdnB5M1TPkYhuZfee/view?usp=drive_link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 bg-text-primary text-bg-color px-6 py-2.5 rounded-lg font-bold shadow-sm hover:scale-105 transition-all text-xs uppercase tracking-widest"
                        >
                            View Original <ExternalLink size={14} />
                        </a>
                    </div>
                  </div>
                </div>
            </motion.div>
          </CardTilt>

          {/* Grid of certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
                <CardTilt 
                    key={idx} 
                    cert={cert} 
                    getThumbnailUrl={getThumbnailUrl}
                    className="group"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-6 rounded-xl border border-border-color flex flex-col justify-between hover:border-secondary transition-all relative h-full"
                    >
                        <div className="flex justify-between items-start gap-4 mb-4">
                            <Award size={24} className="text-text-muted group-hover:text-secondary transition-colors" />
                            <div className="flex gap-2">
                            <button 
                                onClick={(e) => { e.preventDefault(); setSelectedCert(cert); }}
                                title="Preview Certificate"
                                className="p-1.5 rounded-md bg-surface-color/80 border border-border-color text-text-muted hover:text-accent-color hover:border-accent-color transition-all backdrop-blur-sm"
                            >
                                <Eye size={14} />
                            </button>
                            <a 
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open Link"
                                className="p-1.5 rounded-md bg-surface-color/80 border border-border-color text-text-muted hover:text-text-primary hover:border-text-primary transition-all backdrop-blur-sm"
                            >
                                <ExternalLink size={14} />
                            </a>
                            </div>
                        </div>
                        


                        <div className="relative z-10">
                            <h3 className="text-lg font-bold text-text-primary mb-1 tracking-tight pr-4 group-hover:text-accent-color transition-colors">{cert.title}</h3>
                            <p className="text-xs text-text-muted font-medium italic mb-4">{cert.organization}</p>
                        </div>
                        
                        <div className="relative z-10 pt-4 border-t border-border-color flex justify-between items-center text-[10px] font-bold text-text-muted uppercase tracking-widest">
                            <span>ISSUED</span>
                            <span className="text-accent-color">{cert.date}</span>
                        </div>
                    </motion.div>
                </CardTilt>
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
                      <button 
                        onClick={() => setSelectedCert({ title: "Hackathon Participation - Binary Blitz", link: "https://drive.google.com/file/d/1LTsWyjd9jK0NepuJisNmdyCZjqyFirKP/view?usp=drive_link" })}
                        className="px-4 py-1.5 bg-accent-color/10 border border-accent-color/20 rounded-full text-[10px] font-bold text-accent-color uppercase tracking-widest leading-none hover:bg-accent-color/20 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        Hackathon Participation <Eye size={10} />
                      </button>
                      <button 
                        onClick={() => setSelectedCert({ title: "Event Coordinator - Inventix", link: "/inventix_logo.png", isImage: true })}
                        className="flex items-center gap-3 px-4 py-1.5 bg-accent-color/10 border border-accent-color/20 rounded-full group/coordinator cursor-pointer hover:bg-accent-color/20 transition-all"
                      >
                        <img 
                            src="/inventix_logo.png" 
                            alt="Inventix Logo" 
                            className="w-4 h-4 object-contain rounded-full border border-accent-color/30 group-hover/coordinator:scale-125 transition-all"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span className="text-[10px] font-bold text-accent-color uppercase tracking-widest">Event Coordinator</span>
                        <Eye size={10} className="text-accent-color/50 group-hover/coordinator:text-accent-color transition-colors" />
                      </button>
                  </div>
              </div>
              <div className="h-20 w-20 bg-accent-color/10 rounded-full flex items-center justify-center border border-accent-color/20">
                   <Award size={32} className="text-accent-color" />
              </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-bg-color/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-[80vh] bg-surface-color border border-border-color rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-border-color bg-surface-color">
                <div className="flex items-center gap-3">
                  <Award size={20} className="text-accent-color" />
                  <h4 className="text-text-primary font-bold pr-10 truncate">{selectedCert.title}</h4>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-text-muted hover:text-text-primary"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 bg-black/20 relative flex items-center justify-center overflow-hidden">
                {selectedCert.isImage ? (
                  <img 
                    src={selectedCert.link} 
                    alt={selectedCert.title} 
                    className="max-w-full max-h-full object-contain p-8"
                  />
                ) : (
                  <>
                    <iframe 
                      src={getPreviewUrl(selectedCert.link)} 
                      className="w-full h-full border-none"
                      allow="autoplay"
                      title="Certificate Preview"
                    />
                    
                    {/* Loader placeholder */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center">
                      <div className="w-10 h-10 border-4 border-accent-color/20 border-t-accent-color rounded-full animate-spin" />
                    </div>
                  </>
                )}
              </div>

              <div className="p-4 border-t border-border-color bg-surface-color flex justify-between items-center">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                  Preview Mode
                </p>
                {selectedCert.link.startsWith('http') && (
                  <a 
                    href={selectedCert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-accent-color hover:underline flex items-center gap-1 uppercase tracking-widest"
                  >
                    Open in Google Drive <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
