"use client";

import { motion } from "framer-motion";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <section className="px-6 md:px-12 max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-5xl text-white font-bold tracking-wider mb-12 ${michroma.className}`}
        >
          About Us
        </motion.h1>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-10"
        >
          <p className="text-gray-300 leading-loose tracking-[0.15em] text-sm md:text-base uppercase font-medium">
            Arcavon is a game-tech company focused on crafting immersive, story-driven games while building the technology and platforms that power the next generation of interactive experiences. From sci-fi worlds and AI-driven systems to robust backend and community tools, Arcavon sits at the intersection of gaming and technology.
          </p>

          <p className="text-gray-300 leading-loose tracking-[0.15em] text-sm md:text-base uppercase font-medium">
            Beyond making games, Arcavon is building a dedicated community for game and game-dev enthusiasts—students, aspiring developers, designers, and artists—to learn, collaborate, and showcase their work. Through events, game jams, resources, and a growing platform, Arcavon aims to give the Indian gaming ecosystem the push it needs to compete on a global stage.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
