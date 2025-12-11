import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.animation - Animation type: 'fade-up', 'fade-left', 'fade-right', 'scale', 'fade'
 * @param {number} options.delay - Animation delay in ms
 * @param {boolean} options.once - Whether to trigger only once
 */
export const useScrollReveal = ({
    threshold = 0.1,
    animation = 'fade-up',
    delay = 0,
    once = true,
} = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (once && hasAnimated) return;

                    setTimeout(() => {
                        setIsVisible(true);
                        setHasAnimated(true);
                    }, delay);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, delay, once, hasAnimated]);

    // Animation class mappings
    const animationClasses = {
        'fade-up': {
            hidden: 'opacity-0 translate-y-8',
            visible: 'opacity-100 translate-y-0',
        },
        'fade-down': {
            hidden: 'opacity-0 -translate-y-8',
            visible: 'opacity-100 translate-y-0',
        },
        'fade-left': {
            hidden: 'opacity-0 translate-x-8',
            visible: 'opacity-100 translate-x-0',
        },
        'fade-right': {
            hidden: 'opacity-0 -translate-x-8',
            visible: 'opacity-100 translate-x-0',
        },
        'scale': {
            hidden: 'opacity-0 scale-95',
            visible: 'opacity-100 scale-100',
        },
        'fade': {
            hidden: 'opacity-0',
            visible: 'opacity-100',
        },
    };

    const classes = animationClasses[animation] || animationClasses['fade-up'];
    const animationClass = isVisible ? classes.visible : classes.hidden;

    return {
        ref,
        isVisible,
        animationClass,
        style: {
            transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        },
    };
};

export default useScrollReveal;
