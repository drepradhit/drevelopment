import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
    {
        title: 'Web Development',
        description: 'Website cepat, SEO-ready, siap convert pengunjung jadi pelanggan.',
        price: 'Mulai Rp 300rb',
        tags: ['Landing Page', 'Company Profile', 'Toko Online'],
    },
    {
        title: 'UI/UX Design',
        description: 'Desain modern yang bikin customer jatuh cinta dan mudah digunakan.',
        price: 'Mulai Rp 75rb',
        tags: ['Visual Design', 'Prototype', 'User Testing'],
    },
];

const Services = () => {
    const whatsappBase = 'https://wa.me/6285121021364?text=';

    return (
        <section id="services" className="py-20 bg-cream">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header Section */}
                {/* Header Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-6xl font-bold font-display leading-tight mb-6 text-primary">
                        Layanan Kami <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
                            Solusi Digital Bisnis.
                        </span>
                    </h2>
                    <p className="text-text-muted text-lg md:text-xl leading-relaxed mx-auto max-w-2xl">
                        Membangun website dan desain aplikasi yang fungsional untuk kebutuhan Anda.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-12 shadow-xl hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 relative group border border-gray-100/50"
                        >
                            {/* Top Row: Number & Price Badge */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="text-5xl md:text-6xl font-black text-gray-100 select-none">
                                    0{index + 1}
                                </div>
                                <div className="px-4 py-1.5 bg-transparent border-2 border-accent text-accent font-bold rounded-full text-sm">
                                    {service.price}
                                </div>
                            </div>

                            {/* Title & Desc */}
                            <h3 className="text-xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                                {service.title}
                            </h3>

                            <p className="text-text-muted text-lg leading-relaxed mb-10">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-4 mb-12">
                                {service.tags.map((tag, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-primary font-medium">{tag}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer: CTA & Arrow */}
                            <div className="flex items-center justify-between mt-auto">
                                <a
                                    href={`${whatsappBase}${encodeURIComponent(`Halo, saya tertarik konsultasi layanan ${service.title}.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-bold text-lg group-hover:text-accent transition-colors flex items-center gap-2"
                                >
                                    Konsultasi Sekarang
                                </a>
                                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
