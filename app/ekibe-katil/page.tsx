"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Send, User, Mail, Cpu, ArrowLeft, Terminal, Briefcase, ChevronDown } from "lucide-react";
import Link from "next/link";
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
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-600/5 blur-[160px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-600/5 blur-[160px] rounded-full mix-blend-screen" />
      </div>

      {/* 2. ANA İÇERİK - Geniş Padding */}
      <div className="relative z-10 pt-52 pb-40 px-6 sm:px-24 md:px-40 lg:px-64 xl:px-[25%]">
        
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.8]"
          >
            QODLIX <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">EKİBİ</span>
          </motion.h1>
          <div className="inline-flex items-center gap-3 text-neutral-500 uppercase tracking-[0.5em] text-xs font-bold">
            <span className="w-12 h-px bg-neutral-800" />
            Başvuru Formu
            <span className="w-12 h-px bg-neutral-800" />
          </div>
        </div>

        {/* 3. MERKEZİ FORM KARTI */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-[4.5rem] p-12 md:p-28 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative"
          >
            {/* H2 BAŞLIK */}
            <div className="flex items-center gap-8 mb-24 relative z-10">
              <div className="w-24 h-2 bg-blue-600 rounded-full shadow-[0_0_25px_rgba(37,99,235,0.6)]" />
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase italic">
                Terminal Girişi
              </h2>
            </div>

            {/* FORM ALANLARI */}
            <form className="space-y-20 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <InputGroup label="Tam Adınız" placeholder="Ad Soyad" icon={<User size={28} />} />
                <InputGroup label="E-posta Adresi" placeholder="email@qodlix.com" type="email" icon={<Mail size={28} />} />
              </div>

              {/* ÖZEL AÇILIR LİSTE (Custom Select - Tam Siyah Tema) */}
              <CustomSelectGroup 
                label="Uzmanlık Alanı" 
                options={expertises} 
                icon={<Terminal size={28} />} 
                placeholder="Bir alan seçin..." 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <InputGroup label="GitHub Profil" placeholder="github.com/..." icon={<FaGithub size={28} />} />
                <InputGroup label="LinkedIn Profil" placeholder="linkedin.com/..." icon={<FaLinkedin size={28} />} />
              </div>

              <div className="space-y-8 group">
                <div className="flex items-center gap-5 text-neutral-400 ml-1 group-focus-within:text-indigo-500 transition-colors">
                  <Briefcase size={28} />
                  <label className="text-lg font-black uppercase tracking-[0.3em]">Kapak Mektubu</label>
                </div>
                <textarea 
                  rows={10} 
                  placeholder="Vizyonunuzdan ve projelerinizden bahsedin..." 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-[3.5rem] px-12 py-12 text-white text-2xl placeholder:text-neutral-900 focus:outline-none focus:border-blue-600/50 transition-all resize-none shadow-inner leading-relaxed"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full py-12 bg-white hover:bg-blue-600 text-black hover:text-white font-black uppercase tracking-[0.6em] rounded-[2.5rem] flex items-center justify-center gap-6 transition-all shadow-[0_30px_60px_-15px_rgba(255,255,255,0.1)] group text-2xl"
              >
                BAŞVURU YAP <Send size={32} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// YARDIMCI BİLEŞEN 1: Standart Text Inputlar
function InputGroup({ label, placeholder, type = "text", icon }: any) {
  return (
    <div className="space-y-8 group">
      <div className="flex items-center gap-5 text-neutral-400 ml-1 group-focus-within:text-blue-500 transition-colors">
        {icon}
        <label className="text-lg font-black uppercase tracking-[0.3em]">{label}</label>
      </div>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full bg-neutral-950 border border-neutral-800 rounded-[2rem] px-10 py-8 text-white text-2xl placeholder:text-neutral-900 focus:outline-none focus:border-blue-600/50 focus:ring-8 focus:ring-blue-600/5 transition-all shadow-inner font-medium" 
      />
    </div>
  );
}

// YARDIMCI BİLEŞEN 2: Tamamen Siyah Özelleştirilmiş Açılır Liste (Custom Dropdown)
function CustomSelectGroup({ label, options, icon, placeholder }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="space-y-8 group relative z-50">
      <div className="flex items-center gap-5 text-neutral-400 ml-1 group-focus-within:text-blue-500 transition-colors">
        {icon}
        <label className="text-lg font-black uppercase tracking-[0.3em]">{label}</label>
      </div>
      <div className="relative">
        {/* Seçici Kutu */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-black border ${isOpen ? 'border-blue-600/50 ring-8 ring-blue-600/5' : 'border-neutral-800'} rounded-[2rem] px-10 py-8 flex items-center justify-between cursor-pointer shadow-inner transition-all hover:border-neutral-700`}
        >
          <span className={`text-2xl font-medium ${selected ? "text-white" : "text-neutral-900"}`}>
            {selected || placeholder}
          </span>
          <div className="text-neutral-600 pointer-events-none">
            <motion.animate animate={{ rotate: isOpen ? 180 : 0 }}>
              <ChevronDown size={32} className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : ""}`} />
            </motion.animate>
          </div>
        </div>

        {/* Açılan Menü (Tam Siyah) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 bg-black border border-neutral-800 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-50 py-4"
            >
              {options.map((opt: string) => (
                <div 
                  key={opt}
                  onClick={() => {
                    setSelected(opt);
                    setIsOpen(false);
                  }}
                  className="px-10 py-6 text-white text-2xl font-medium hover:bg-neutral-900 hover:text-blue-400 transition-colors cursor-pointer border-b border-neutral-900/50 last:border-none"
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