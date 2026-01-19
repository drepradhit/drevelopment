import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        number: '01',
        title: 'Lightning Performance',
        description: 'Website cepat, SEO-optimized untuk ranking Google.',
    },
    {
        number: '02',
        title: 'Direct Communication',
        description: 'Chat langsung dengan developer. Tanpa perantara.',
    },
    {
        number: '03',
        title: 'Scalable Architecture',
        description: 'Kode modular, mudah dikembangkan seiring bisnis tumbuh.',
    },
    {
        number: '04',
        title: 'Unique Brand Identity',
        description: 'Desain custom, bukan template. Mencerminkan brand Anda.',
    },
];

const WhyChooseUs = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo(headerRef.current,
                {
                    autoAlpha: 0,
                    y: 80,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 85%',
                    }
                }
            );

            // Cards Animation
            gsap.fromTo(cardsRef.current,
                {
                    autoAlpha: 0,
                    y: 40, // Reduced distance
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.6, // Faster duration
                    stagger: 0.05, // Almost simultaneous
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%', // Triggers earlier
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-cream">
            <div className="container-wide">

                {/* Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">The Difference</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
                        Kenapa harus <span className="text-accent">drevelopment</span>?
                    </h2>
                    <p className="text-xl text-text-muted leading-relaxed">
                        Kami fokus pada hasil jangka panjang. Kualitas kode, kecepatan, dan desain yang tak lekang oleh waktu.
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="group bg-white p-5 md:p-10 rounded-3xl border border-transparent hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 w-full hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* Badge */}
                            <div
                                className="text-sm font-bold text-accent mb-4 md:mb-6 px-3 py-1 bg-accent/10 w-fit rounded-full transition-transform duration-300 group-hover:scale-105 origin-left"
                            >
                                {item.number}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-xl md:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-text-muted text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
