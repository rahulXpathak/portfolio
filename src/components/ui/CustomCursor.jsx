import React, { useState, useEffect, useCallback, useMemo } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Check if touch device on initial render
    const isTouchDevice = useMemo(() => {
        if (typeof window === 'undefined') return true;
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }, []);

    const handleMouseMove = useCallback((e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }, []);

    const handleMouseDown = useCallback(() => setIsClicking(true), []);
    const handleMouseUp = useCallback(() => setIsClicking(false), []);

    const handleMouseOver = useCallback((e) => {
        const target = e.target;
        const isInteractive =
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.closest('a') ||
            target.closest('button') ||
            target.classList.contains('cursor-pointer') ||
            window.getComputedStyle(target).cursor === 'pointer';

        setIsHovering(isInteractive);
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

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
    }, [isTouchDevice, handleMouseMove, handleMouseDown, handleMouseUp, handleMouseOver]);

    // Don't render on touch devices
    if (isTouchDevice) return null;

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
