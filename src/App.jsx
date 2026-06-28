import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Video, 
  Sliders, 
  Film, 
  Play, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  Tv, 
  Camera
} from 'lucide-react';

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Portfolio Details
  const profile = {
    name: "LUKHMAN ALI J",
    title: "Freelance Video Editor & Colorist",
    location: "51, Malaya Garden, Kodikkalpalayam, Thiruvarur, 610001",
    phone: "+91 94899 49358",
    email: "lukhman076@gmail.com",
    instagram: "@_iamlukhman_",
    instagramUrl: "https://ig.me/m/_iamlukhman_"
  };

  const skills = [
    { name: "CapCut", level: "Expert", category: "Software", desc: "Advanced mobile & desktop editing, keyframing, and speed ramping.", icon: Film },
    { name: "Adobe Basics", level: "Intermediate", category: "Software", desc: "Premiere Pro & After Effects fundamentals for seamless workflows.", icon: Layers },
    { name: "Colour Grading", level: "Expert", category: "Creative", desc: "Crafting distinct moods, tone curves, and professional LUT application.", icon: Sliders },
    { name: "Instagram Reels & Shorts", level: "Expert", category: "Format", desc: "High-retention hooks, sync-to-beat editing, and viral formatting.", icon: Tv },
    { name: "Commercial Video & Marketing", level: "Advanced", category: "Creative", desc: "Promotional content designed to drive engagement and sales.", icon: Video },
    { name: "Travel Editing", level: "Expert", category: "Creative", desc: "Cinematic transitions, sound design, and storytelling pacing.", icon: Camera }
  ];

  const education = [
    {
      institution: "K. Ramakrishna College of Technology",
      degree: "Undergraduate Program (1st Year)",
      period: "Present",
      type: "College"
    },
    {
      institution: "RC Fathima Matriculation Higher Secondary School",
      degree: "12th Completed",
      period: "Completed",
      type: "School"
    }
  ];

  const sampleProjects = [
    {
      title: "Cinematic Travel Odyssey",
      category: "Travel Editing",
      duration: "0:45",
      views: "120K+",
      tags: ["Travel", "Color Graded", "Sound Design"],
      color: "from-blue-500/20 to-indigo-500/20",
      videoUrl: "/LUKHMAN_CLIENT.mp4"
    },
    {
      title: "Streetwear Brand Commercial",
      category: "Commercial Video & Marketing",
      duration: "0:30",
      views: "85K+",
      tags: ["Commercial", "Fast Cuts", "VFX"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Viral Instagram Reel Hook",
      category: "Instagram Reels & Shorts",
      duration: "0:15",
      views: "1.2M+",
      tags: ["Reel", "CapCut", "Trending"],
      color: "from-amber-500/20 to-orange-500/20",
      videoUrl: "/LUKHMAN_CLIENT02.mp4"
    },
    {
      title: "Music Video Aesthetic Grade",
      category: "Colour Grading",
      duration: "1:00",
      views: "45K+",
      tags: ["Color Grading", "Adobe Basics", "Cinematic"],
      color: "from-teal-500/20 to-emerald-500/20",
      videoUrl: "/LUKHMAN_CLIENT03.mp4"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? sampleProjects 
    : sampleProjects.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(activeTab.toLowerCase())));

  return (
    <div className="min-h-screen bg-[#03000a] text-slate-200 relative overflow-hidden flex flex-col justify-between selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[35%] w-[30vw] h-[30vw] rounded-full bg-teal-900/5 blur-[100px] pointer-events-none" />

      {/* Header / Spatial Floating Top Bar */}
      <header className="w-full max-w-7xl mx-auto px-6 pt-6 z-20">
        <div className="glass-panel px-6 py-4 rounded-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs text-slate-300 font-bold tracking-widest uppercase">Portfolio 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Email Me</span>
            </a>
            <a 
              href={profile.instagramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="glass-panel px-4 py-2 rounded-xl text-xs font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10"
            >
              <InstagramIcon className="w-4 h-4 text-pink-500" />
              <span>{profile.instagram}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Dashboard */}
      <main className="w-full max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 z-10 flex-grow perspective-container">
        
        {/* Left Column: Profile & Contact & Education (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Profile Panel */}
          <motion.div 
            className="glass-panel p-6 rounded-3xl relative overflow-hidden group cursor-pointer"
            whileHover={{ 
              translateZ: 15,
              scale: 1.01,
              borderColor: "rgba(255,255,255,0.15)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex flex-col gap-4">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] uppercase font-semibold tracking-wider w-max border border-purple-500/20">
                Available for Work
              </span>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-1">
                  {profile.name}
                </h2>
                <p className="text-sm text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400 inline" />
                  {profile.title}
                </p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specialized in high-impact visual storytelling, creative color grading, and viral short-form content. Transforming raw footage into cinematic experiences.
              </p>
            </div>
          </motion.div>

          {/* Contact Details Panel */}
          <motion.div 
            className="glass-panel p-6 rounded-3xl flex flex-col gap-4"
            whileHover={{ translateZ: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-1">Spatial Hub & Contact</h3>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase">Phone</p>
                  <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="text-xs text-white hover:underline">{profile.phone}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase">Email</p>
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-white hover:underline"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase">Location</p>
                  <p className="text-xs text-slate-300 leading-tight">{profile.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Experience Timeline */}
          <motion.div 
            className="glass-panel p-6 rounded-3xl flex-grow flex flex-col gap-4"
            whileHover={{ translateZ: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Journey</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400">Freelancer</span>
            </div>
            
            <div className="flex flex-col gap-5 relative border-l border-white/5 pl-4 ml-2">
              
              {/* College */}
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500 border border-[#03000a]" />
                <div className="flex items-center gap-1.5 text-[10px] text-purple-400 font-semibold mb-0.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>College / 1st Year</span>
                </div>
                <h4 className="text-xs font-bold text-white">{education[0].institution}</h4>
                <p className="text-[11px] text-slate-400">{education[0].degree}</p>
              </div>

              {/* School */}
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-600 border border-[#03000a]" />
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-semibold mb-0.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>School / completed</span>
                </div>
                <h4 className="text-xs font-bold text-slate-300">{education[1].institution}</h4>
                <p className="text-[11px] text-slate-400">{education[1].degree}</p>
              </div>

              {/* Freelance Experience */}
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-pink-500 border border-[#03000a]" />
                <div className="flex items-center gap-1.5 text-[10px] text-pink-400 font-semibold mb-0.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Experience</span>
                </div>
                <h4 className="text-xs font-bold text-white">Independent Freelance Editor</h4>
                <p className="text-[11px] text-slate-400">Delivering commercial, travel, and social media video content globally.</p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Right Column: Skills & Portfolio (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Skills Grid */}
          <motion.div 
            className="glass-panel p-6 rounded-3xl"
            whileHover={{ translateZ: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">Skills & Toolkit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={index}
                    className="p-3.5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300 flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center gap-2 mb-0.5">
                        <h4 className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">{skill.name}</h4>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 font-semibold tracking-wider uppercase">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-normal">{skill.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Portfolio / Showcase Section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Featured Edits</h3>
              
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white/[0.02] border border-white/5 max-w-max">
                {['all', 'grading', 'reels', 'commercial'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                      activeTab === tab 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="glass-panel rounded-2xl overflow-hidden group cursor-pointer relative"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ 
                      translateZ: 25, 
                      scale: 1.02,
                      borderColor: "rgba(255,255,255,0.15)"
                    }}
                  >
                    {/* Simulated Video Player Banner */}
                    <div className={`h-36 bg-gradient-to-tr ${project.color} relative flex items-center justify-center transition-all duration-300 overflow-hidden`}>
                      {project.videoUrl && (
                        <video
                          src={project.videoUrl}
                          className="absolute inset-0 w-full h-full object-cover z-0"
                          muted
                          loop
                          playsInline
                          autoPlay
                        />
                      )}
                      
                      
                      {/* Play Button Icon Overlay */}
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg z-10"
                        animate={{ 
                          scale: hoveredCard === index ? 1.1 : 1,
                          backgroundColor: hoveredCard === index ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"
                        }}
                      >
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </motion.div>
                      
                      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] font-bold text-white tracking-widest">
                        {project.duration}
                      </div>
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-md text-[9px] font-bold text-white">
                        {project.views} views
                      </div>
                    </div>

                    {/* Project Metadata */}
                    <div className="p-4 flex flex-col gap-2">
                      <div>
                        <span className="text-[9px] font-semibold text-purple-400 uppercase tracking-widest">
                          {project.category}
                        </span>
                        <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-purple-300 transition-colors">
                          {project.title}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </main>

      {/* Footer / Spatial Floating Bottom Bar */}
      <footer className="w-full max-w-7xl mx-auto px-6 pb-6 pt-4 z-20">
        <div className="glass-panel py-3.5 px-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <p>© 2026 Lukhman Ali J. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-purple-400" /> Thiruvarur, TN, India</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-400 font-semibold">Ready for freelance inquiries</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
