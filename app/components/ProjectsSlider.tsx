"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Proje verileri
const projects = [
  {
    id: 1,
    title: "Age of Hearth & Steel",
    description: "PvE/PvP odaklı, paylaşımlı dünya ve base-building mekaniklerine sahip, 30 oyunculu sunucu mimarisiyle desteklenen oyun konsepti.",
    techStack: ["C++ Backend", "Steam Inventory", "Game Design Document"],
    gradient: "from-orange-500/20 to-red-900/20",
    border: "border-orange-500/30",
  },
  {
    id: 2,
    title: "Essential",
    description: "Hafif ve yüksek performanslı masaüstü arayüzüne sahip, WebSocket haberleşmeli modern iletişim ve Kanban yönetim sistemi.",
    techStack: ["Rust", "Tauri", "React", "C++"],
    gradient: "from-purple-500/20 to-pink-900/20",
    border: "border-purple-500/30",
  },
  {
    id: 3,
    title: "ERP/CRM SaaS Modülü",
    description: "Kapsamlı ERP sistemleri için geliştirilmiş; anlık kurye takibi, personel ve nakit akışı yönetimi sağlayan dinamik SaaS modülü.",
    techStack: ["Next.js", "API Entegrasyonu", "Veritabanı Mimarisi"],
    gradient: "from-blue-500/20 to-cyan-900/20",
    border: "border-blue-500/30",
  },
  {
    id: 4,
    title: "Genel Kültür Mobil App",
    description: "Bilim, tarih ve felsefe kategorilerinde 2300'den fazla benzersiz soru içeren, JSON formatında yapılandırılmış quiz uygulaması altyapısı.",
    techStack: ["JSON", "Veri Modelleme", "Backend API"],
    gradient: "from-emerald-500/20 to-teal-900/20",
    border: "border-emerald-500/30",
  }
];

export default function ProjectsSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  return (
    <section className="py-24 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Öne Çıkan Sistemler <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projeler</span>
        </h2>
        <p className="text-neutral-400 text-lg">Geliştirilmiş modüller, altyapılar ve konsept tasarımlar.</p>
      </div>

      <div className="overflow-hidden w-full pl-6 md:pl-12" ref={emblaRef}>
        <div className="flex gap-6 pb-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 bg-neutral-900/50 backdrop-blur-sm border ${project.border} rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-neutral-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                  <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                    <FaGithub size={16} /> Repo
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors">
                    <ExternalLink size={16} /> İncele
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}