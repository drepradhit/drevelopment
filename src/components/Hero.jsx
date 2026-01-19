import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const skyRef = useRef(null);
    const midRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Initial Entrance - Instant, no fade
            const tl = gsap.timeline();

            // City rises immediately from below (no opacity, no delay)
            tl.from(midRef.current, { y: 300, duration: 2, ease: "power2.out" }, 0);

            // Text appears instantly with just a small slide-up
            tl.from(titleRef.current, { y: 30, duration: 0.8, ease: "power2.out" }, 0);




            // Mid ground moves at medium speed
            gsap.to(midRef.current, {
                yPercent: 40,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });


            // Content moves slightly faster than background to float
            gsap.to(contentRef.current, {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const whatsappNumber = '6285121021364';
    const whatsappMessage = 'Halo drevelopment, saya mau konsultasi gratis nih. Boleh diskusi sebentar?';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section
            ref={containerRef}
            className="h-screen bg-cream flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 perspective-1000"
        >
            {/* Parallax Layers */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* 1. Sky Removed - Background is now bg-cream */}

                {/* 2. User-Provided City Layer - Responsive Images */}
                <picture>
                    <source media="(max-width: 768px)" srcSet="/images/city.png" />
                    <img
                        ref={midRef}
                        src="/images/city.png"
                        alt="City Skyline"
                        className="absolute bottom-0 left-0 w-full h-[55svh] object-cover object-bottom md:h-auto md:max-h-[80vh] md:object-center z-20"
                    />
                </picture>
            </div>

            {/* Main Content */}
            <div ref={contentRef} className="container-wide relative z-10 will-change-transform -mt-20 md:-mt-32">
                <div className="text-center max-w-6xl mx-auto">

                    <div className="flex flex-col items-center justify-center mb-8 md:mb-12 w-full">
                        {/* Title - Centered */}
                        <div className="relative">
                            <h1 className="font-black leading-none tracking-tighter font-['Poppins'] text-[12.5vw] sm:text-8xl md:text-[10rem] text-transparent bg-clip-text bg-gradient-to-b from-primary to-black drop-shadow-2xl opacity-90">
                                DREVELOPMENT
                            </h1>
                        </div>

                        {/* Mobile Subtext - Redesigned as Premium Pill */}
                        <div className="mt-8 md:hidden animate-fade-in-up delay-300 px-4">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl border border-accent/20 rounded-full shadow-2xl shadow-accent/10 mx-auto transform transition-transform hover:scale-105">
                                <CheckCircle2 className="w-5 h-5 text-accent fill-accent/10" />
                                <span className="text-[15px] font-bold text-primary tracking-wide">
                                    Website <span className="text-accent">Premium</span>. Harga <span className="text-accent">Minimum</span>.
                                </span>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </section>
    );
};

export default Hero;
