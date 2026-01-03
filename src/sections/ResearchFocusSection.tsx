import React from 'react';
import { motion } from 'framer-motion';

interface FocusArea {
    id: string;
    tag: string;
    title: string;
    description: string;
}

const focusAreas: FocusArea[] = [
    {
        id: "SEMI-01",
        tag: "DEVICES",
        title: "Semiconductor Devices & Materials",
        description: "Investigation into novel semiconductor materials and device physics, focusing on wide-bandgap semiconductors."
    },
    {
        id: "ARCH-02",
        tag: "ARCHITECTURE",
        title: "Integrated Circuit Architectures",
        description: "Exploration of neuromorphic computing cores, RISC-V processors, and energy-efficient SoC designs."
    },
    {
        id: "SIG-03",
        tag: "MIXED_SIGNAL",
        title: "Analog & Mixed-Signal Design",
        description: "Advanced research into ADCs, sensor interfaces, and high-speed signal processing circuits."
    },
    {
        id: "SYS-04",
        tag: "SYSTEMS",
        title: "Electronics & System Design",
        description: "Holistic engineering integrating custom ICs with embedded software and power management."
    },
    {
        id: "EDA-05",
        tag: "METHODOLOGY",
        title: "Design Methodologies",
        description: "Development of automated design workflows, verification techniques, and simulation models."
    }
];

const tickerItems = [
    "[HUMAN_CAPITAL: DEVELOPING]",
    "[ADVANCED_WORKFLOWS: OPERATIONAL]",
    "[KNOWLEDGE_CREATION: ACTIVE]",
    "[INDUSTRY_RELATIONS: SEEKING]",
    "[FABRICATION_AWARENESS: HIGH]",
    "[SYSTEM_INTEGRATION: OPTIMIZED]"
];

const ResearchFocusSection: React.FC = () => {
    return (
        <section id="publications" className="w-full bg-nordic-paper text-deep-black py-20 lg:py-32 relative overflow-hidden">

            {/* Header */}
            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 mb-16">
                <span className="font-mono text-[10px] tracking-widest uppercase block mb-4 text-charcoal/60">
                    03 / Research Focus
                </span>
                <h2 className="text-4xl md:text-5xl font-[900] tracking-[-0.04em] mb-6">
                    Technical Index
                </h2>
                <div className="w-full h-[0.5px] bg-[#E5E5E1]"></div>
            </div>

            {/* Grid System (Datasheet Look) */}
            <div className="max-w-[1400px] w-full mx-auto px-0 md:px-12 lg:px-20 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E5E5E1]">
                    {focusAreas.map((area) => (
                        <div
                            key={area.id}
                            className="group relative border-r border-b border-[#E5E5E1] p-8 md:p-10 transition-colors duration-500 hover:bg-[#F2F2F0]"
                        >
                            {/* Hover Effect - Subtle Particle Hint (Simulated with a gradient for performance) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-steel-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Identifier */}
                            <div className="mb-6 font-mono text-[9px] text-charcoal/50 tracking-widest uppercase">
                                ID: {area.id}
                            </div>

                            {/* Content */}
                            <h3 className="text-[1.5rem] font-bold font-sans leading-tight mb-4 text-charcoal group-hover:text-deep-black transition-colors">
                                {area.title}
                            </h3>
                            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
                                {area.description}
                            </p>

                            {/* Corner Marker (Technical Detail) */}
                            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}

                    {/* Empty filler cell for 3-column layout balance if needed, or informational cell */}
                    <div className="border-r border-b border-[#E5E5E1] p-8 md:p-10 flex flex-col justify-between bg-[#F9F9F7]">
                        <div className="font-mono text-[9px] text-charcoal/50 tracking-widest uppercase">
                            ID: SYS-STAT
                        </div>
                        <div className="text-charcoal/40 text-xs font-mono leading-relaxed mt-4">
                    // RESEARCH.LAB<br />
                    // STATUS: ONLINE<br />
                    // MODE: DISCOVERY<br />
                    // INDEX: 05 ITEMS
                        </div>
                    </div>
                </div>
            </div>

            {/* Research Impact Narrative */}
            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 mb-32">
                <div className="max-w-2xl">
                    <h3 className="text-xl font-bold mb-6 text-deep-black">Impact</h3>
                    <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                        Our research supports knowledge creation, human capital development, and preparation for advanced semiconductor workflows. By bridging theory and practice, we aim to cultivate a new generation of engineers capable of tackling complex integrated circuit challenges.
                    </p>
                </div>
            </div>

            {/* Live Impact Ticker */}
            <div className="w-full border-t border-b border-[#E5E5E1] py-4 bg-[#F9F9F7] overflow-hidden flex items-center">
                <div className="flex gap-12 animate-marquee whitespace-nowrap">
                    {/* Duplicated for seamless loop */}
                    {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                        <span key={i} className="font-mono text-[10px] tracking-widest text-charcoal/60 uppercase">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 60s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default ResearchFocusSection;
