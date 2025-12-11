import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on non-touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(isInteractive);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Inner dot */}
            <div
                className="fixed pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`
            rounded-full bg-white transition-all duration-150 ease-out
            ${isClicking ? 'w-2 h-2' : 'w-3 h-3'}
            ${isHovering ? 'opacity-0' : 'opacity-100'}
          `}
                />
            </div>

            {/* Outer ring */}
            <div
                className="fixed pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    left: position.x,
                    top: position.y,
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.3s, height 0.3s, opacity 0.3s',
                }}
            >
                <div
                    className={`
            rounded-full border-2 border-white transition-all duration-300 ease-out
            ${isHovering ? 'w-16 h-16 bg-white/10' : 'w-8 h-8'}
            ${isClicking ? 'scale-75' : 'scale-100'}
          `}
                />
            </div>

            {/* Global cursor hide style */}
            <style>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
