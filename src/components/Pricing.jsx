import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Check, ArrowRight } from 'lucide-react';

const pricingData = {
    web: [
        {
            name: 'Portfolio Personal',
            price: '150k',
            period: '/project',
            description: 'Perfect untuk freelancer atau fresh graduate.',
            features: ['1 Halaman Responsive', 'SEO Basic Setup', 'Free Hosting', 'Modern Design', 'Revisi Minor 2x'],
        },
        {
            name: 'Landing Page',
            price: '300k',
            period: '/project',
            description: 'Fokus konversi penjualan. Cocok untuk UMKM.',
            features: ['High Conversion Design', 'Copywriting Structure', 'Integrasi WhatsApp', 'Speed Optimization', 'SEO Friendly', 'Revisi Major 1x'],
        },
        {
            name: 'Company Profile',
            price: '500k',
            period: '/project',
            description: 'Bangun kredibilitas bisnis Anda secara profesional.',
            features: ['Hingga 5 Halaman', 'Design Premium', 'Contact Form & Maps', 'Basic Dashboard Admin', 'SEO Advanced', 'Priority Support'],
        }
    ],
    uiux: [
        {
            name: 'UI Design Only',
            price: '75k',
            period: '/halaman',
            description: 'Visual design per halaman aplikasi/web.',
            features: ['High Fidelity Mockup', 'Modern Aesthetic', 'Source File (Figma)', 'Export Assets', 'Revisi 2x'],
        },
        {
            name: 'Full Prototyping',
            price: '150k',
            period: '/halaman',
            description: 'Desain interaktif seperti aplikasi sungguhan.',
            features: ['Include UI Design', 'Interactive Flow', 'Smart Animate Transitions', 'Presentation Mode', 'User Testing Ready'],
        }
    ]
};

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('web');
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    // Removed GSAP entrance animation that caused glitches
    // useLayoutEffect(() => { ... }, [activeTab]);

    return (
        <section id="pricing" className="py-24 bg-cream relative overflow-hidden">
            <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                        Pilih Paket Terbaik
                    </h2>
                    <p className="text-text-muted text-lg leading-relaxed mb-10">
                        Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
                    </p>

                    {/* Tab Switcher */}
                    <div className="inline-flex bg-white p-1.5 rounded-full border border-border/50 shadow-sm">
                        <button
                            onClick={() => setActiveTab('web')}
                            className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'web'
                                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                                : 'text-text-muted hover:text-primary hover:bg-gray-50'
                                }`}
                        >
                            Web Development
                        </button>
                        <button
                            onClick={() => setActiveTab('uiux')}
                            className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'uiux'
                                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                                : 'text-text-muted hover:text-primary hover:bg-gray-50'
                                }`}
                        >
                            UI/UX Design
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className={`grid gap-6 ${activeTab === 'web' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'} max-w-6xl mx-auto`}>
                    {pricingData[activeTab].map((plan, index) => (
                        <div
                            key={plan.name}
                            ref={el => cardsRef.current[index] = el}
                            className="group relative bg-white rounded-[2rem] p-8 border border-border/50 transition-all duration-500 hover:border-accent hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/15 flex flex-col h-full"
                        >
                            {/* Hover Top Line */}
                            <div className="absolute top-0 left-10 right-10 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-full" />

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">{plan.name}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-end gap-1">
                                    <span className="text-text-muted font-medium pb-2">Rp</span>
                                    <span className="text-5xl font-black text-primary tracking-tight">{plan.price}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-text-muted group/item">
                                        <div className="mt-0.5 p-1 rounded-full bg-cream group-hover:bg-accent/10 transition-colors duration-300">
                                            <Check className="w-3 h-3 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={3} />
                                        </div>
                                        <span className="group-hover/item:text-primary transition-colors duration-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/6285121021364?text=${encodeURIComponent(
                                    `Halo drevelopment, saya tertarik untuk memilih paket *${plan.name}* (${activeTab === 'web' ? 'Web Development' : 'UI/UX Design'}).\n\nBisa tolong jelaskan detailnya? Terima kasih!`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-primary text-white transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/20"
                            >
                                <span>Pilih Paket</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
