import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Initial Entrance
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(titleRef.current, { y: 100, opacity: 0, duration: 1.2 })
                .from(subtitleRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.8")
                .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const whatsappNumber = '6285121021364';
    const whatsappMessage = 'Halo drevelopment, saya mau konsultasi gratis nih. Boleh diskusi sebentar?';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section
            ref={containerRef}
            className="min-h-screen bg-cream flex items-center justify-center relative overflow-hidden pt-20 md:pt-24"
        >
            <div className="container-wide relative z-10">
                <div className="text-center max-w-6xl mx-auto">

                    <div className="flex flex-col items-center justify-center mb-8 md:mb-12 w-full">
                        {/* Title - Centered */}
                        <div ref={titleRef} className="flex flex-col justify-center text-center">
                            <div className="relative">
                                <h1 className="font-black leading-none tracking-tight font-['Poppins'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                                    <span className="block text-primary">WEBSITE PREMIUM.</span>
                                    <span className="block text-accent mt-2">HARGA MINIMUM.</span>
                                </h1>
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
                            className="group px-8 py-4 bg-primary text-white rounded-full font-semibold tracking-wide text-base md:text-lg flex items-center gap-3 hover:bg-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <span>Konsultasi Gratis</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
