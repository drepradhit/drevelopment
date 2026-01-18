import { Layout, Code, Rocket, Smartphone } from 'lucide-react';
import React from 'react';

export const services = [
    {
        icon: <Code className="w-8 h-8 text-white" />,
        title: "Website Development",
        description: "Custom websites built with React & Tailwind CSS. Fast, scalable, and secure.",
        color: "bg-indigo-500"
    },
    {
        icon: <Layout className="w-8 h-8 text-white" />,
        title: "UI/UX Design",
        description: "Modern, clean, and user-friendly designs that provide the best experience.",
        color: "bg-cyan-500"
    },
    {
        icon: <Rocket className="w-8 h-8 text-white" />,
        title: "Performance & SEO",
        description: "Optimized for speed and search engines to help your business grow.",
        color: "bg-amber-500"
    },
    {
        icon: <Smartphone className="w-8 h-8 text-white" />,
        title: "Responsive Design",
        description: "Looks perfect on any device - mobile, tablet, and desktop.",
        color: "bg-emerald-500"
    }
];
