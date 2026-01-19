import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappNumber = '6285121021364'; // Updated number per context if needed, preserving existing
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo drevelopment, saya mau konsultasi nih. Boleh diskusi sebentar?')}`;

    return (
        <header className="block fixed top-0 left-0 right-0 z-50 p-4">
            <nav
                className={`mx-auto transition-all duration-500 ${isScrolled
                    ? 'max-w-2xl rounded-full px-6 py-3 bg-white/60 backdrop-blur-2xl shadow-lg border border-white/30'
                    : 'max-w-5xl rounded-2xl px-8 py-4 bg-transparent'
                    }`}
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    {/* Top Row on Mobile: Logo and WhatsApp */}
                    <div className="w-full md:w-auto flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#hero"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="transition-all duration-300 flex items-center cursor-pointer"
                        >
                            <img
                                src={isScrolled ? "/images/Logo Drevelopment No BG.png" : "/images/logo hero.png"}
                                alt="Drevelopment Logo"
                                className={`object-contain transition-all duration-300 -mt-1.5 ${isScrolled ? 'h-8 md:h-12' : 'h-10 md:h-16'}`}
                            />
                        </a>

                        {/* WhatsApp Button - Visible on Mobile too (Icon only or compacted) */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`md:hidden inline-flex items-center gap-2 bg-primary text-white font-medium rounded-full hover:bg-accent transition-all px-3 py-1.5 text-xs`}
                        >
                            <span>Chat</span>
                            <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </div>

                    {/* Navigation Links - Centered on Desktop, Row on Mobile */}
                    <div className="hidden md:flex items-center justify-center gap-6 md:absolute md:left-1/2 md:-translate-x-1/2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`hover:text-accent transition-colors font-medium text-sm md:text-base ${isScrolled ? 'text-primary md:text-sm' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* WhatsApp Button - Desktop */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hidden md:inline-flex items-center gap-2 bg-primary text-white font-medium rounded-full hover:bg-accent transition-all ${isScrolled ? 'px-4 py-2 text-sm' : 'px-5 py-2.5'
                            }`}
                    >
                        <span>WhatsApp</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
