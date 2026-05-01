"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Send, User, Mail, Briefcase, Terminal, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import { submitApplication } from "../actions"; // <--- Sunucu fonksiyonunu içeri aktardık

export default function JoinTheTeam() {
  const expertises = [
    "C++ System Developer",
    "Rust & Tauri Specialist",
    "Next.js Architecture",
    "DevOps & Infrastructure"
  ];

  // Formun durumunu takip edeceğimiz state'i ekledik
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Form gönderildiğinde çalışacak fonksiyon
  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    const result = await submitApplication(formData);
    
    if (result.success) {
      setStatus("success");
      // 5 saniye sonra butonu eski haline getir
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30 relative overflow-x-hidden">
      
      <Navbar />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 pt-40 pb-24 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto">
        
        <div className="text-center mb-16 md:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none"
          >
            QODLIX <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">EKİBİ</span>
          </motion.h1>
          <div className="inline-flex items-center gap-3 text-neutral-500 uppercase tracking-[0.3em] text-xs font-bold">
            <span className="w-8 h-px bg-neutral-800" />
            Başvuru Formu
            <span className="w-8 h-px bg-neutral-800" />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl relative max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12 relative z-10">
            <div className="w-12 h-1.5 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.6)]" />
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase italic">
              Terminal Girişi
            </h2>
          </div>

          {/* FORM'A ACTION EKLENDİ */}
          <form action={handleSubmit} className="space-y-8 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputGroup name="fullName" label="Tam Adınız" placeholder="Ad Soyad" icon={<User size={20} />} required /> 
              <InputGroup name="email" label="E-posta Adresi" placeholder="email@qodlix.com" type="email" icon={<Mail size={20} />} required />
            </div>

            <CustomSelectGroup 
              name="expertise"
              label="Uzmanlık Alanı" 
              options={expertises} 
              icon={<Terminal size={20} />} 
              placeholder="Bir alan seçin..." 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <InputGroup name="github" label="GitHub Profil" placeholder="github.com/..." icon={<FaGithub size={20} />} required />
              <InputGroup name="linkedin" label="LinkedIn Profil" placeholder="linkedin.com/..." icon={<FaLinkedin size={20} />} required />
            </div>

            <div className="space-y-3 group mt-8">
              <div className="flex items-center gap-3 text-neutral-400 ml-1 group-focus-within:text-indigo-500 transition-colors">
                <Briefcase size={20} />
                <label className="text-sm font-bold uppercase tracking-wider">Kapak Mektubu</label>
              </div>
              <textarea 
                name="coverLetter"
                required
                rows={5} 
                placeholder="Vizyonunuzdan ve projelerinizden bahsedin..." 
                className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white text-base placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none shadow-inner leading-relaxed"
              />
            </div>

            {/* BUTON DURUMLARI EKLENDİ */}
            <motion.button 
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-10 py-5 bg-white hover:bg-blue-600 text-black hover:text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-4 transition-all shadow-lg group text-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "TERMİNALE BAĞLANILIYOR..." : status === "success" ? "BAŞVURU ONAYLANDI!" : "BAŞVURU YAP"}
              <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            
            {status === "error" && (
              <p className="text-red-500 text-center text-sm font-bold mt-4">Bir hata oluştu. Veritabanı bağlantınızı kontrol edin.</p>
            )}

          </form>
        </motion.div>
      </div>
    </main>
  );
}

// YARDIMCI BİLEŞENLER (Değişiklik olarak 'required' prop'u eklendi)
function InputGroup({ label, placeholder, type = "text", icon, name, required }: any) {
  return (
    <div className="space-y-3 group">
      <div className="flex items-center gap-3 text-neutral-400 ml-1 group-focus-within:text-blue-500 transition-colors">
        {icon}
        <label className="text-sm font-bold uppercase tracking-wider">{label}</label>
      </div>
      <input 
        name={name}
        type={type} 
        required={required}
        placeholder={placeholder} 
        className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white text-base placeholder:text-neutral-700 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-inner font-medium" 
      />
    </div>
  );
}

function CustomSelectGroup({ label, options, icon, placeholder, name }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  
  return (
    <div className="space-y-3 group relative z-50">
      <input type="hidden" name={name} value={selected} required />

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
              initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl z-50 py-2"
            >
              {options.map((opt: string) => (
                <div 
                  key={opt}
                  onClick={() => { setSelected(opt); setIsOpen(false); }}
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