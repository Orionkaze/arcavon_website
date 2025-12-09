"use client";

import { motion } from "framer-motion";
import { Michroma } from "next/font/google";

const michroma = Michroma({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-michroma",
});

export default function Community() {
    return (
        <section id="community" className="relative w-full py-24 px-6 md:px-12 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

                {/* Text */}
                <div className="text-left space-y-4">
                    <h2 className={`text-3xl md:text-4xl text-white font-bold tracking-wider ${michroma.className}`}>
                        THE ARCAVON COMMUNITY
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base tracking-wide max-w-md">
                        A Social Space for Players, Creators & Developers.
                    </p>
                    <p className="text-[#00c2ff] text-xl font-bold tracking-widest mt-4 animate-pulse font-[family-name:var(--font-chakra)]">
                        COMING SOON !!
                    </p>
                </div>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-[#00c2ff]/50 rounded-md text-[#00c2ff] font-bold tracking-[0.2em] hover:bg-[#00c2ff]/10 hover:border-[#00c2ff] hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-all uppercase font-[family-name:var(--font-bunken)]"
                >
                    Get Early Access
                </motion.button>
            </div>
        </section>
    );
}
