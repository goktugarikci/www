"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Send, User, Mail, Cpu, ArrowLeft, Terminal, Briefcase, Code2 } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar"; // Navbar'ı en üste ekliyoruz

export default function JoinTheTeam() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30 relative overflow-x-hidden">
      
      {/* 1. NAVIGASYON (Üstte Sabit) */}
      <Navbar />

      {/* Arka Plan Dekoratif Işıklar */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

      {/* 2. ANA İÇERİK KONTEYNERI */}
      <div className="relative z-10 pt-32 pb-24 px-6 md:px-20 lg:px-40 xl:px-64">
        
        {/* Geri Dön Butonu (Mobil ve Web için Ekstra Navigasyon) */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-all group">
            <div className="p-2 bg-white/5 rounded-full border border-white/10 group-hover:bg-white/10">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Ana Sayfaya Dön</span>
          </Link>
        </motion.div>

        {/* Başlık Bölümü */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            QODLIX <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 underline decoration-blue-500/20 underline-offset-8">EKİBİNE</span> KATIL
          </motion.h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Sistem mimarisi, düşük seviyeli programlama ve modern arayüzler üzerine odaklanan vizyonumuza ortak olun.
          </p>
        </div>

        {/* 3. FORM ALANI (Merkezi Odak) */}
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-neutral-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
          >
            {/* Dekoratif Köşe İkonu */}
            <div className="absolute top-8 right-8 text-white/5 rotate-12">
              <Cpu size={120} />
            </div>

            <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="w-10 h-1 bg-blue-500 rounded-full" />
              BAŞVURU TERMİNALİ
            </h2>

            <form className="space-y-8 relative z-10">
              {/* Ad Soyad & E-posta */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <StyledInput label="Ad Soyad" placeholder="Adınız" icon={<User size={18} />} />
                <StyledInput label="E-posta" placeholder="example@qodlix.com" type="email" icon={<Mail size={18} />} />
              </div>

              {/* Rol & Pozisyon Seçimi */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-neutral-500 ml-1">
                  <Terminal size={14} className="text-blue-500" />
                  <label className="text-[11px] font-black uppercase tracking-[0.2em]">İlgilendiğiniz Alan</label>
                </div>
                <select className="w-full bg-neutral-950/60 border border-neutral-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all appearance-none cursor-pointer">
                  <option>C++ System Developer</option>
                  <option>Rust & Tauri Specialist</option>
                  <option>Next.js Frontend Architect</option>
                  <option>Full-Stack SaaS Developer</option>
                </select>
              </div>

              {/* Sosyal Linkler */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <StyledInput label="GitHub" placeholder="github.com/..." icon={<FaGithub size={18} />} />
                <StyledInput label="LinkedIn" placeholder="linkedin.com/in/..." icon={<FaLinkedin size={18} />} />
              </div>

              {/* Mesaj / Notlar */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-neutral-500 ml-1">
                  <Briefcase size={14} className="text-purple-500" />
                  <label className="text-[11px] font-black uppercase tracking-[0.2em]">Kapak Mektubu</label>
                </div>
                <textarea 
                  rows={4} 
                  placeholder="Kısaca kendinizden ve teknik yetkinliklerinizden bahsedin..." 
                  className="w-full bg-neutral-950/60 border border-neutral-800 rounded-[1.5rem] px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all resize-none"
                />
              </div>

              {/* Gönder Butonu */}
              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-5 bg-white hover:bg-blue-600 text-black hover:text-white font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl active:shadow-inner group"
              >
                Başvuruyu Gönder 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// Alt Bileşen: Stilize Edilmiş Etiketli Input
function StyledInput({ label, placeholder, type = "text", icon }: any) {
  return (
    <div className="space-y-3 group">
      <div className="flex items-center gap-2 text-neutral-500 ml-1 group-focus-within:text-blue-400 transition-colors">
        {icon}
        <label className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</label>
      </div>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full bg-neutral-950/60 border border-neutral-800 rounded-2xl px-5 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all" 
      />
    </div>
  );
}