import React, { Suspense, lazy, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Lazy load below-the-fold components for faster LCP
const Services = lazy(() => import('../components/Services'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Process = lazy(() => import('../components/Process'));
const Pricing = lazy(() => import('../components/Pricing'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
    const [pricingTab, setPricingTab] = useState('web');

    const handleViewPackage = (tab) => {
        setPricingTab(tab);
        // Small delay to ensure state update propagates (though usually fast enough)
        setTimeout(() => {
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 10);
    };

    return (
        <main className="overflow-hidden">
            <Navbar />
            <Hero />

            <Suspense fallback={null}>
                <Services onViewPackage={handleViewPackage} />
                <WhyChooseUs />
                <Process />
                <Pricing activeTab={pricingTab} setActiveTab={setPricingTab} />
                <Footer />
            </Suspense>
        </main>
    );
};

export default Home;
