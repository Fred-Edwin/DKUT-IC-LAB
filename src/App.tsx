import React, { useEffect, useRef, useState } from 'react';
import QuantumBackground from './components/QuantumBackground';
import Navigation from './components/Navigation';
import ArchitecturalSidebar from './components/ArchitecturalSidebar';
import FooterMetadata from './components/FooterMetadata';
import HeroSection from './sections/HeroSection';
import WhoWeAreSection from './sections/WhoWeAreSection';
import WhatWeDoSection from './sections/WhatWeDoSection';
import SoftwareWindow from './components/SoftwareWindow';

const App: React.FC = () => {
    // Section 5 Logic
    const section5Ref = useRef<HTMLDivElement>(null);
    const [section5Visible, setSection5Visible] = useState(false);
    const [designWindowHovered, setDesignWindowHovered] = useState(false);

    useEffect(() => {
        // Section 5 Observer
        const section5Observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setSection5Visible(true);
            },
            { threshold: 0.2 }
        );
        if (section5Ref.current) section5Observer.observe(section5Ref.current);

        return () => {
            section5Observer.disconnect();
        };
    }, []);

    // Data
    const focusAreas = [
        {
            id: 'SEMI-01',
            title: 'Semiconductor Devices & Materials',
            desc: 'Research into semiconductor materials and device physics to understand electrical behavior, performance limits, and reliability.',
            img: '/semiconductor-math.jpg'
        },
        {
            id: 'ARCH-02',
            title: 'Integrated Circuit Architectures',
            desc: 'Design and simulation of analog, digital, and mixed-signal integrated circuits, from transistor-level to system-level integration.',
            img: '/circuit-blueprint.png'
        },
        {
            id: 'DESIGN-03',
            title: 'Design Methodologies & Simulation',
            desc: 'Advanced design methodologies and simulation-driven validation to ensure fabrication-aware and industry-compatible IC design.',
            img: '/simulation-waveforms.png'
        },
        {
            id: 'SYS-04',
            title: 'Electronics & System-Level Design',
            desc: 'System-level integration and electronics design enabling real-world constraints and performance optimization.',
            img: '/pcb-circuit.jpg'
        }
    ];

    const publications = [
        {
            id: 1,
            title: "Low-Power 12-bit SAR ADC Design Using CMOS 130 nm Technology for IoT Applications",
            authors: "Research Team",
            venue: "Conference / Journal — Year",
            focus: ["130NM", "SAR_ADC", "LOW_PWR"],
            summary: "Low-power mixed-signal design, SAR logic, comparator optimization, fabrication-aware constraints."
        },
        {
            id: 2,
            title: "Design and Simulation of Energy-Efficient Mixed-Signal Circuits for Edge and IoT Systems",
            authors: "Research Team",
            venue: "Conference / Journal — Year",
            focus: ["EDGE_AI", "MIX_SIG"],
            summary: "Power-performance trade-offs, mixed-signal architectures for edge computing applications."
        },
        {
            id: 3,
            title: "Analysis of Comparator Architectures for Low-Power Analog-to-Digital Conversion",
            authors: "Research Team",
            venue: "Conference / Journal — Year",
            focus: ["COMPARATOR", "ANALYSIS"],
            summary: "Noise, speed, offset, and power optimization in CMOS technologies."
        },
        {
            id: 4,
            title: "Fabrication-Aware Analog Integrated Circuit Design Using Open PDKs",
            authors: "Research Team",
            venue: "Conference / Journal — Year",
            focus: ["OPEN_PDK", "DFM"],
            summary: "Design rules, layout considerations, and manufacturability constraints."
        },
        {
            id: 5,
            title: "Simulation-Driven Design Methodologies for Analog and Mixed-Signal ICs",
            authors: "Research Team",
            venue: "Conference / Journal — Year",
            focus: ["SIMULATION", "VERIFY"],
            summary: "Verification workflows, modeling, and design validation methodologies."
        }
    ];

    const appendixItems = [
        { id: 'THESES', title: 'Student Theses', path: 'ROOT/ARCHIVE/THESES_V1', icon: 'school' },
        { id: 'REPORTS', title: 'Technical Reports', path: 'ROOT/ARCHIVE/REPORTS_INT', icon: 'description' },
        { id: 'ARTIFACTS', title: 'Open Research Artifacts', path: 'ROOT/ARCHIVE/ARTIFACTS_PUB', icon: 'folder_open', live: true }
    ];

    const tickerItems = [
        "KNOWLEDGE_CREATION: ACTIVE",
        "HUMAN_CAPITAL: DEVELOPING",
        "INDUSTRY_PARTNERSHIPS: SEEKING",
        "FABRICATION_AWARENESS: HIGH",
        "PUBLICATION_QUALITY: MAINTAINED",
        "STATUS: OPERATIONAL"
    ];

    return (
        <div className="relative min-h-screen text-charcoal overflow-x-hidden selection:bg-charcoal selection:text-white font-sans">

            {/* Particle Physics Background */}
            <QuantumBackground />

            {/* Architectural Sidebar */}
            <ArchitecturalSidebar />

            {/* Main Content Layer */}
            <div className="relative z-10 flex flex-col min-h-screen bg-transparent">

                {/* Navigation */}
                <Navigation />

                {/* Hero Section */}
                <HeroSection />

                {/* Who We Are Section (The Monolith) */}
                <WhoWeAreSection />

                {/* What We Do Section (The Silicon Path) */}
                <WhatWeDoSection />

                {/* SECTION 4: RESEARCH FOCUS (Datasheet Grid) */}
                <section className="relative w-full px-6 md:px-12 lg:px-20 pb-0" id="research">
                    <style>{`
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: marquee 30s linear infinite;
                        }
                    `}</style>
                    <div className="max-w-[1400px] w-full mx-auto mb-20">
                        <div className="mb-12 border-b border-border-grey pb-6 flex justify-between items-end">
                            <div>
                                <span className="font-mono text-[10px] text-deep-black tracking-widest uppercase block mb-2">
                                    03 / Research Focus & Impact
                                </span>
                                <h2 className="text-3xl md:text-4xl font-[900] tracking-[-0.04em] text-deep-black">
                                    Focus Areas
                                </h2>
                            </div>
                            <span className="hidden md:block font-mono text-[9px] text-deep-black opacity-50">
                                SELECT_MODULE_FOR_DETAILS
                            </span>
                        </div>

                        {/* The Datasheet Grid */}
                        <div className="border-t border-l border-border-grey bg-border-grey gap-[1px] grid grid-cols-1 md:grid-cols-2">
                            {focusAreas.map((area) => (
                                <div
                                    key={area.id}
                                    className="group relative bg-nordic-paper hover:bg-[#F2F2F0] transition-colors duration-500 p-8 md:p-12 min-h-[300px] flex flex-col justify-between overflow-hidden cursor-crosshair border-[0.5px] border-transparent hover:border-steel-blue/30"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                        <img
                                            src={area.img}
                                            alt=""
                                            className="w-full h-full object-cover opacity-[0.08] grayscale-0 contrast-[1.05] group-hover:opacity-[0.60] group-hover:scale-[1.03] transition-all duration-1000 ease-out"
                                        />
                                        {/* Color Tint on Hover */}
                                        <div className="absolute inset-0 bg-steel-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                                        {/* Strong Gradient Overlay for Text Clarity */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-nordic-paper/95 via-nordic-paper/85 to-nordic-paper/95 group-hover:from-nordic-paper/88 group-hover:via-nordic-paper/65 group-hover:to-nordic-paper/88 transition-all duration-1000"></div>
                                    </div>

                                    {/* Content Layer */}
                                    <div className="relative z-10 pointer-events-none">
                                        <div className="mb-8">
                                            <span className="font-mono text-[9px] text-deep-black opacity-60 bg-border-grey/50 px-2 py-1">
                                                ID: {area.id}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-deep-black mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                            {area.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-charcoal/70 leading-relaxed max-w-sm group-hover:text-charcoal transition-colors duration-300">
                                            {area.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Decorative Line */}
                                    <div className="relative z-10 w-full h-[0.5px] bg-border-grey mt-8 group-hover:bg-steel-blue/50 transition-colors duration-500">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-deep-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Summary & Ticker */}
                    <div className="w-full bg-deep-black text-nordic-paper pt-16 pb-8">
                        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-0 text-center mb-16">
                            <p className="font-mono text-[10px] tracking-[0.2em] opacity-50 mb-6 uppercase">
                                Impact Assessment
                            </p>
                            <h3 className="text-xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto">
                                Our research supports knowledge creation, human capital development, and preparation for advanced semiconductor workflows.
                            </h3>
                        </div>

                        {/* Live Ticker */}
                        <div className="w-full border-t border-nordic-paper/10 py-4 overflow-hidden relative">
                            <div className="flex animate-marquee whitespace-nowrap">
                                {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                                    <div key={i} className="flex items-center gap-12 mx-6 opacity-60">
                                        <div className="w-1 h-1 bg-steel-blue rounded-full"></div>
                                        <span className="font-mono text-[10px] tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Fade edges */}
                            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-deep-black to-transparent z-10"></div>
                            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-deep-black to-transparent z-10"></div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: FACILITIES & TOOLS (Digital Workbench) */}
                <section ref={section5Ref} className="relative w-full py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-nordic-paper" id="facilities">
                    <div className="max-w-[1400px] w-full mx-auto relative">
                        {/* Header */}
                        <div className="mb-20 max-w-3xl">
                            <span className="font-mono text-[10px] text-deep-black tracking-widest uppercase block mb-4">
                                04 / Infrastructure
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] tracking-[-0.04em] text-deep-black mb-8">
                                Facilities & Technical Capabilities
                            </h2>
                            <p className="text-lg leading-relaxed text-charcoal/80 font-normal">
                                The laboratory provides exposure to industry-relevant tools and environments used in integrated circuit research and design.
                            </p>
                        </div>

                        {/* The Digital Workbench (Overlapping Windows) */}
                        <div className="relative min-h-[500px] w-full max-w-[1000px] mx-auto hidden md:block">

                            {/* Window 3: Systems (Bottom Layer) */}
                            <SoftwareWindow
                                title="WORKFLOW_03"
                                isVisible={section5Visible}
                                delay={400}
                                className="bottom-0 left-[10%] w-[450px] z-10 bg-[#F2F2F0]"
                            >
                                <p>Research-oriented simulation workflows.</p>
                                <div className="mt-4 space-y-2 text-deep-black/60 text-xs">
                                    <p>&gt; running: monte_carlo_sim.sh</p>
                                    <p>&gt; status: batch_processing</p>
                                </div>
                            </SoftwareWindow>

                            {/* Window 2: Hardware (Middle Layer) */}
                            <SoftwareWindow
                                title="PROTO_TEST_02"
                                isVisible={section5Visible}
                                delay={200}
                                className="top-12 right-0 w-[400px] z-20"
                            >
                                <p className="mb-4">Electronics prototyping and testing setups.</p>
                                <div className="grid grid-cols-2 gap-2 text-xs opacity-70">
                                    <div className="border border-charcoal/20 p-2">Signal Gen</div>
                                    <div className="border border-charcoal/20 p-2">Logic Analyzer</div>
                                </div>
                            </SoftwareWindow>

                            {/* Window 1: Design (Top Layer - Interactive) */}
                            <SoftwareWindow
                                title="ENV_SIM_01"
                                isVisible={section5Visible}
                                delay={0}
                                className="top-0 left-0 w-[450px] z-30 cursor-crosshair hover:shadow-[12px_12px_0px_0px_rgba(26,26,26,0.15)] transition-shadow"
                                onMouseEnter={() => setDesignWindowHovered(true)}
                                onMouseLeave={() => setDesignWindowHovered(false)}
                            >
                                <div className="space-y-4">
                                    <p>IC design and simulation environments.</p>
                                    <p className="opacity-70">Analog, digital, and mixed-signal EDA tools.</p>

                                    {/* Live Waveform Interaction */}
                                    <div className="mt-6 h-12 w-full border border-charcoal/10 bg-charcoal/5 relative overflow-hidden flex items-center">
                                        <div className={`absolute inset-0 flex items-center transition-opacity duration-300 ${designWindowHovered ? 'opacity-100' : 'opacity-40'}`}>
                                            <svg viewBox="0 0 300 50" className="w-full h-full stroke-steel-blue fill-none">
                                                {/* Digital PWM-like signal */}
                                                <path d="M0,25 L20,25 L20,10 L50,10 L50,40 L80,40 L80,25 L120,25 L120,5 L140,5 L140,45 L180,45 L180,25 L300,25" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                                            </svg>
                                        </div>
                                        {/* Scanning Bar Effect */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-r from-transparent via-steel-blue/10 to-transparent transition-transform duration-[1500ms] ease-in-out ${designWindowHovered ? 'translate-x-full' : '-translate-x-full'}`}
                                        ></div>
                                    </div>
                                </div>
                            </SoftwareWindow>
                        </div>

                        {/* Mobile Fallback (Stacked) */}
                        <div className="md:hidden flex flex-col gap-6">
                            <SoftwareWindow title="ENV_SIM_01" isVisible={section5Visible} className="relative !transform-none !opacity-100 w-full">
                                <p>IC design and simulation environments.</p>
                                <div className="mt-4 h-8 bg-charcoal/5 w-full"></div>
                            </SoftwareWindow>
                            <SoftwareWindow title="PROTO_TEST_02" isVisible={section5Visible} className="relative !transform-none !opacity-100 w-full">
                                <p>Electronics prototyping and testing setups.</p>
                            </SoftwareWindow>
                        </div>

                        {/* Evolving Status */}
                        <div className="absolute -bottom-10 right-0 md:bottom-10 md:right-10 flex items-center gap-3">
                            <div className="w-3 h-3 border-2 border-charcoal/20 border-t-charcoal rounded-full animate-spin"></div>
                            <p className="font-mono text-[9px] text-charcoal opacity-60">
                                (Exact tools and environments evolve as research activities expand.)
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: RESEARCH OUTPUT (Archive) */}
                <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 bg-transparent" id="publications">
                    <div className="max-w-[1400px] w-full mx-auto">

                        {/* 1. Mission Statement (Pull-Quote) */}
                        <div className="relative py-12 mb-20">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[1px] bg-steel-blue"></div>
                            <blockquote className="text-center font-medium text-lg md:text-[1.4rem] leading-normal text-deep-black max-w-4xl mx-auto px-4">
                                "The laboratory emphasizes publication-quality design, simulation-driven validation, and reproducible engineering workflows."
                            </blockquote>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[1px] bg-steel-blue"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Header */}
                            <div className="lg:col-span-12 mb-8">
                                <span className="font-mono text-[10px] text-deep-black tracking-widest uppercase block mb-4">
                                    05 / Archive
                                </span>
                                <h2 className="text-3xl md:text-4xl font-[900] tracking-[-0.04em] text-deep-black">
                                    Selected Publications & Projects
                                </h2>
                            </div>

                            {/* 2. The Indexed Archive (Refined 3-Column Grid) */}
                            <div className="lg:col-span-12 flex flex-col">
                                <div className="hidden md:grid grid-cols-10 gap-4 pb-4 border-b border-border-grey font-mono text-[9px] uppercase tracking-widest text-deep-black/40">
                                    <div className="col-span-5">Publication Title</div>
                                    <div className="col-span-3">Authors // Venue</div>
                                    <div className="col-span-2">Tech Stack</div>
                                </div>

                                {publications.map((pub) => (
                                    <div
                                        key={pub.id}
                                        className="group relative border-b border-border-grey hover:border-steel-blue transition-all duration-300"
                                    >
                                        <div className="py-6 grid grid-cols-1 md:grid-cols-10 gap-4 items-baseline relative z-10 bg-transparent transition-colors">
                                            {/* Col 1: Title (50%) */}
                                            <div className="md:col-span-5">
                                                <h3 className="text-lg font-bold text-deep-black leading-tight group-hover:text-steel-blue transition-colors">
                                                    {pub.title}
                                                </h3>
                                            </div>

                                            {/* Col 2: Authors (30%) */}
                                            <div className="md:col-span-3 font-mono text-[10px] text-charcoal/60 tracking-wide">
                                                <div className="flex flex-col gap-1">
                                                    <span>{pub.authors}</span>
                                                    <span className="opacity-50">{pub.venue}</span>
                                                </div>
                                            </div>

                                            {/* Col 3: Tech Stack (20%) - Fades out on hover to reveal Summary */}
                                            <div className="md:col-span-2 flex flex-wrap gap-2 transition-opacity duration-300 group-hover:opacity-0">
                                                {pub.focus.map((tag, idx) => (
                                                    <span key={idx} className="font-mono text-[9px] px-2 py-1 rounded-full border border-charcoal/10 bg-white text-charcoal/70">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Inspector Summary (Slides in from Right, covering Col 3) */}
                                        <div className="absolute top-0 right-0 h-full w-full md:w-[25%] flex items-center justify-end pointer-events-none overflow-hidden">
                                            <div className="bg-nordic-paper pl-4 py-2 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out flex items-center h-full border-l border-steel-blue/20">
                                                <p className="font-mono text-[10px] leading-relaxed text-deep-black max-w-xs">
                                                    <span className="text-steel-blue font-bold mr-2">&gt;&gt;&gt;</span>
                                                    {pub.summary}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Additional Research Output (Appendix Refined) */}
                        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {appendixItems.map((item) => (
                                <div key={item.id} className="relative bg-[#F2F2F0] p-6 flex flex-col justify-between h-36 group cursor-pointer hover:bg-[#EBEBE9] transition-colors duration-300">
                                    {/* Directory Path */}
                                    <div className="absolute top-4 left-6 font-mono text-[8px] text-deep-black/40 tracking-widest uppercase">
                                        {item.path}
                                    </div>

                                    <div className="mt-6 flex justify-between items-end h-full">
                                        <div className="flex flex-col gap-2">
                                            <span className={`material-symbols-outlined !text-2xl text-deep-black/60 font-light`}>
                                                {item.icon}
                                            </span>
                                            <span className="text-sm font-bold text-deep-black group-hover:translate-x-1 transition-transform">
                                                {item.title}
                                            </span>
                                        </div>

                                        {item.live && (
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 7: PEOPLE */}
                <section className="w-full py-32 px-6 md:px-12 lg:px-20 bg-nordic-paper/30" id="team">
                    <div className="max-w-[1400px] w-full mx-auto">
                        <div className="mb-16">
                            <span className="font-mono text-[10px] text-deep-black tracking-widest uppercase block mb-4">
                                06 / People
                            </span>
                            <h2 className="text-4xl md:text-5xl font-[900] tracking-[-0.04em] text-deep-black mb-8">
                                People
                            </h2>
                        </div>

                        {/* Laboratory Head */}
                        <div className="mb-20">
                            <div className="border-l-2 border-steel-blue bg-nordic-paper p-10 shadow-[4px_4px_0px_0px_rgba(26,26,26,0.05)]">
                                <p className="text-xl md:text-2xl font-bold text-deep-black mb-2">Dr. Waweru Njeri</p>
                                <p className="text-charcoal/80 mb-6 font-medium">Senior Lecturer & Head, Integrated Circuits Engineering Research Laboratory</p>
                                <div className="border-t border-border-grey pt-4">
                                    <p className="font-mono text-[10px] tracking-widest text-charcoal/60 mb-2">RESEARCH FOCUS</p>
                                    <p className="text-sm text-charcoal/80 leading-relaxed">
                                        Semiconductor devices, analog and mixed-signal integrated circuit design, low-power electronics, fabrication-aware IC engineering, and electronics systems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Researchers */}
                        <div className="mb-16">
                            <h3 className="text-xl font-bold text-deep-black mb-8 border-b border-border-grey pb-4">Researchers & Students</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Researchers */}
                                <div className="group border border-border-grey p-6 bg-nordic-paper hover:border-steel-blue hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.08)] transition-all duration-300">
                                    <div className="mb-4 h-1 w-12 bg-steel-blue/30 group-hover:w-20 transition-all duration-300"></div>
                                    <p className="text-lg font-bold text-deep-black mb-2">Eng. James Mwangi</p>
                                    <p className="text-sm text-charcoal/70 leading-relaxed">Analog and mixed-signal IC design, CMOS circuit simulation</p>
                                </div>

                                <div className="group border border-border-grey p-6 bg-nordic-paper hover:border-steel-blue hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.08)] transition-all duration-300">
                                    <div className="mb-4 h-1 w-12 bg-steel-blue/30 group-hover:w-20 transition-all duration-300"></div>
                                    <p className="text-lg font-bold text-deep-black mb-2">Eng. Grace Wambui</p>
                                    <p className="text-sm text-charcoal/70 leading-relaxed">Low-power electronics, IoT-focused integrated circuits</p>
                                </div>

                                <div className="group border border-border-grey p-6 bg-nordic-paper hover:border-steel-blue hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.08)] transition-all duration-300">
                                    <div className="mb-4 h-1 w-12 bg-steel-blue/30 group-hover:w-20 transition-all duration-300"></div>
                                    <p className="text-lg font-bold text-deep-black mb-2">Eng. Peter Kinyua</p>
                                    <p className="text-sm text-charcoal/70 leading-relaxed">Digital and mixed-signal system design, verification methodologies</p>
                                </div>

                                {/* Students */}
                                <div className="group border border-border-grey p-6 bg-nordic-paper hover:border-steel-blue hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.08)] transition-all duration-300">
                                    <div className="mb-4 h-1 w-12 bg-steel-blue/30 group-hover:w-20 transition-all duration-300"></div>
                                    <p className="text-lg font-bold text-deep-black mb-2">Alice Njoki</p>
                                    <p className="text-sm text-charcoal/70 leading-relaxed">Analog-to-digital converters, SAR architectures, CMOS design</p>
                                </div>

                                <div className="group border border-border-grey p-6 bg-nordic-paper hover:border-steel-blue hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.08)] transition-all duration-300">
                                    <div className="mb-4 h-1 w-12 bg-steel-blue/30 group-hover:w-20 transition-all duration-300"></div>
                                    <p className="text-lg font-bold text-deep-black mb-2">Brian Otieno</p>
                                    <p className="text-sm text-charcoal/70 leading-relaxed">Device modeling, semiconductor materials and simulation</p>
                                </div>

                                <div className="group border border-border-grey p-6 bg-nordic-paper hover:border-steel-blue hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.08)] transition-all duration-300">
                                    <div className="mb-4 h-1 w-12 bg-steel-blue/30 group-hover:w-20 transition-all duration-300"></div>
                                    <p className="text-lg font-bold text-deep-black mb-2">Samuel Kariuki</p>
                                    <p className="text-sm text-charcoal/70 leading-relaxed">Fabrication-aware IC design, layout and design rules</p>
                                </div>

                                <div className="group border border-border-grey p-6 bg-nordic-paper hover:border-steel-blue hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.08)] transition-all duration-300">
                                    <div className="mb-4 h-1 w-12 bg-steel-blue/30 group-hover:w-20 transition-all duration-300"></div>
                                    <p className="text-lg font-bold text-deep-black mb-2">Faith Chebet</p>
                                    <p className="text-sm text-charcoal/70 leading-relaxed">Electronics system integration and testing</p>
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-[#F2F2F0] border-l-2 border-charcoal/20">
                                <p className="text-charcoal/80 leading-relaxed">
                                    The laboratory brings together faculty, researchers, and students with shared interests in semiconductor devices, integrated circuits, and electronics system engineering, fostering a collaborative research and learning environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: OPPORTUNITIES & COLLABORATION (Dual-Channel Interface) */}
                <section className="relative w-full min-h-screen flex flex-col justify-center py-20 bg-nordic-paper overflow-hidden" id="opportunities">
                    <style>{`
                        @keyframes blink {
                            0%, 50% { opacity: 1; }
                            51%, 100% { opacity: 0; }
                        }
                        .blink-cursor {
                            animation: blink 1.2s infinite;
                        }
                        @keyframes growDown {
                            from { height: 0%; }
                            to { height: 100%; }
                        }
                        @keyframes floatCalm1 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(10px, -15px); }
                        }
                        @keyframes floatCalm2 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(-15px, 10px); }
                        }
                        @keyframes floatCalm3 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(8px, 12px); }
                        }
                    `}</style>

                    {/* Calm Background Particles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-steel-blue/20 rounded-full" style={{ animation: 'floatCalm1 8s ease-in-out infinite' }}></div>
                        <div className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-steel-blue/15 rounded-full" style={{ animation: 'floatCalm2 10s ease-in-out infinite' }}></div>
                        <div className="absolute top-[60%] left-[25%] w-1 h-1 bg-steel-blue/20 rounded-full" style={{ animation: 'floatCalm3 12s ease-in-out infinite' }}></div>
                        <div className="absolute top-[45%] right-[30%] w-1 h-1 bg-steel-blue/15 rounded-full" style={{ animation: 'floatCalm1 9s ease-in-out infinite 2s' }}></div>
                        <div className="absolute top-[80%] left-[40%] w-1.5 h-1.5 bg-steel-blue/20 rounded-full" style={{ animation: 'floatCalm2 11s ease-in-out infinite 1s' }}></div>
                        <div className="absolute top-[35%] right-[45%] w-1 h-1 bg-steel-blue/15 rounded-full" style={{ animation: 'floatCalm3 10s ease-in-out infinite 3s' }}></div>
                        <div className="absolute top-[70%] right-[15%] w-1 h-1 bg-steel-blue/20 rounded-full" style={{ animation: 'floatCalm1 13s ease-in-out infinite 1.5s' }}></div>
                        <div className="absolute top-[15%] left-[50%] w-1.5 h-1.5 bg-steel-blue/15 rounded-full" style={{ animation: 'floatCalm2 9s ease-in-out infinite 2.5s' }}></div>
                    </div>

                    {/* Header */}
                    <div className="w-full px-6 md:px-12 lg:px-20 mb-16 relative z-10">
                        <div className="max-w-[1400px] mx-auto">
                            <span className="font-mono text-[9px] text-charcoal/50 tracking-widest uppercase block mb-6">
                                07 / Opportunities & Collaboration
                            </span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-[900] tracking-[-0.04em] text-deep-black flex items-center">
                                Work With Us
                                <span className="blink-cursor ml-2 w-1 h-12 md:h-16 bg-deep-black inline-block"></span>
                            </h2>
                        </div>
                    </div>

                    {/* Dual-Channel Split */}
                    <div className="flex-1 flex flex-col md:flex-row relative z-10">
                        {/* Animated Center Divider */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border-grey origin-top hidden md:block overflow-hidden">
                            <div className="w-full h-0 bg-border-grey animate-[growDown_1.5s_ease-out_forwards]"></div>
                        </div>

                        {/* LEFT PANEL: Students & Researchers */}
                        <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-20 py-12 md:py-20 flex flex-col justify-center">
                            <div className="max-w-[500px] md:ml-auto md:mr-12">
                                {/* Technical Label */}
                                <div className="mb-6">
                                    <span className="font-mono text-[9px] text-charcoal/40 tracking-[0.2em] uppercase">
                                        [PORT_01: ACADEMIC_TALENT]
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-deep-black mb-8 leading-tight">
                                    Students & Researchers
                                </h3>

                                {/* Body */}
                                <p className="text-base text-charcoal/80 leading-[1.7] mb-12 max-w-[400px]">
                                    We welcome motivated undergraduate and postgraduate students interested in semiconductor engineering, integrated circuits, and electronics research.
                                </p>

                                {/* CTA Link - Creative Underlined */}
                                <a href="#contact" className="group inline-block">
                                    <span className="font-mono text-[11px] tracking-widest text-deep-black uppercase relative">
                                        ENQUIRE →
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-deep-black origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-steel-blue group-hover:w-full transition-all duration-500"></span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT PANEL: Collaboration & Partners */}
                        <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-20 py-12 md:py-20 flex flex-col justify-center border-t md:border-t-0 md:border-l-0 border-border-grey">
                            <div className="max-w-[500px] md:ml-12">
                                {/* Technical Label */}
                                <div className="mb-6">
                                    <span className="font-mono text-[9px] text-charcoal/40 tracking-[0.2em] uppercase">
                                        [PORT_02: INDUSTRY_BRIDGE]
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-deep-black mb-8 leading-tight">
                                    Collaboration & Partners
                                </h3>

                                {/* Body */}
                                <p className="text-base text-charcoal/80 leading-[1.7] mb-12 max-w-[400px]">
                                    We seek collaboration with academic institutions, industry partners, and research organizations within the semiconductor and deep-technology ecosystem.
                                </p>

                                {/* CTA Link - Creative Underlined */}
                                <a href="#contact" className="group inline-block">
                                    <span className="font-mono text-[11px] tracking-widest text-deep-black uppercase relative">
                                        ENQUIRE →
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-deep-black origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-steel-blue group-hover:w-full transition-all duration-500"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 9: CONTACT (Nordiq Industrial Dark) */}
                <section className="relative w-full bg-[#1A1C1E] text-[#F9F9F7] overflow-hidden py-12 border-t border-[#2D3136]" id="contact">
                    <style>{`
                        @keyframes floatCalm1 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(8px, -12px); }
                        }
                        @keyframes floatCalm2 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(-10px, 8px); }
                        }
                        @keyframes floatCalm3 {
                            0%, 100% { transform: translate(0, 0); }
                            50% { transform: translate(6px, 10px); }
                        }
                    `}</style>

                    {/* Calm Current Particles (Faint Steel Blue) */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-[#5E7A8A] rounded-full opacity-20" style={{ animation: 'floatCalm1 14s ease-in-out infinite' }}></div>
                        <div className="absolute top-[35%] right-[25%] w-1 h-1 bg-[#5E7A8A] rounded-full opacity-15" style={{ animation: 'floatCalm2 16s ease-in-out infinite' }}></div>
                        <div className="absolute top-[60%] left-[30%] w-1 h-1 bg-[#5E7A8A] rounded-full opacity-20" style={{ animation: 'floatCalm3 18s ease-in-out infinite' }}></div>
                        <div className="absolute top-[45%] right-[35%] w-1 h-1 bg-[#5E7A8A] rounded-full opacity-15" style={{ animation: 'floatCalm1 15s ease-in-out infinite 2s' }}></div>
                        <div className="absolute top-[75%] left-[45%] w-1 h-1 bg-[#5E7A8A] rounded-full opacity-20" style={{ animation: 'floatCalm2 17s ease-in-out infinite 1s' }}></div>
                        <div className="absolute top-[25%] right-[50%] w-1 h-1 bg-[#5E7A8A] rounded-full opacity-15" style={{ animation: 'floatCalm3 16s ease-in-out infinite 3s' }}></div>
                    </div>

                    {/* Contact Block */}
                    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-8 pb-6">
                        <div className="max-w-[1400px] mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                {/* LEFT: Massive Email */}
                                <div className="flex flex-col justify-center">
                                    <a
                                        href="mailto:deice@dkut.ac.ke"
                                        className="group inline-block"
                                    >
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] tracking-[-0.05em] text-[#F9F9F7] group-hover:text-[#5E7A8A] transition-all duration-500 leading-tight break-all">
                                            deice@dkut.ac.ke
                                        </h2>
                                        <div className="mt-2 h-[1px] w-0 bg-[#5E7A8A] group-hover:w-full transition-all duration-700"></div>
                                    </a>
                                </div>

                                {/* RIGHT: Metadata with Vertical Line */}
                                <div className="flex gap-6 items-start">
                                    {/* Vertical Line */}
                                    <div className="w-[1px] h-24 bg-[#2D3136] flex-shrink-0"></div>

                                    {/* Metadata Stack */}
                                    <div className="flex flex-col justify-center space-y-6">
                                        <div>
                                            <span className="font-mono text-[10px] text-[#AAB2BA] tracking-widest uppercase block mb-2">
                                                [INSTITUTION]
                                            </span>
                                            <p className="text-base md:text-lg text-[#F9F9F7] font-medium leading-relaxed">
                                                Dedan Kimathi University of Technology
                                            </p>
                                        </div>
                                        <div>
                                            <span className="font-mono text-[10px] text-[#AAB2BA] tracking-widest uppercase block mb-2">
                                                [LOC]
                                            </span>
                                            <p className="text-base md:text-lg text-[#F9F9F7] font-medium">
                                                Nyeri, Kenya
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Commitment Seal (Footer) */}
                    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-8 pb-6">
                        <div className="max-w-[1400px] mx-auto">
                            {/* Top Line (50% width) */}
                            <div className="w-full flex justify-center mb-4">
                                <div className="w-full md:w-1/2 h-[0.5px] bg-[#2D3136]"></div>
                            </div>

                            {/* Commitment Statement */}
                            <p className="text-center font-mono text-[11px] text-[#AAB2BA] uppercase tracking-[0.2em] leading-relaxed max-w-4xl mx-auto">
                                The Dedan Kimathi University Integrated Circuits Engineering Research Laboratory is committed to advancing research excellence, engineering education, and fabrication-aware integrated circuit design capability.
                            </p>

                            {/* Bottom Line (50% width) */}
                            <div className="w-full flex justify-center mt-4 mb-4">
                                <div className="w-full md:w-1/2 h-[0.5px] bg-[#2D3136]"></div>
                            </div>

                            {/* Metadata Footer */}
                            <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-4">
                                <p className="font-mono text-[8px] text-[#AAB2BA]/50 tracking-widest">
                                    REF. DKUT-IC-2026 // NANO-VLSI_CORE
                                </p>
                                <p className="font-mono text-[8px] text-[#AAB2BA]/50 tracking-widest">
                                    LAT: 0.3956° S | LONG: 36.9634° E
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Footer Metadata */}
            <FooterMetadata />
        </div>
    );
};

export default App;
