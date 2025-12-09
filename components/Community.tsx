"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function Community() {
    return (
        <section id="community" className="relative w-full py-20 md:py-24 px-6 md:px-12 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

                {/* Text */}
                <div className="text-left space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-[#00c2ff]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wider font-[family-name:var(--font-hanuman)]">
                        THE ARCAVON COMMUNITY
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 tracking-wide max-w-md font-[family-name:var(--font-inter)]">
                        A Social Space for Players, Creators & Developers.
                    </p>
                    <p className="text-lg md:text-xl text-[#00c2ff] font-bold tracking-widest mt-4 animate-pulse font-[family-name:var(--font-chakra)]">
                        COMING SOON !!
                    </p>
                </div>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 md:px-8 py-3 md:py-4 border border-[#00c2ff]/50 rounded-md text-[#00c2ff] font-bold tracking-[0.2em] hover:bg-[#00c2ff]/10 hover:border-[#00c2ff] hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-all uppercase text-xs sm:text-sm md:text-base font-[family-name:var(--font-bunken)]"
                >
                    Get Early Access
                </motion.button>
            </div>
        </section>
    );
}