import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Instagram, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(footerRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 90%',
                }
            });
        }, footerRef);
        return () => ctx.revert();
    }, []);

    const currentYear = new Date().getFullYear();
    const whatsappLink = `https://wa.me/6285121021364?text=${encodeURIComponent('Halo drevelopment, saya mau konsultasi nih. Boleh diskusi sebentar?')}`;

    return (
        <footer ref={footerRef} className="bg-cream pt-20 pb-10">
            <div className="container-wide">
                <div className="bg-white rounded-[3rem] p-5 md:p-16 border border-border/50 shadow-xl shadow-gray-100/50">

                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20">

                        {/* Left Side: Brand & Socials */}
                        <div className="text-center md:text-left max-w-md">
                            <a href="/" className="inline-block mb-6">
                                <img
                                    src="/images/Logo Drevelopment No BG.png"
                                    alt="Drevelopment Logo"
                                    className="h-10 md:h-20 w-auto object-contain mx-auto md:mx-0"
                                />
                            </a>
                            <p className="text-text-muted text-sm md:text-lg leading-relaxed mb-8">
                                Membangun website & UI/UX premium yang terpercaya untuk pertumbuhan bisnis Anda.
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-cream hover:bg-primary hover:text-white transition-all duration-300">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-cream hover:bg-primary hover:text-white transition-all duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:hello@drevelopment.id" className="w-12 h-12 flex items-center justify-center rounded-full bg-cream hover:bg-primary hover:text-white transition-all duration-300">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Right Side: CTA */}
                        <div className="text-center md:text-right flex flex-col items-center md:items-end">
                            <h3 className="text-2xl font-bold text-primary mb-4">Punya ide project?</h3>
                            <p className="text-text-muted mb-8 max-w-xs md:ml-auto">
                                Yuk diskusi santai. Konsultasi gratis kok!
                            </p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                            >
                                <span>Chat WhatsApp</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-sm text-center md:text-left">
                        <p>&copy; {currentYear} <span className="font-semibold text-primary">drevelopment</span>. All rights reserved.</p>
                        <p>Developed by <a href="https://drepradhit.me/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-accent transition-colors">Andre Pradhit</a></p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
