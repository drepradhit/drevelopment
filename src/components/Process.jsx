import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'Kami mulai dengan memahami bisnis, target audience, dan goals yang ingin dicapai.',
    },
    {
        number: '02',
        title: 'Design',
        description: 'Membuat wireframe dan mockup yang sesuai dengan brand identity dan user needs.',
    },
    {
        number: '03',
        title: 'Development',
        description: 'Coding dengan teknologi modern. Clean code, optimized, dan responsive.',
    },
    {
        number: '04',
        title: 'Deployment',
        description: 'Testing menyeluruh, deployment, dan website siap menerima pengunjung!',
    },
];

const Process = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const lineRef = useRef(null);
    const stepsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headerRef.current, {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 85%',
                }
            });

            gsap.from(lineRef.current, {
                scaleY: 0,
                transformOrigin: 'top',
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 50%',
                    end: 'bottom 70%',
                    scrub: 1,
                }
            });

            stepsRef.current.forEach((step, i) => {
                if (step) {
                    const isLeft = i % 2 === 0;
                    gsap.from(step, {
                        opacity: 0,
                        x: isLeft ? -80 : 80,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: step,
                            start: 'top 80%',
                        }
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="process" className="py-24 md:py-32 bg-cream overflow-hidden">
            <div className="container-wide">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-20 md:mb-28">
                    <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Process</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                        Bagaimana kami bekerja.
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Center Line */}
                    <div
                        ref={lineRef}
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-accent rounded-full origin-top"
                    />

                    {/* Steps */}
                    <div className="space-y-20 md:space-y-32">
                        {steps.map((step, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (stepsRef.current[index] = el)}
                                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                        <div className="bg-primary rounded-3xl p-8 md:p-10 text-white group hover:scale-[1.02] transition-transform duration-300">
                                            <span className="text-6xl md:text-7xl font-black text-accent block mb-2">{step.number}</span>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                                            <p className="text-white/70 text-lg leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full z-10 items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full" />
                                    </div>

                                    {/* Empty Space for other side */}
                                    <div className="hidden md:block w-[45%]" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
