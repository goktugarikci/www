"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Send, User, Mail, ArrowLeft, Terminal, Briefcase, Code2, Link as LinkIcon, Cpu } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function JoinTheTeam() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30 relative">
      
      {/* 1. NAVBAR (En Üst Katman) */}
      <Navbar />

      {/* 2. ARKA PLAN DEKORASYONU (Z-Index 0) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[35%] h-[35%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* 3. İÇERİK KATMANI (Z-Index 10) */}
      <div className="relative z-10 pt-40 pb-24 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-80">
        
        {/* Navigasyon & Geri Dön */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-16 max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-3 text-neutral-500 hover:text-white transition-all group">
            <div className="p-2.5 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10 transition-all shadow-inner">
              <ArrowLeft size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Ana Sayfaya Dön</span>
          </Link>
        </motion.div>

        {/* Başlık ve Tanıtım */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
          >
            QODLIX <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              KADROSUNA
            </span> KATIL
          </motion.h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Sistem mimarisi, yüksek performanslı backend ve modern arayüzler üzerine odaklanan vizyonumuza ortak olun.
          </p>
        </div>

        {/* BAŞVURU FORMU KARTI */}
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Dekoratif Cpu İkonu (Arka Planda, Metne Engel Olmaz) */}
            
            <div className="relative -top-12 -right-12 text-white/5 rotate-12 pointer-events-none">
              <Cpu size={200} />
            <br />
            </div>
            
            <div className="flex items-center gap-4 mb-14 relative z-10">
              <div className="w-12 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <h2 className="text-xs font-black tracking-[0.4em] text-white uppercase">Sisteme Giriş Yapılıyor</h2>
            </div>

            <form className="space-y-12 relative z-10">
              {/* İsim & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <StyledInput clasName="p-4" label="Ad Soyad" placeholder="Adınız" icon={<User size={16} />} />
                <StyledInput clasName="p-4" label="E-posta" placeholder="example@qodlix.com" type="email" icon={<Mail size={16} />} />
              </div>

              {/* Pozisyon Seçimi */}
              <div className="space-y-4 group mb-8">
                <div className="flex items-center gap-3 text-neutral-500 ml-1 group-focus-within:text-blue-400 transition-colors">
                  <Terminal size={14} />
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/90">İlgilendiğiniz Uzmanlık</label>
                </div>
                <select className="w-full bg-neutral-950/60 border border-neutral-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all appearance-none cursor-pointer">
                  <option>C++ System Developer</option>
                  <option>Rust & Tauri Specialist</option>
                  <option>Next.js Fullstack Architect</option>
                  <option>Backend & SaaS Developer</option>
                </select>
              </div>
              


              {/* Sosyal Medya Linkleri */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <StyledInput label="GitHub" placeholder="github.com/username" icon={<FaGithub size={16} />} />
                
                <StyledInput label="LinkedIn" placeholder="linkedin.com/in/username" icon={<FaLinkedin size={16} />} />
              </div>

              {/* Mesaj Alanı */}
              <div className="space-y-4 group">
                <div className="flex items-center gap-3 text-neutral-500 ml-1 group-focus-within:text-purple-400 transition-colors">
                  <Briefcase size={14} />
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/90">Kapak Mektubu</label>
                </div>
                <textarea 
                  rows={6} 
                  placeholder="Teknik deneyimlerinizden ve Qodlix vizyonunuzdan bahsedin..." 
                  className="w-full bg-neutral-950/60 border border-neutral-800 rounded-[2rem] px-6 py-5 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all resize-none shadow-inner"
                />
              </div>

              {/* Buton */}
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-6 bg-white hover:bg-blue-600 text-black hover:text-white font-black uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-3 transition-all shadow-2xl active:shadow-inner group"
              >
                BAŞVURUYU TAMAMLA 
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* 4. FOOTER */}
      <footer className="py-20 text-center border-t border-white/5 relative z-10 bg-black/20">
        <div className="text-3xl font-black tracking-tighter mb-4 text-white/10 select-none">QODLIX</div>
        <p className="text-neutral-600 text-[10px] font-bold tracking-[0.4em] uppercase">
          © {new Date().getFullYear()} Qodlix Systems — Gelecek Burada Kodlanıyor
        </p>
      </footer>
    </main>
  );
}

// Yardımcı Input Bileşeni (Hizalama Sorunlarını Giderir)
function StyledInput({ label, placeholder, type = "text", icon }: any) {
  return (
    <div className="space-y-4 group">
      <div className="flex items-center gap-3 text-neutral-500 ml-1 group-focus-within:text-blue-400 transition-colors">
        {icon}
        <label className="text-[10px] font-black uppercase tracking-widest text-white/90">{label}</label>
      </div>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full bg-neutral-950/60 border border-neutral-800 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all shadow-inner" 
      />
    </div>
  );
}