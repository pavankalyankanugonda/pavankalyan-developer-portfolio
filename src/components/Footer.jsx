import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border-color bg-surface-color/30 mt-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Compact Brand */}
          <div className="flex items-center gap-6">
            <h3 className="text-xl font-black text-text-primary tracking-tighter uppercase italic leading-none">
                Pavan <span className="text-accent-color opacity-80">Kalyan</span>
            </h3>
            <div className="h-4 w-[1px] bg-border-color hidden md:block"></div>
            <p className="text-[10px] text-text-muted/60 font-black uppercase tracking-[0.3em]">
                © 2026 — All Systems Operational
            </p>
          </div>

          {/* Minimal Social Buttons */}
          <div className="flex gap-4">
            {[
                { icon: Github, href: "https://github.com/pavankalyankanugonda" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kanugonda-pavan/" },
                { icon: Mail, href: "mailto:pavankalyankanugonda@gmail.com" }
            ].map((social, idx) => (
                <a 
                    key={idx} 
                    href={social.href} 
                    className="p-2.5 bg-white border-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-all shadow-sm hover:scale-110 active:scale-95"
                >
                    <social.icon size={16} />
                </a>
            ))}
          </div>

          {/* Minimal Build Info */}
          <p className="text-[10px] text-text-muted/50 font-black uppercase tracking-[0.2em] md:text-right">
              Built with <span className="text-text-primary">React</span> • <span className="text-text-primary">Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
