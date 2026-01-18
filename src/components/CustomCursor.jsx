import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState('');

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8,
                ease: 'power3.out'
            });
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
        };

        const handleMouseEnter = (e) => {
            const target = e.target.closest('a, button, [data-cursor]');
            if (target) {
                setIsHovering(true);
                const text = target.getAttribute('data-cursor-text') || '';
                setCursorText(text);

                gsap.to(cursor, {
                    scale: text ? 4 : 2,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
            setCursorText('');
            gsap.to(cursor, {
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, []);

    return (
        <>
            {/* Main Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <div className={`w-full h-full rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 ${isHovering ? 'bg-white' : 'bg-transparent'}`}>
                    {cursorText && (
                        <span className="text-[8px] font-bold text-black uppercase tracking-wider">{cursorText}</span>
                    )}
                </div>
            </div>

            {/* Cursor Dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </>
    );
};

export default CustomCursor;
