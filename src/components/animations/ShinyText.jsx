import React from 'react';

const ShinyText = ({
    children,
    className = '',
    shimmerWidth = 100,
    speed = 2
}) => {
    return (
        <>
            <style>
                {`
          @keyframes shine {
            0% { background-position: -${shimmerWidth}% 0; }
            100% { background-position: ${shimmerWidth * 2}% 0; }
          }
        `}
            </style>
            <span
                className={`relative inline-block ${className}`}
                style={{
                    background: `linear-gradient(
            90deg, 
            currentColor 0%,
            currentColor 40%,
            #FF4D00 50%,
            currentColor 60%,
            currentColor 100%
          )`,
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: `shine ${speed}s linear infinite`,
                }}
            >
                {children}
            </span>
        </>
    );
};

export default ShinyText;
