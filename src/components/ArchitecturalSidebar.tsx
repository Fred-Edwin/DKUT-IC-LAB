import React from 'react';

const ArchitecturalSidebar: React.FC = () => {
    return (
        <div className="fixed left-5 top-1/2 -translate-y-1/2 hidden xl:block z-20">
            {/* Vertical Line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[0.5px] h-48 bg-[#E5E5E1] opacity-60"></div>

            {/* Vertical Text - 10px to the right of the line */}
            <div className="absolute left-[10px] top-1/2 -translate-y-1/2">
                <span
                    className="block font-mono text-[0.8em] text-charcoal/60 whitespace-nowrap tracking-widest"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                    EST. 2026 // RESEARCH_CORE
                </span>
            </div>
        </div>
    );
};

export default ArchitecturalSidebar;
