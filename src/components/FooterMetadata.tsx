import React from 'react';

const FooterMetadata: React.FC = () => {
    return (
        <>
            {/* Bottom Left */}
            <div className="fixed bottom-6 left-6 hidden xl:block z-20 pointer-events-none">
                <p className="font-mono text-[9px] text-charcoal opacity-40">
                    REF. DKUT-IC-2026 // NANO-VLSI_CORE
                </p>
            </div>

            {/* Bottom Right */}
            <div className="fixed bottom-6 right-6 hidden xl:block z-20 pointer-events-none">
                <p className="font-mono text-[9px] text-charcoal opacity-40 text-right">
                    LAT: 0.3956° S | LONG: 36.9634° E
                </p>
            </div>

            {/* Scroll Indicator - Simplified */}
            <div className="fixed bottom-8 left-16 hidden md:flex items-center gap-2 opacity-40 z-20">
                <span className="font-mono text-[8px] uppercase tracking-widest text-charcoal" style={{ fontSize: '0.8em' }}>SCROLL</span>
                <div className="h-[0.5px] w-[30px] bg-charcoal"></div>
            </div>
        </>
    );
};

export default FooterMetadata;
