"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center px-1 sm:px-4 py-12 sm:py-20">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src="/arcavon.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black tracking-[0.05em] sm:tracking-[0.1em] font-[family-name:var(--font-hanuman)] select-none text-[#00c2ff] drop-shadow-[0_0_25px_rgba(0,194,255,0.6)]"
        >
          ARCAVON
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.15em] uppercase mt-4 sm:mt-6 md:mt-8 max-w-xl px-4 font-[family-name:var(--font-inter)]"
        >
          Beyond games. Building worlds and community.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 sm:mt-12 md:mt-16 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link href="/services" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-md border border-[#00c2ff] bg-[#00c2ff] text-black font-bold tracking-widest hover:bg-[#00c2ff]/80 hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all uppercase text-xs sm:text-sm md:text-base font-[family-name:var(--font-bunken)]">
              Explore Services
            </button>
          </Link>

          <Link href="/games" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-md border border-[#00c2ff]/50 text-[#00c2ff] font-bold tracking-widest hover:bg-[#00c2ff]/10 hover:border-[#00c2ff] transition-all uppercase text-xs sm:text-sm md:text-base font-[family-name:var(--font-bunken)]">
              Explore Games
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-16 md:bottom-20 z-20 text-[#00c2ff]"
      >
        <div className="p-2 rounded-full border border-[#00c2ff]/30">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </motion.div>
    </div>
  );
}
