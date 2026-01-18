import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingChat = () => {
    const phoneNumber = '6285121021364';
    const message = 'Halo, saya tertarik untuk membuat website/UI design!';
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 group"
        >
            <div className="relative">
                {/* Pulse Ring */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />

                {/* Main Button */}
                <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-7 h-7 text-white fill-white" />
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap pointer-events-none">
                    Chat WhatsApp
                </div>
            </div>
        </a>
    );
};

export default FloatingChat;
