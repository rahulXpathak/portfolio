import React from 'react';

/**
 * Premium Button Component with multiple variants
 * Features: Gradient borders, glow effects, magnetic hover, ripple effect
 */
const PremiumButton = ({
    children,
    href,
    onClick,
    variant = 'primary', // 'primary', 'secondary', 'ghost', 'glow'
    size = 'md', // 'sm', 'md', 'lg'
    icon: Icon,
    iconPosition = 'right',
    className = '',
    download,
    target,
    disabled = false,
    ...props
}) => {
    const baseClasses = `
    group relative inline-flex items-center justify-center font-bold tracking-wider
    overflow-hidden transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:-translate-y-1 active:scale-95
  `;

    const sizeClasses = {
        sm: 'px-4 py-2 text-xs gap-2',
        md: 'px-6 py-3 text-sm gap-2',
        lg: 'px-8 py-4 text-base gap-3',
    };

    const variants = {
        // Primary: Gradient border with inner glow
        primary: `
      text-white rounded-lg
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-600 before:via-purple-600 before:to-cyan-600 before:rounded-lg before:animate-gradient-shift
      after:absolute after:inset-[2px] after:bg-black after:rounded-[6px] after:transition-all after:duration-300
      hover:after:bg-black/80 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
    `,

        // Secondary: Glassmorphism style
        secondary: `
      bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-lg
      hover:bg-white/10 hover:border-white/40 
      hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)]
    `,

        // Ghost: Minimal with underline animation
        ghost: `
      text-gray-400 hover:text-white bg-transparent
      after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
      after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
      after:transform after:scale-x-0 after:origin-left
      hover:after:scale-x-100 after:transition-transform after:duration-300
    `,

        // Glow: Full gradient with intense glow
        glow: `
      bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-lg
      shadow-[0_0_20px_rgba(59,130,246,0.3)]
      hover:shadow-[0_0_50px_rgba(59,130,246,0.5),0_0_100px_rgba(139,92,246,0.3)]
      hover:brightness-110
      animate-gradient-shift bg-[length:200%_200%]
    `,
    };

    const content = (
        <>
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-20 pointer-events-none" />

            {/* Ripple effect container */}
            <div className="absolute inset-0 overflow-hidden rounded-lg z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-active:w-[300%] group-active:h-[300%] transition-all duration-500 ease-out" />
            </div>

            {/* Content */}
            <span className="relative z-30 flex items-center justify-center gap-2">
                {Icon && iconPosition === 'left' && (
                    <Icon className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
                )}
                {children}
                {Icon && iconPosition === 'right' && (
                    <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                )}
            </span>
        </>
    );

    const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${className}`;

    // Render as link or button
    if (href) {
        return (
            <a
                href={href}
                className={combinedClasses}
                download={download}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                {...props}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={combinedClasses}
            {...props}
        >
            {content}
        </button>
    );
};

// Animated gradient keyframes
const styles = `
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient-shift {
    animation: gradient-shift 3s ease infinite;
    background-size: 200% 200%;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

export default PremiumButton;
