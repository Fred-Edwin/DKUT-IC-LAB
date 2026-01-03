import React, { useEffect, useRef, useState } from 'react';

import { SchematicTransistor, SchematicIC, SchematicLayers, SchematicWaveform } from '../components/schematics';
import { Stage } from '../types';

const WhatWeDoSection: React.FC = () => {
    const section3Ref = useRef<HTMLDivElement>(null);
    const traceLineRef = useRef<HTMLDivElement>(null);
    const [activeStage, setActiveStage] = useState<number[]>([]);

    // LERP Smooth Scroll Animation for Trace Line
    useEffect(() => {
        let animationFrameId: number;
        let currentHeight = 0;
        let targetHeight = 0;

        const animate = () => {
            // 1. Calculate Target based on scroll
            if (section3Ref.current) {
                const rect = section3Ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Start drawing when section enters viewport (70% down)
                const startOffset = windowHeight * 0.7;
                const scrolled = startOffset - rect.top;
                const totalHeight = rect.height;

                let percentage = (scrolled / totalHeight) * 100;
                percentage = Math.max(0, Math.min(percentage, 100));

                targetHeight = percentage;
            }

            // 2. LERP: current = current + (target - current) * 0.1
            // 0.1 is the "smoothness" factor. Lower = smoother/slower.
            currentHeight += (targetHeight - currentHeight) * 0.1;

            // 3. Apply to DOM directly (bypass React render cycle)
            if (traceLineRef.current) {
                traceLineRef.current.style.height = `${currentHeight}%`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        const stageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = Number(entry.target.getAttribute('data-index'));
                if (entry.isIntersecting) {
                    setActiveStage(prev => prev.includes(index) ? prev : [...prev, index]);
                } else {
                    setActiveStage(prev => prev.filter(i => i !== index));
                }
            });
        }, { threshold: 0.4 });

        document.querySelectorAll('.stage-block').forEach(el => stageObserver.observe(el));

        return () => {
            stageObserver.disconnect();
        };
    }, []);

    const stages: Stage[] = [
        {
            id: 1,
            tag: "STAGE_01",
            title: "Semiconductor Materials & Devices",
            desc: "Research into semiconductor materials and device physics to understand electrical behavior, performance limits, and reliability, forming the foundation for robust and efficient electronic design.",
        },
        {
            id: 2,
            tag: "STAGE_02",
            title: "Integrated Circuit Design",
            desc: "Design and simulation of analog, digital, and mixed-signal integrated circuits, from transistor-level design to system-level integration, with emphasis on performance, power efficiency, and real-world constraints.",
        },
        {
            id: 3,
            tag: "STAGE_03",
            title: "Fabrication-Aware Engineering",
            desc: "Exposure to semiconductor fabrication processes, design rules, and manufacturing constraints, enabling fabrication-aware and industry-compatible integrated circuit design without owning fabrication facilities.",
        },
        {
            id: 4,
            tag: "STAGE_04",
            title: "Training & Upskilling Engineers",
            desc: "Hands-on training in IC design tools, electronics prototyping, and research methodologies to develop industry-ready and research-capable electronic engineers.",
        }
    ];

    const schematicComponents = [SchematicTransistor, SchematicIC, SchematicLayers, SchematicWaveform];

    return (
        <section ref={section3Ref} className="relative w-full py-32 px-6 md:px-12 lg:px-20 overflow-hidden" id="research">

            {/* Background Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[1px] bg-border-grey hidden lg:block"></div>
            {/* Active Scroll Line */}
            <div
                ref={traceLineRef}
                className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[1px] bg-steel-blue hidden lg:block"
                style={{ height: '0%' }}
            ></div>

            <div className="max-w-[1400px] w-full mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-24 lg:mb-32 relative">
                    <span className="font-mono text-[10px] text-deep-black tracking-widest uppercase block mb-4">
                        02 / The Silicon Path
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] tracking-[-0.04em] text-deep-black">
                        Research Pipeline
                    </h2>
                </div>

                {/* THE STAGGERED GRID */}
                <div className="flex flex-col gap-24 lg:gap-0">
                    {stages.map((stage, i) => {
                        const isEven = (i + 1) % 2 === 0;
                        const isActive = activeStage.includes(stage.id);
                        const SchematicComp = schematicComponents[i];

                        return (
                            <div
                                key={stage.id}
                                data-index={stage.id}
                                className="stage-block grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[400px]"
                            >
                                {/* Text Block */}
                                <div className={`flex flex-col gap-6 ${isEven ? 'lg:order-last text-left lg:pl-12' : 'lg:order-first text-left lg:text-right lg:pr-12'}`}>
                                    <div className={`flex items-center gap-4 ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                                        <span className="font-mono text-[10px] bg-border-grey px-2 py-1 text-deep-black">
                                            [{stage.tag}]
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-deep-black">
                                        {stage.title}
                                    </h3>
                                    <p className="text-lg leading-relaxed text-charcoal/80">
                                        {stage.desc}
                                    </p>
                                </div>

                                {/* Graphic Block */}
                                <div className={`relative h-[300px] md:h-[350px] w-full border border-border-grey bg-nordic-paper/50 backdrop-blur-sm group hover:border-steel-blue transition-colors duration-500 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                                    <div className="absolute top-2 left-2 w-2 h-2 border border-neutral-grey"></div>
                                    <div className="absolute top-2 right-2 w-2 h-2 border border-neutral-grey"></div>
                                    <div className="absolute bottom-2 left-2 w-2 h-2 border border-neutral-grey"></div>
                                    <div className="absolute bottom-2 right-2 w-2 h-2 border border-neutral-grey"></div>

                                    {/* Render the specific SVG Component */}
                                    <div className="w-full h-full p-4">
                                        <SchematicComp isActive={isActive} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
