import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WhoWeAreSection: React.FC = () => {
    const [monolithRef, monolithVisible] = useIntersectionObserver({ threshold: 0.15 });

    return (
        <section className="w-full flex justify-center pb-32 px-4 md:px-0">
            <div
                ref={monolithRef}
                className="relative w-full max-w-[90%] md:max-w-[85%] lg:max-w-[1400px] min-h-[350px] overflow-hidden group"
            >
                {/* Background */}
                <div
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${monolithVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        background: 'rgba(249, 249, 247, 0.5)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)'
                    }}
                ></div>
                {/* Borders */}
                <div className={`absolute top-0 left-0 h-[1px] bg-border-grey z-10 transition-all duration-[1500ms] ease-in-out ${monolithVisible ? 'w-full' : 'w-0'}`}></div>
                <div className={`absolute top-0 right-0 w-[1px] bg-border-grey z-10 transition-all duration-[1500ms] ease-in-out ${monolithVisible ? 'h-full' : 'h-0'}`}></div>
                <div className={`absolute bottom-0 right-0 h-[1px] bg-border-grey z-10 transition-all duration-[1500ms] ease-in-out ${monolithVisible ? 'w-full' : 'w-0'}`}></div>
                <div className={`absolute bottom-0 left-0 w-[1px] bg-border-grey z-10 transition-all duration-[1500ms] ease-in-out ${monolithVisible ? 'h-full' : 'h-0'}`}></div>

                {/* Content */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-10 h-full">
                    <div className={`lg:col-span-5 h-64 lg:h-full relative overflow-hidden border-b lg:border-b-0 lg:border-r border-border-grey transform transition-all duration-1000 ease-out delay-300 ${monolithVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-steel-blue/20 via-neutral-grey/10 to-border-grey/20">
                            {/* Geometric pattern overlay */}
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: 'linear-gradient(45deg, #111c21 25%, transparent 25%), linear-gradient(-45deg, #111c21 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #111c21 75%), linear-gradient(-45deg, transparent 75%, #111c21 75%)',
                                backgroundSize: '20px 20px',
                                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                            }}></div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 p-8 md:p-12 lg:p-12 flex flex-col justify-center">
                        <div className={`transform transition-all duration-1000 ease-out delay-500 ${monolithVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            <div className="mb-8">
                                <span className="font-mono text-[10px] text-deep-black tracking-widest uppercase">
                                    01 / Institutional Grounding
                                </span>
                            </div>
                            <h2 className="text-fluid-h2 font-bold leading-[1.1] tracking-[-0.04em] text-deep-black mb-10 max-w-2xl">
                                A Research Laboratory at Dedan Kimathi University of Technology
                            </h2>
                            <div className="space-y-6 text-charcoal/80 text-lg leading-[1.7]">
                                <p>
                                    Based at Dedan Kimathi University of Technology, the Integrated Circuits Engineering Research Laboratory is dedicated to building strong technical capacity in semiconductor and chip engineering through focused research, practical design work, and advanced training.
                                </p>
                                <p>
                                    The laboratory contributes to the development of local and regional expertise in electronics and semiconductor engineering, addressing the growing need for skilled engineers and researchers in deep-technology and hardware-driven innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
