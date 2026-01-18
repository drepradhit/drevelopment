import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Split and animate text
            gsap.from([line1Ref.current, line2Ref.current], {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="section-padding bg-cream relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[30vw] font-black text-primary/[0.02] leading-none whitespace-nowrap">
                    LET'S TALK
                </span>
            </div>

            <div className="container-wide relative z-10">
                <div className="text-center" ref={textRef}>
                    <div className="overflow-hidden mb-4">
                        <h2 ref={line1Ref} className="heading-display text-primary">
                            HAVE A PROJECT
                        </h2>
                    </div>
                    <div className="overflow-hidden mb-16">
                        <h2 ref={line2Ref} className="heading-display text-text-light">
                            IN MIND?
                        </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#contact"
                            className="group px-12 py-5 bg-primary text-white rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-accent transition-colors"
                            data-cursor-text="SEND"
                        >
                            Start a Project
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <a
                            href="mailto:hello@buildwithandre.com"
                            className="text-primary font-medium border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors"
                        >
                            hello@buildwithandre.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
