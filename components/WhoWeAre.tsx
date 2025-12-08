"use client";

import { motion } from "framer-motion";
import { Michroma } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const michroma = Michroma({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-michroma",
});

export default function WhoWeAre() {
    return (
        <section id="about" className="relative w-full py-16 md:py-20 px-6 md:px-12 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Header with View More */}
                <div className="flex justify-between items-start mb-12 md:mb-16">
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wider ${michroma.className}`}>
                        Who We Are ?
                    </h2>
                    <Link href="/about" className="text-[#00c2ff] text-xs md:text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest whitespace-nowrap">
                        View More <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className={`text-gray-400 leading-[1.8] tracking-wider text-[11px] md:text-s uppercase font-normal ${michroma.className}`}>
                            Arcavon is a game-tech company<br />
                            building high-quality, story-<br />
                            driven games and tools from<br />
                            India for the world.<br />
                            We blend cutting-edge<br />
                            technology, gameplay, and<br />
                            community to create experiences<br />
                            where players and creators<br />
                            grow together.
                        </p>
                    </motion.div>

                    {/* Graphic/Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center items-center relative"
                    >
                        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                            <Image
                                src="/arcavon_logo.png"
                                alt="Arcavon Logo"
                                fill
                                className="object-contain drop-shadow-[0_0_30px_rgba(0,194,255,0.4)]"
                                priority
                                unoptimized
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}