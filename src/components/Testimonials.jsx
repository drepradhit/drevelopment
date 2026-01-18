import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        name: 'Sarah Chen',
        role: 'CEO, TechStart',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
        content: 'Hasil kerja mereka luar biasa! Website kami jadi lebih profesional dan banyak client yang terkesan.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Michael Rodriguez',
        role: 'Founder, BrandX',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
        content: 'Prosesnya cepat dan komunikasinya enak banget. Revisi juga dikerjain dengan sat-set. Recommended!',
        rating: 5,
    },
    {
        id: 3,
        name: 'Amanda Wijaya',
        role: 'Owner, StyleBox',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
        content: 'Dari awal sudah jelas scope kerjanya. Website saya sekarang jadi lebih modern dan responsive.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Budi Santoso',
        role: 'Marketing Manager',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
        content: 'Impact ke sales kerasa banget setelah redesign website. UI/UX nya bener-bener dipikirin matang.',
        rating: 5,
    }
];

// Duplicate data for infinite scroll illusion
const marqueeData = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
    const containerRef = useRef(null);
    const marqueeRef = useRef(null);
    const headerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(headerRef.current, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 85%',
                }
            });

            // Infinite Marquee Animation
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 40, // Adjust speed here (higher = slower)
                ease: "linear",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-cream relative overflow-hidden">

            {/* Header */}
            <div className="container-wide mb-16 md:mb-24">
                <div ref={headerRef} className="text-center">
                    <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary max-w-2xl mx-auto leading-tight">
                        Apa kata <span className="text-accent">klien</span> kami?
                    </h2>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade out edges */}
                <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-cream to-transparent z-10 hidden md:block" />
                <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-cream to-transparent z-10 hidden md:block" />

                <div
                    ref={marqueeRef}
                    className="flex gap-8 w-fit px-4"
                >
                    {marqueeData.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="flex-shrink-0 w-[350px] md:w-[450px] p-8 md:p-10 bg-white rounded-[2rem] border border-transparent hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 group"
                        >
                            {/* Header: Avatar, Name, Rating */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-transparent group-hover:border-accent transition-all duration-300"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white">
                                            <Quote className="w-3 h-3 fill-current" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary leading-tight">{item.name}</h4>
                                        <span className="text-sm text-text-muted">{item.role}</span>
                                    </div>
                                </div>

                                <div className="flex gap-0.5">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <p className="text-lg text-primary/80 leading-relaxed font-medium">
                                "{item.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
