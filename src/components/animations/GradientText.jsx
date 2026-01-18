import React from 'react';

const GradientText = ({
    children,
    className = '',
    colors = ['#FF4D00', '#FF8533', '#FFB366'],
    animationSpeed = 3,
    showBorder = false
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`,
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: `gradient-scroll ${animationSpeed}s linear infinite`,
    };

    const borderStyle = showBorder ? {
        border: '2px solid transparent',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        boxShadow: `0 0 20px ${colors[0]}40`,
    } : {};

    return (
        <>
            <style>
                {`
          @keyframes gradient-scroll {
            0% { background-position: 0% center; }
            100% { background-position: -200% center; }
          }
        `}
            </style>
            <span
                className={className}
                style={{ ...gradientStyle, ...borderStyle }}
            >
                {children}
            </span>
        </>
    );
};

export default GradientText;
