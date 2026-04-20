"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Database, Mail, Briefcase, Building2, ChevronRight, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import ProjectsSlider from "./components/ProjectsSlider"; // Slider bileşenini çağırıyoruz

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30 relative overflow-hidden">
      
      {/* Ortak Arka Plan Işıkları */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

      {/* --- 1. NAVBAR (SABİT MENÜ) --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-neutral-950/70 backdrop-blur-xl border-b border-white/5"
      >
        <div className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Q
          </div>
          QODLIX
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <Link href="#firmalar" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Building2 size={16} /> Firmalar / Şirketler
          </Link>
          <Link href="#hizmetler" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Briefcase size={16} /> Hizmetler
          </Link>
          <a href="https://github.com/goktugarikci" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
            <FaGithub size={16} /> Github Reposu
          </a>
        </div>

        {/* Aksiyon Butonları */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/ekibe-katil" className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors">
            Ekibe Katıl
          </Link>
          <Link href="#iletisim" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all flex items-center gap-2 text-sm font-semibold shadow-lg backdrop-blur-sm">
            <Mail size={16} /> Bize Ulaşın
          </Link>
        </div>
      </motion.nav>

      {/* --- 2. HERO (KARŞILAMA) ALANI --- */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Qodlix Sistemleri Aktif
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
            Geleceğin Altyapısını <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Bugünden İnşa Ediyoruz.
            </span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Yüksek performanslı backend mimarilerinden, donanım seviyesindeki entegrasyonlara ve modern arayüzlere kadar uçtan uca yazılım çözümleri.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
          <Link href="#hizmetler" className="px-8 py-3.5 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
            Sistemleri İncele <ChevronRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* --- 3. FİRMALAR & ŞİRKETLER (Infinite Marquee) --- */}
      <section id="firmalar" className="py-16 relative z-10 bg-neutral-900/20 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-sm font-semibold text-neutral-500 tracking-widest uppercase">Güvenen Şirketler & Partnerler</p>
        </div>
        <div className="flex w-[200%] md:w-full overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1035] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex items-center gap-16 md:gap-32 whitespace-nowrap px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {/* Temsili Firma İsimleri - Burayı ileride logolarla değiştirebilirsin */}
            <h3 className="text-2xl font-bold font-serif">TechCorp</h3>
            <h3 className="text-2xl font-black tracking-tighter">GLOBAL<span className="text-blue-500">NET</span></h3>
            <h3 className="text-2xl font-light tracking-widest">NEXUS</h3>
            <h3 className="text-xl font-bold">DataSys ERP</h3>
            <h3 className="text-2xl font-bold font-serif">TechCorp</h3>
            <h3 className="text-2xl font-black tracking-tighter">GLOBAL<span className="text-blue-500">NET</span></h3>
            <h3 className="text-2xl font-light tracking-widest">NEXUS</h3>
            <h3 className="text-xl font-bold">DataSys ERP</h3>
          </motion.div>
        </div>
      </section>

      {/* --- 4. PROJELER SLIDER --- */}
      <div className="pt-24 pb-12" id="projeler">
        <ProjectsSlider />
      </div>

      {/* --- 5. HİZMETLER --- */}
      <section id="hizmetler" className="py-24 relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Uçtan Uca <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Çözümler</span></h2>
          <p className="text-neutral-400">İhtiyaca özel, ölçeklenebilir ve yüksek performanslı sistem mimarileri.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Terminal size={32} className="text-blue-400" />}
            title="Ağır Sanayi Backend"
            desc="C++ ve Rust kullanarak bellek dostu, sıfır gecikmeli sunucu mimarileri ve donanım entegrasyonları geliştiriyorum."
          />
          <ServiceCard 
            icon={<Code2 size={32} className="text-purple-400" />}
            title="Masaüstü & Web Uygulamaları"
            desc="React, Next.js ve Tauri kullanarak performanstan ödün vermeden platformlar arası, modern ve akıcı arayüzler tasarlıyorum."
          />
          <ServiceCard 
            icon={<Database size={32} className="text-emerald-400" />}
            title="Kapsamlı ERP/SaaS Modülleri"
            desc="Şirketler için nakit akışı, kurye takibi, envanter ve personel yönetimini otomatize eden güvenli veri altyapıları kuruyorum."
          />
        </div>
      </section>

      {/* --- 6. BİZE ULAŞIN (İLETİŞİM) --- */}
      <section id="iletisim" className="py-24 relative z-10 bg-neutral-900/30 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projeyi Başlatalım</h2>
          <p className="text-neutral-400 mb-10">Sistem altyapısı, modül geliştirmesi veya danışmanlık için detayları paylaşın.</p>
          
          <form className="max-w-xl mx-auto flex flex-col gap-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
              <input type="email" placeholder="E-posta Adresiniz" className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
            <input type="text" placeholder="Konu (Örn: SaaS Projesi İçin Fiyatlandırma)" className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            <textarea rows={4} placeholder="Proje detaylarından veya ihtiyacınızdan bahsedin..." className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
            
            <button type="button" className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/25">
              Mesajı Gönder <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-neutral-600 text-sm border-t border-white/5 relative z-10">
        © {new Date().getFullYear()} Qodlix. Tüm hakları saklıdır.
      </footer>

    </main>
  );
}

// Hizmetler Kartı Alt Bileşeni
function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all group">
      <div className="w-16 h-16 rounded-xl bg-neutral-950 flex items-center justify-center mb-6 shadow-inner border border-neutral-800 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}