import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
                .from(".hero-badge", { scale: 0, opacity: 0, stagger: 0.2, duration: 0.8 }, "-=0.6")
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
            className="min-h-screen bg-cream flex items-center justify-center relative overflow-hidden pt-12 md:pt-24"
        >
            <div className="container-wide relative z-10">
                <div className="text-center max-w-5xl mx-auto">

                    {/* Title */}
                    <h1
                        ref={titleRef}
                        className="text-6xl md:text-7xl lg:text-8xl font-black text-primary leading-[1] mb-8 tracking-tight"
                    >
                        Website Premium.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">Budget Minimum.</span>
                    </h1>

                    {/* Subtitle */}
                    <div ref={subtitleRef} className="max-w-3xl mx-auto mb-12">
                        <p className="text-xl md:text-2xl text-primary/80 font-medium leading-relaxed mb-6">
                            Kualitas Agensi, Harga Freelance. Bangun kredibilitas bisnis Anda dengan website profesional.
                        </p>

                        {/* Key Benefits - Rapi & Menarik */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-primary font-semibold text-lg">
                            <span className="hero-badge flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg shadow-gray-100/50 border border-gray-100">
                                <CheckCircle2 className="w-5 h-5 text-accent" /> Cepat
                            </span>
                            <span className="hero-badge flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg shadow-gray-100/50 border border-gray-100">
                                <CheckCircle2 className="w-5 h-5 text-accent" /> Elegan
                            </span>
                            <span className="hero-badge flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg shadow-gray-100/50 border border-gray-100">
                                <CheckCircle2 className="w-5 h-5 text-accent" /> Murah
                            </span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-10 py-4 bg-primary text-white rounded-full font-bold text-xl flex items-center gap-3 hover:bg-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300"
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
