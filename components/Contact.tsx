import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, CheckCircle2, Phone } from 'lucide-react';
import { PersonalInfo, SocialLink } from '../types';

const MotionDiv = motion.div as any;

interface ContactProps {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
}

const Contact: React.FC<ContactProps> = ({ personalInfo, socialLinks }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
        const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                _subject: `${formData.subject} - Portfolio Contact from ${formData.name}`,
                _captcha: "false", // Disable captcha for smoother experience
                _template: "table"
            })
        });

        if (response.ok) {
            setSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
        } else {
            // Fallback for when formsubmit isn't activated or fails
            console.warn("FormSubmit fetch failed, falling back to mailto");
            window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.name)}`;
            setSuccess(true); // Treat as success since mailto opened
        }
    } catch (error) {
        console.error("Submission error", error);
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.name)}`;
        setSuccess(true);
    }
    
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-400/10 dark:bg-accent/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-6">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            I'm currently looking for opportunities in AI & Data Science. Let's build something amazing together!
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-lg dark:shadow-none"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">Contact Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-blue-500/30">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg break-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-green-500/30">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-slate-900 dark:text-white font-medium hover:text-green-600 dark:hover:text-green-400 transition-colors text-lg">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-purple-600 dark:text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-accent/30">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Location</p>
                  <p className="text-slate-900 dark:text-white font-medium text-lg">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Connect on Social Media</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-gradient-to-br hover:from-blue-600 hover:to-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                      aria-label={link.platform}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative"
          >
            {success ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                    <button 
                        onClick={() => setSuccess(false)}
                        className="mt-6 px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg transition-colors"
                    >
                        Send Another
                    </button>
                </div>
            ) : (
                <>
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50 dark:from-blue-500/5 dark:to-accent/5 rounded-3xl pointer-events-none"></div>
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                        <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400 dark:placeholder-slate-600"
                        placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                        <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400 dark:placeholder-slate-600"
                        placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                        <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder-slate-400 dark:placeholder-slate-600"
                        placeholder="Project Collaboration"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                        <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none placeholder-slate-400 dark:placeholder-slate-600"
                        placeholder="Hi Jayaprakash, I have an opportunity for you..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-accent hover:from-blue-500 hover:to-accent/80 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Sending...
                        </>
                        ) : (
                        <>
                            Send Message
                            <Send size={18} />
                        </>
                        )}
                    </button>
                    </form>
                </>
            )}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Contact;