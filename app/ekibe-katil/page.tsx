"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Send, User, Mail, Briefcase, Terminal, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";

export default function JoinTheTeam() {
  const expertises = [
    "C++ System Developer",
    "Rust & Tauri Specialist",
    "Next.js Architecture",
    "DevOps & Infrastructure"
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30 relative overflow-x-hidden">
      
      {/* 1. NAVIGASYON */}
      <Navbar />

      {/* Arka Plan Dekoratif Işıklar */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* 2. ANA İÇERİK - Optimize Edilmiş Padding */}
      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto">
        <br />
        <br />
        <br />
        <div className="text-center mb-16 md:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none"
          >
            QODLIX <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-410">EKİBİ</span>
          </motion.h1>
          <div className="inline-flex items-center gap-3 text-neutral-500 uppercase tracking-[0.3em] text-xs font-bold">
            <span className="w-8 h-px bg-neutral-800" />
            Başvuru Formu
            <span className="w-8 h-px bg-neutral-800" />
          </div>
        </div>

        {/* 3. MERKEZİ FORM KARTI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl relative max-w-4xl mx-auto"
        >
          {/* H2 BAŞLIK */}
          <div className="flex items-center gap-4 mb-12 relative z-10">
            <div className="w-12 h-1.5 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]" />
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase italic">
              Terminal Girişi
            </h2>
          </div>

          {/* FORM ALANLARI */}
          <form className="space-y-8 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputGroup label="Tam Adınız" placeholder="Ad Soyad" icon={<User size={20} />} /> 
              <InputGroup label="E-posta Adresi" placeholder="email@qodlix.com" type="email" icon={<Mail size={20} />} />
            </div>
            <br />
            {/* ÖZEL AÇILIR LİSTE */}
            <CustomSelectGroup 
              label="Uzmanlık Alanı" 
              options={expertises} 
              icon={<Terminal size={20} />} 
              placeholder="Bir alan seçin..." 
            />
            <br />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputGroup label="GitHub Profil" placeholder="github.com/..." icon={<FaGithub size={20} />} />
              <InputGroup label="LinkedIn Profil" placeholder="linkedin.com/..." icon={<FaLinkedin size={20} />} />
            </div>
            <br />

            <div className="space-y-3 group">
              <div className="flex items-center gap-3 text-neutral-400 ml-1 group-focus-within:text-indigo-500 transition-colors">
                <Briefcase size={20} />
                <label className="text-sm font-bold uppercase tracking-wider">Kapak Mektubu</label>
              </div>
              <textarea 
                rows={5} 
                placeholder="Vizyonunuzdan ve projelerinizden bahsedin..." 
                className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white text-base placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none shadow-inner leading-relaxed"
              />
            </div>
            <br />

            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full mt-4 py-5 bg-white hover:bg-blue-600 text-black hover:text-black font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-4 transition-all shadow-lg group text-xlg"
            >
              BAŞVURU YAP <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

// YARDIMCI BİLEŞEN 1: Standart Text Inputlar
function InputGroup({ label, placeholder, type = "text", icon }: any) {
  return (
    <div className="space-y-3 group">
      <div className="flex items-center gap-3 text-neutral-400 ml-1 group-focus-within:text-blue-500 transition-colors">
        {icon}
        <label className="text-sm font-bold uppercase tracking-wider">{label}</label>
      </div>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white text-base placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-inner font-medium" 
      />
    </div>
  );
}

// YARDIMCI BİLEŞEN 2: Tamamen Siyah Özelleştirilmiş Açılır Liste
function CustomSelectGroup({ label, options, icon, placeholder }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  
  return (
    <div className="space-y-3 group relative z-50">
      <div className="flex items-center gap-3 text-neutral-400 ml-1 group-focus-within:text-blue-500 transition-colors">
        {icon}
        <label className="text-sm font-bold uppercase tracking-wider">{label}</label>
      </div>
      <div className="relative">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-neutral-950/50 border ${isOpen ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-neutral-800'} rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer shadow-inner transition-all hover:border-neutral-700`}
        >
          <span className={`text-base font-medium ${selected ? "text-white" : "text-neutral-700"}`}>
            {selected || placeholder}
          </span>
          <div className="text-neutral-500 pointer-events-none">
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
              <ChevronDown size={24} className={`transition-transform duration-300 ${isOpen ? "text-blue-500" : ""}`} />
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl z-50 py-2"
            >
              {options.map((opt: string) => (
                <div 
                  key={opt}
                  onClick={() => {
                    setSelected(opt);
                    setIsOpen(false);
                  }}
                  className="px-6 py-3 text-white text-base font-medium hover:bg-neutral-900 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {opt}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}