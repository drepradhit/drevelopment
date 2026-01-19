import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './pages/Home';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // ====== iOS Safari + Instagram WebView Viewport Fix ======
    function setVH() {
      // Use visualViewport if available (more accurate for in-app browsers)
      const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Run immediately
    setVH();

    // Listen to multiple events for maximum compatibility
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    // visualViewport API for Instagram/in-app browsers
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setVH);
    }

    // ====== Lenis Smooth Scroll ======
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setVH);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <Home />
    </div>
  );
}

export default App;
