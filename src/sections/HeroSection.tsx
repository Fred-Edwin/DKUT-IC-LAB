import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <main className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 pb-20 pt-10 md:pt-0 min-h-[90vh]">
            <div className="max-w-[1400px] w-full mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-8 items-start">
                    <div className="lg:col-span-12 xl:col-span-11">
                        <h1 className="text-fluid-hero font-[900] leading-[0.82] tracking-tightest text-deep-black">
                            Advancing Integrated<br />
                            Circuits and<br />
                            <span className="text-deep-black">Semiconductor</span><br />
                            Engineering
                        </h1>
                    </div>

                    <div className="lg:col-span-5 lg:col-start-7 xl:col-start-7 flex flex-col gap-8 mt-4 lg:mt-12 pl-0 lg:pl-4">
                        <p className="text-base md:text-lg leading-relaxed text-charcoal/80 font-normal max-w-lg">
                            The Dedan Kimathi University Integrated Circuits Engineering Research Laboratory advances semiconductor devices, integrated circuit design, and fabrication-aware engineering through research, hands-on training, and skills development, while preparing the next generation of chip engineers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 items-start sm:items-center">
                            <a href="#research" className="group relative inline-flex items-center gap-4 cursor-pointer">
                                <div className="relative">
                                    <span className="text-sm font-bold tracking-[0.15em] uppercase text-deep-black">
                                        Explore Research
                                    </span>
                                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-deep-black/30 overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full bg-deep-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined !text-[1.2rem] text-deep-black transition-transform duration-300 group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </a>
                            <a href="#opportunities" className="group relative inline-flex flex-col items-start cursor-pointer">
                                <span className="text-sm font-bold tracking-[0.15em] uppercase text-deep-black/60 transition-colors duration-300 group-hover:text-deep-black">
                                    Join The Lab
                                </span>
                                <span className="h-[1px] bg-deep-black w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
