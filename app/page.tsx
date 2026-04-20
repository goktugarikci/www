"use client";

import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Send, 
  Terminal, 
  Code2, 
  Database, 
  Mail, 
  User, 
  Cpu 
} from "lucide-react";
import Link from "next/link";

// Bileşenleri import ediyoruz
import Navbar from "./components/Navbar";
import ProjectsSlider from "./components/ProjectsSlider";

// Teknoloji Listemiz
const technologies = [
  "C++", "C#", "Rust", "Python", "MSSQL", "MYSQL", "MongoDB", "SQLite", "Java", "GoLang"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30 relative overflow-x-hidden">
      
      {/* 1. NAVIGASYON */}
      <Navbar />

      {/* Arka Plan Dekoratif Işıklar */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

      {/* 2. HERO (KARŞILAMA) ALANI */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
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
          Yüksek performanslı backend mimarilerinden, Rust/Tauri masaüstü sistemlerine ve modern SaaS arayüzlerine kadar uçtan uca yazılım çözümleri.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
          <Link href="#projeler" className="px-8 py-3.5 rounded-xl bg-white text-black font-bold hover:bg-blue-500 hover:text-white transition-all w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg active:scale-95">
            Projeleri İncele <ChevronRight size={18} />
          </Link>
          <Link href="/ekibe-katil" className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center gap-2 active:scale-95">
            Ekibe Katıl
          </Link>
        </motion.div>
      </section>

      {/* 3. FİRMALAR & ŞİRKETLER */}
      <section id="firmalar" className="py-16 relative z-10 border-y border-white/5 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold text-neutral-500 tracking-widest uppercase">Güvenen Şirketler & Partnerler</p>
          </div>
          
          {/* Orantılı Padding ve Kenar Radiant Efekti Eklendi */}
          <div className="overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                className="flex items-center gap-16 md:gap-32 px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
              >
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex items-center gap-16 md:gap-32">
                    <h3 className="text-2xl font-bold font-serif">TechCorp</h3>
                    <h3 className="text-2xl font-black tracking-tighter">GLOBAL<span className="text-blue-500">NET</span></h3>
                    <h3 className="text-2xl font-light tracking-widest">NEXUS</h3>
                    <h3 className="text-xl font-bold">DataSys ERP</h3>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJELER SLIDER */}
      <section id="projeler" className="pt-16 pb-12">
        <ProjectsSlider />
      </section>

      {/* 5. HİZMETLER (UÇTAN UCA ÇÖZÜMLER) */}
      <section id="hizmetler" className="pt-24 pb-16 relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Uçtan Uca <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Çözümler</span></h2>
          <p className="text-neutral-400">İhtiyaca özel, ölçeklenebilir ve yüksek performanslı sistem mimarileri.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Terminal size={32} className="text-blue-400" />}
            title="Sistem & Backend"
            desc="C++ ve Rust ile bellek dostu, düşük gecikmeli sunucu mimarileri ve donanım seviyesinde entegrasyonlar."
          />
          <ServiceCard 
            icon={<Code2 size={32} className="text-purple-400" />}
            title="Modern Arayüzler"
            desc="Next.js ve Tauri kullanarak performanstan ödün vermeden platformlar arası, akıcı ve şık kullanıcı deneyimleri."
          />
          <ServiceCard 
            icon={<Database size={32} className="text-emerald-400" />}
            title="ERP & SaaS Çözümleri"
            desc="Şirketler için nakit akışı, kurye takibi ve personel yönetimini otomatize eden güvenli veri altyapıları."
          />
        </div>
      </section>
      <br />

      {/* 6. KULLANILAN TEKNOLOJİLER (PADDİNG VE RADİANT EKLENDİ) */}
      <section className="py-21 relative z-20 border-y border-white/5 bg-neutral-900/30 shadow-3xl">
        {/* Ortaya hizalama ve sağ/sol boşluk (Orantı) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h4 className="text-2xl md:text-2xl font-bold text-white mb-4 text-center">Kullanılan  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">Teknolojiler</span></h4>
      
          {/* Sağ ve soldan yumuşakça kaybolma (Mask Image Radiant Efekti) */}
          <div className="overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                className="flex items-center"
              >
                {[...technologies, ...technologies].map((tech, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase tracking-[0.2em] px-8 md:px-12 cursor-default drop-shadow-sm">
                      {tech}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. BİZE ULAŞIN (İLETİŞİM) */}
      <section id="iletisim" className="py-24 relative z-10 bg-neutral-900/20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projeyi Başlatalım</h2>
          <p className="text-neutral-400 mb-12 leading-relaxed">Sistem altyapısı, SaaS modülü geliştirme veya danışmanlık süreçleri için detayları paylaşabilirsiniz.</p>
          
          <form className="max-w-2xl mx-auto flex flex-col gap-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Ad Soyad Input */}
              <div className="space-y-3 group">
                <div className="flex items-center gap-2 text-neutral-500 ml-1 group-focus-within:text-blue-400 transition-colors">
                  <User size={16} />
                  <label className="text-[11px] font-black uppercase tracking-widest">Ad Soyad</label>
                </div>
                <input type="text" placeholder="Adınız" className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all shadow-inner" />
              </div>

              {/* E-posta Input */}
              <div className="space-y-3 group">
                <div className="flex items-center gap-2 text-neutral-500 ml-1 group-focus-within:text-blue-400 transition-colors">
                  <Mail size={16} />
                  <label className="text-[11px] font-black uppercase tracking-widest">E-posta</label>
                </div>
                <input type="email" placeholder="example@qodlix.com" className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all shadow-inner" />
              </div>

            </div>
            
            {/* Mesaj Input */}
            <div className="space-y-3 group">
              <div className="flex items-center gap-2 text-neutral-500 ml-1 group-focus-within:text-blue-400 transition-colors">
                <Terminal size={16} />
                <label className="text-[11px] font-black uppercase tracking-widest">Mesajınız</label>
              </div>
              <textarea rows={5} placeholder="Projenizden veya ihtiyacınızdan bahsedin..." className="w-full bg-neutral-950/50 border border-neutral-800 rounded-2xl px-6 py-4 text-white placeholder:text-neutral-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all resize-none shadow-inner"></textarea>
            </div>
            
            {/* Gönder Butonu */}
            <button type="button" className="w-full mt-2 bg-white hover:bg-blue-600 text-black hover:text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl active:scale-[0.98] group">
              Mesajı Gönder 
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-12 text-center border-t border-white/5 relative z-10">
        <div className="text-xl font-black tracking-tighter mb-4 opacity-30">QODLIX</div>
        <p className="text-neutral-600 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Qodlix. Tüm hakları saklıdır.
        </p>
      </footer>

    </main>
  );
}

// Hizmet Kartı Alt Bileşeni
function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all group relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Cpu size={80} />
      </div>
      <div className="w-16 h-16 rounded-xl bg-neutral-950 flex items-center justify-center mb-6 shadow-inner border border-neutral-800 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}