import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({
    children,
    className = '',
    direction = 'up', // 'up', 'down', 'left', 'right'
    delay = 0,
    duration = 1,
    distance = 60,
    threshold = 0.2
}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const directions = {
            up: { y: distance, x: 0 },
            down: { y: -distance, x: 0 },
            left: { x: distance, y: 0 },
            right: { x: -distance, y: 0 },
        };

        const { x, y } = directions[direction];

        gsap.fromTo(element,
            { opacity: 0, x, y },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: `top ${100 - threshold * 100}%`,
                    toggleActions: 'play none none none',
                }
            }
        );
    }, [direction, delay, duration, distance, threshold]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

export default FadeIn;
