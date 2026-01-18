import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2600&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'FinTech App UI',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Architecture Studio',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Food Delivery App',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2681&auto=format&fit=crop',
    },
];

const Portfolio = () => {
    const containerRef = useRef(null);
    const projectsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.portfolio-header', {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            gsap.from(projectsRef.current, {
                opacity: 0,
                y: 80,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="portfolio" className="section-padding bg-white relative">
            <div className="container-wide">
                {/* Header */}
                <div className="portfolio-header flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div>
                        <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
                        <h2 className="heading-xl text-primary">
                            Project <span className="text-text-light">Terbaru</span>
                        </h2>
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold group">
                        <span className="border-b-2 border-accent pb-0.5 group-hover:border-primary transition-colors">Lihat Semua</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Projects Grid - Simple */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={project.id}
                            href="#"
                            ref={(el) => (projectsRef.current[index] = el)}
                            className="group block"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10] bg-cream">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                                {/* Arrow Button */}
                                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    <ArrowUpRight className="w-5 h-5 text-primary" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-muted">{project.category}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
