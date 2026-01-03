import React from 'react';

interface SoftwareWindowProps {
    title: string;
    className?: string;
    children: React.ReactNode;
    isVisible: boolean;
    delay?: number;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const SoftwareWindow: React.FC<SoftwareWindowProps> = ({
    title,
    className,
    children,
    isVisible,
    delay = 0,
    onMouseEnter,
    onMouseLeave
}) => (
    <div
        className={`absolute bg-nordic-paper border border-charcoal shadow-[8px_8px_0px_0px_rgba(26,26,26,0.1)] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} ${isVisible ? 'translate-y-0' : 'translate-y-12'} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {/* Window Bar */}
        <div className="h-8 border-b border-charcoal flex items-center justify-between px-3 bg-border-grey/30 select-none">
            <span className="font-mono text-[10px] tracking-widest text-charcoal uppercase">{title}</span>
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full border border-charcoal bg-charcoal opacity-20"></div>
                <div className="w-2 h-2 rounded-full border border-charcoal opacity-20"></div>
            </div>
        </div>
        {/* Window Content */}
        <div className="p-6">
            {children}
        </div>
    </div>
);

export default SoftwareWindow;
