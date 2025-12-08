"use client";

import { motion } from "framer-motion";
import { Michroma } from "next/font/google";
import { Palette, Play, Bug, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const michroma = Michroma({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-michroma",
});

const services = [
    {
        icon: <Palette className="w-12 h-12 text-[#00c2ff]" />,
        title: "2D Art",
        features: ["Character Design", "Concept Art", "UI / UX Design"],
        more: "& more .....",
    },
    {
        icon: <Play className="w-12 h-12 text-[#00c2ff]" />,
        title: "3D Art & Animation",
        features: ["Environment Design", "Cinematic Sequences", "Trailers"],
        more: "& more .....",
    },
    {
        icon: <Bug className="w-12 h-12 text-[#00c2ff]" />,
        title: "Game Testing",
        features: ["QA Testing", "Bug Testing", "UX Testing"],
        more: "& more .....",
    },
];

export default function ServicesPage() {
    const [formData, setFormData] = useState({
        service: "2D Art",
        name: "",
        email: "",
        comment: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Form submitted:", formData);
        setSubmitted(true);
        setIsSubmitting(false);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ service: "2D Art", name: "", email: "", comment: "" });
        }, 3000);
    };

    return (
        <main className="min-h-screen bg-black pt-24 pb-16">
            {/* What We Offer Section */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`text-3xl md:text-5xl text-white font-bold tracking-wider mb-16 ${michroma.className}`}
                >
                    What We Offer ?
                </motion.h1>

                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative p-8 border border-[#00c2ff]/40 rounded-xl bg-gradient-to-b from-[#0f0f0f] to-black hover:border-[#00c2ff] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(0,194,255,0.15)] hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="p-4 rounded-full border border-[#00c2ff]/30 bg-[#00c2ff]/5 group-hover:bg-[#00c2ff]/10 transition-all">
                                    {service.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className={`text-xl md:text-2xl text-[#00c2ff] font-bold text-center tracking-widest mb-8 ${michroma.className}`}>
                                {service.title}
                            </h3>

                            {/* Features List */}
                            <ul className="space-y-4 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300 tracking-wider uppercase text-sm">
                                        <Check className="w-5 h-5 text-[#00c2ff] flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* More */}
                            <p className="text-[#00c2ff] tracking-widest uppercase text-sm mt-auto">
                                {service.more}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full max-w-lg bg-gradient-to-b from-[#0f0f0f] to-black p-8 md:p-12 rounded-2xl border border-[#00c2ff]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                >
                    <h2 className={`text-2xl md:text-3xl text-white font-bold tracking-wider mb-10 text-center ${michroma.className}`}>
                        Let&apos;s Work Together !
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Service Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    type="button"
                                    className="w-full px-6 py-4 bg-[#00c2ff] text-black font-bold rounded-full border-2 border-[#00c2ff] outline-none cursor-pointer text-center tracking-wider text-sm md:text-base hover:bg-[#00c2ff]/90 transition-all shadow-[0_0_15px_rgba(0,194,255,0.3)] flex items-center justify-between"
                                >
                                    <span className="flex-1 text-center">{formData.service}</span>
                                    <ChevronDown className="w-5 h-5 ml-2" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[calc(100vw-3rem)] max-w-lg bg-black/95 backdrop-blur-xl border border-[#00c2ff]/30 rounded-xl p-2"
                                sideOffset={8}
                            >
                                {["2D Art", "3D Art & Animation", "Game Testing"].map((service) => (
                                    <DropdownMenuItem
                                        key={service}
                                        onClick={() => setFormData({ ...formData, service })}
                                        className={`px-4 py-3 rounded-lg cursor-pointer transition-all tracking-wider text-sm ${formData.service === service
                                            ? "bg-[#00c2ff] text-black font-bold"
                                            : "text-gray-300 hover:bg-[#00c2ff]/20 hover:text-white"
                                            }`}
                                    >
                                        {service}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Name Input */}
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full px-6 py-4 bg-transparent text-white border border-white/30 rounded-full outline-none focus:border-[#00c2ff] focus:shadow-[0_0_10px_rgba(0,194,255,0.2)] transition-all placeholder:text-gray-500"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full px-6 py-4 bg-transparent text-white border border-white/30 rounded-full outline-none focus:border-[#00c2ff] focus:shadow-[0_0_10px_rgba(0,194,255,0.2)] transition-all placeholder:text-gray-500"
                            />
                        </div>

                        {/* Comment Textarea */}
                        <div>
                            <textarea
                                placeholder="Comment"
                                value={formData.comment}
                                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                rows={5}
                                className="w-full px-6 py-4 bg-transparent text-white border border-white/30 rounded-2xl outline-none focus:border-[#00c2ff] focus:shadow-[0_0_10px_rgba(0,194,255,0.2)] transition-all placeholder:text-gray-500 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <motion.button
                                type="submit"
                                disabled={isSubmitting || submitted}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-10 py-3 rounded-full font-bold tracking-widest transition-all text-sm ${submitted
                                    ? "bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                    : "bg-[#00c2ff] text-black hover:shadow-[0_0_25px_rgba(0,194,255,0.5)]"
                                    }`}
                            >
                                {isSubmitting ? "Sending..." : submitted ? "Sent!" : "Send"}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </section>
        </main>
    );
}
