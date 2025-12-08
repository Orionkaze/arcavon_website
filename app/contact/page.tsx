"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Michroma } from "next/font/google";

const michroma = Michroma({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-michroma",
});

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if response is JSON
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Server error. Please try again later.');
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
            }, 3000);
        } catch (err) {
            console.error('Contact form error:', err);
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-black pt-24 pb-16">
            <section className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`text-3xl md:text-5xl text-white font-bold tracking-wider mb-16 ${michroma.className}`}
                >
                    Contact Us
                </motion.h1>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-lg bg-gradient-to-b from-[#0f0f0f] to-black p-8 md:p-12 rounded-2xl border border-[#00c2ff]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                >
                    <form onSubmit={handleSubmit} className="space-y-5">
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

                        {/* Message Textarea */}
                        <div>
                            <textarea
                                placeholder="Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                required
                                className="w-full px-6 py-4 bg-transparent text-white border border-white/30 rounded-2xl outline-none focus:border-[#00c2ff] focus:shadow-[0_0_10px_rgba(0,194,255,0.2)] transition-all placeholder:text-gray-500 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col items-center gap-4 pt-4">
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

                            {error && (
                                <p className="text-red-500 text-sm text-center">{error}</p>
                            )}
                        </div>
                    </form>
                </motion.div>
            </section>
        </main>
    );
}
