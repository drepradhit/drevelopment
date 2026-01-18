import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappNumber = '6285121021364';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo drevelopment, saya mau konsultasi nih. Boleh diskusi sebentar?')}`;

    return (
        <header className="hidden md:block fixed top-0 left-0 right-0 z-50 p-4">
            <nav
                className={`mx-auto transition-all duration-500 ${isScrolled
                    ? 'max-w-2xl rounded-full px-6 py-3 bg-white/80 backdrop-blur-xl shadow-lg'
                    : 'max-w-5xl rounded-2xl px-8 py-4 bg-transparent'
                    }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="/"
                        className="transition-all duration-300 flex items-center"
                    >
                        <img
                            src="/images/Logo Drevelopment No BG.png"
                            alt="Drevelopment Logo"
                            className={`object-contain transition-all duration-300 -mt-1.5 ${isScrolled ? 'h-12' : 'h-16'}`}
                        />
                    </a>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center justify-center gap-6 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-primary hover:text-accent transition-colors font-medium ${isScrolled ? 'text-sm' : ''
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* WhatsApp Button - Right */}
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-primary"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 mt-4 pt-4' : 'max-h-0'
                        }`}
                >
                    <div className="space-y-3 bg-white rounded-xl p-4 shadow-lg">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-base font-medium text-primary hover:text-accent transition-colors py-2 text-center"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-full font-medium hover:bg-accent transition-colors mt-2"
                        >
                            <span>Chat WhatsApp</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
