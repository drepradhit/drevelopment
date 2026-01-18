import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Lazy load below-the-fold components for faster LCP
const Services = lazy(() => import('../components/Services'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Process = lazy(() => import('../components/Process'));
const Pricing = lazy(() => import('../components/Pricing'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <Hero />

            <Suspense fallback={null}>
                <Services />
                <WhyChooseUs />
                <Process />
                <Pricing />
                <Footer />
            </Suspense>
        </main>
    );
};

export default Home;
