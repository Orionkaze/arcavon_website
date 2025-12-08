"use client";

import { Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black border-t border-white/10 py-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                    {/* Instagram - Gradient pink */}
                    <Link href="#" className="text-white hover:text-[#E4405F] transition-colors duration-300">
                        <Instagram className="w-6 h-6" />
                    </Link>
                    {/* X (Twitter) - White/Light gray */}
                    <Link href="#" className="text-white hover:text-gray-400 transition-colors duration-300">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                    {/* YouTube - Red */}
                    <Link href="#" className="text-white hover:text-[#FF0000] transition-colors duration-300">
                        <Youtube className="w-6 h-6" />
                    </Link>
                    {/* LinkedIn - Blue */}
                    <Link href="#" className="text-white hover:text-[#0A66C2] transition-colors duration-300">
                        <Linkedin className="w-6 h-6" />
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-xs md:text-sm tracking-wide">
                    &copy; {currentYear} ARCAVON. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
