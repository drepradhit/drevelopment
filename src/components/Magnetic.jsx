import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Magnetic({ children }) {
    const ref = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(ref.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(ref.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouse = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);

            xTo(middleX * 0.35);
            yTo(middleY * 0.35);
        };

        const reset = () => {
            xTo(0);
            yTo(0);
        };

        const element = ref.current;
        element.addEventListener('mousemove', handleMouse);
        element.addEventListener('mouseleave', reset);

        return () => {
            element.removeEventListener('mousemove', handleMouse);
            element.removeEventListener('mouseleave', reset);
        };
    }, []);

    return (
        <div ref={ref} className="relative inline-block">
            {children}
        </div>
    );
}
