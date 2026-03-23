import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Smartphone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { 
        icon: <Mail size={20} />, 
        label: "Direct Email", 
        value: "pavankalyankanugonda@gmail.com", 
        href: "mailto:pavankalyankanugonda@gmail.com" 
    },
    { 
        icon: <Smartphone size={20} />, 
        label: "Voice / Whatsapp", 
        value: "+91 8074392185", 
        href: "tel:+918074392185" 
    },
    { 
        icon: <MapPin size={20} />, 
        label: "Current Base", 
        value: "Phagwara, Punjab" 
    }
  ];

  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage Details:\n${formData.message}`;
    
    // Constructing a definitive Gmail Redirection URL to ensure zero delivery failure
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=pavankalyankanugonda@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSuccess(true);
    window.open(gmailUrl, '_blank');
    
    // Reset form after a small delay
    setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSuccess(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24" id="contact">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-10">
            <div className="max-w-2xl">
                <h2 className="text-text-primary mb-6">
                    Get In <span>Touch</span>
                </h2>
                <div className="w-16 h-1.5 bg-accent-color mb-8 rounded-full"></div>
                <p className="text-text-muted text-content leading-relaxed">
                    Have a project in mind or just want to discuss the future of engineering? Let's build something extraordinary together.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
              {contactInfo.map((info, idx) => (
                <motion.a 
                    key={idx}
                    href={info.href || "#"}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-8 rounded-2xl border border-border-color flex items-center gap-6 group hover:border-accent-color transition-all"
                >
                    <div className="p-4 bg-surface-color rounded-xl group-hover:bg-accent-color/10 transition-colors">
                        <div className="text-accent-color">{info.icon}</div>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">{info.label}</h3>
                        <p className="text-text-primary font-bold text-base group-hover:text-accent-color transition-colors leading-tight">{info.value}</p>
                    </div>
                </motion.a>
              ))}
          </div>

          {/* Right Side Pro Form */}
          <div className="lg:col-span-7">
            <motion.div 
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="glass-card card-padding rounded-2xl border border-border-color h-full relative"
            >
                <h3 className="text-text-primary mb-8 tracking-tight">Send a Message</h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-2">Your Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Full Name" 
                                className="w-full bg-surface-color border border-border-color rounded-xl p-4 text-text-primary focus:outline-none focus:border-accent-color transition-all placeholder:text-text-muted/40 text-sm font-medium" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-2">Email Identity</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="name@email.com" 
                                className="w-full bg-surface-color border border-border-color rounded-xl p-4 text-text-primary focus:outline-none focus:border-accent-color transition-all placeholder:text-text-muted/40 text-sm font-medium" 
                            />
                        </div>
                   </div>

                   <div className="space-y-2">
                        <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-2">Detailed Message</label>
                        <textarea 
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Describe your goals, timeline, or just say hello..." 
                            className="w-full bg-surface-color border border-border-color rounded-xl p-4 text-text-primary focus:outline-none focus:border-accent-color transition-all placeholder:text-text-muted/40 text-sm font-medium resize-none" 
                        ></textarea>
                   </div>

                   <button 
                      type="submit"
                      className={`group relative w-full sm:w-auto px-10 py-4 font-bold tracking-widest rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg uppercase text-xs flex items-center justify-center gap-3 
                        ${isSuccess ? 'bg-green-500 text-white' : 'bg-text-primary text-bg-color'}`}
                   >
                     <span className="relative z-10 flex items-center gap-3">
                        {isSuccess ? 'Details Forwarded!' : 'Transmit'} 
                        {!isSuccess && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                        {isSuccess && <Sparkles size={16} className="animate-pulse" />}
                     </span>
                     {!isSuccess && <div className="absolute inset-0 bg-accent-color translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>}
                   </button>
                </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
