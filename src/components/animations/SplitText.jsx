import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SplitText = ({
    children,
    className = '',
    delay = 0,
    duration = 0.05,
    ease = 'power3.out',
    stagger = 0.03,
    animateBy = 'chars' // 'chars' or 'words'
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const text = children;
        const elements = animateBy === 'chars'
            ? text.split('').map((char, i) =>
                char === ' ' ? '<span class="inline-block">&nbsp;</span>' : `<span class="inline-block opacity-0 translate-y-[100%]">${char}</span>`
            ).join('')
            : text.split(' ').map((word, i) =>
                `<span class="inline-block opacity-0 translate-y-[100%] mr-2">${word}</span>`
            ).join('');

        container.innerHTML = elements;

        const spans = container.querySelectorAll('span');

        gsap.to(spans, {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: stagger,
            delay: delay,
            ease: ease,
        });
    }, [children, delay, duration, ease, stagger, animateBy]);

    return (
        <span ref={containerRef} className={`inline-block overflow-hidden ${className}`}>
            {children}
        </span>
    );
};

export default SplitText;
