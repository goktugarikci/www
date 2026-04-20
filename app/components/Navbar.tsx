"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Building2, Briefcase, Users } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { nav } from "framer-motion/m";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Firmalar", href: "/", icon: <Building2 size={18} /> },
    { name: "Hizmetler", href: "/", icon: <Briefcase size={18} /> },
    { name: "Ekibe Katıl", href: "/", icon: <Users size={18} /> },
  ];

  return (
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
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Building2 size={16} /> Firmalar / Şirketler
          </Link>
          <Link href="/#hizmetler" className="hover:text-white transition-colors flex items-center gap-1.5">
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
          <Link href="/#iletisim" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all flex items-center gap-2 text-sm font-semibold shadow-lg backdrop-blur-sm">
            <Mail size={16} /> Bize Ulaşın
          </Link>
        </div>
      </motion.nav>
  );
}