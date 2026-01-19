import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
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


            // Parallax Effects


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
            className="h-ig-safe bg-cream flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 perspective-1000"
        >
            {/* Parallax Layers */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {/* 1. Sky Layer REMOVED as requested */}

                {/* 2. User-Provided City Layer - Responsive Images */}
                <picture>
                    <source media="(max-width: 768px)" srcSet="/images/city.webp" />
                    <img
                        ref={midRef}
                        src="/images/city.webp"
                        alt="City Skyline of Bandung"
                        fetchpriority="high"
                        className="absolute bottom-0 left-0 w-full h-[70%] object-cover object-bottom md:h-auto md:max-h-[80vh] md:object-center z-20"
                    />
                </picture>
            </div>

            {/* Main Content */}
            <div ref={contentRef} className="container-wide relative z-10 will-change-transform -mt-20 md:-mt-32">
                <div className="text-center max-w-6xl mx-auto">

                    <div className="flex flex-col items-center justify-center mb-8 md:mb-12 w-full">
                        {/* Title - Centered */}
                        <div className="relative">
                            <h1 className="font-black leading-none tracking-tighter font-['Poppins'] text-[12.5vw] sm:text-8xl md:text-[10rem] text-primary drop-shadow-xl">
                                DREVELOPMENT
                            </h1>
                        </div>
                    </div>




                </div>
            </div>
        </section>
    );
};

export default Hero;
