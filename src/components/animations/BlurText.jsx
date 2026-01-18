import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BlurText = ({
    children,
    className = '',
    delay = 0,
    duration = 0.8,
    animateBy = 'words' // 'words' or 'chars'
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const text = children;
        const elements = animateBy === 'chars'
            ? text.split('').map((char, i) =>
                char === ' ' ? '<span class="inline-block">&nbsp;</span>' : `<span class="inline-block blur-text-char">${char}</span>`
            ).join('')
            : text.split(' ').map((word, i) =>
                `<span class="inline-block blur-text-word mr-[0.25em]">${word}</span>`
            ).join('');

        container.innerHTML = elements;

        const spans = container.querySelectorAll('.blur-text-char, .blur-text-word');

        gsap.fromTo(spans,
            {
                opacity: 0,
                filter: 'blur(10px)',
                y: 20
            },
            {
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
                duration: duration,
                stagger: 0.05,
                delay: delay,
                ease: 'power3.out',
            }
        );
    }, [children, delay, duration, animateBy]);

    return (
        <span ref={containerRef} className={className}>
            {children}
        </span>
    );
};

export default BlurText;
