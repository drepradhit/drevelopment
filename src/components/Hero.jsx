import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    const words = [
        "Landing Page",
        "Company Profile",
        "Personal Portfolio",
        "UI/UX Design",
        "Prototyping"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 5000); // Change text every 5 seconds
        return () => clearInterval(interval);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Initial Entrance
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(titleRef.current, { y: 100, opacity: 0, duration: 1.2 })
                .from(subtitleRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.8")
                .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");

            // Floating animation removed per user request

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const whatsappNumber = '6285121021364';
    const whatsappMessage = 'Halo drevelopment, saya mau konsultasi gratis nih. Boleh diskusi sebentar?';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section
            ref={containerRef}
            className="min-h-screen bg-cream flex items-center justify-center relative overflow-hidden pt-4 md:pt-24"
        >
            <div className="container-wide relative z-10">
                <div className="text-center max-w-6xl mx-auto">

                    <div className="flex flex-col items-center justify-center mb-8 md:mb-12 w-full">
                        {/* Logo Group - Mobile Only */}
                        <div className="mb-6 md:hidden">
                            <img
                                src="/images/Logo Drevelopment No BG.png"
                                alt="Drevelopment Logo"
                                className="h-24 w-auto object-contain mx-auto"
                            />
                        </div>

                        {/* Title - Centered */}
                        <div ref={titleRef} className="flex flex-col justify-center text-center">
                            <div className="relative">
                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key={index}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -30, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600 leading-tight tracking-tight font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
                                    >
                                        {words[index]}
                                    </motion.h1>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Subtitle */}
                    <div ref={subtitleRef} className="max-w-3xl mx-auto mb-12">
                        <p className="text-base md:text-2xl text-primary/80 font-medium leading-relaxed mb-6">
                            Kualitas Agensi, Harga Freelance. Bangun kredibilitas bisnis Anda dengan website profesional.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-6 py-3 md:px-10 md:py-4 bg-primary text-white rounded-full font-bold text-base md:text-xl flex items-center gap-2 md:gap-3 hover:bg-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
                        >
                            <span>Konsultasi Gratis</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
