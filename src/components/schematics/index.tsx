import React from 'react';

interface SchematicProps {
    isActive: boolean;
}

export const SchematicTransistor: React.FC<SchematicProps> = ({ isActive }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-4 lg:p-12 overflow-visible">
        <defs>
            <pattern id="hatch-transistor" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                <rect width="1" height="4" transform="translate(0,0)" fill="#1A1A1A" fillOpacity="0.1" />
            </pattern>
        </defs>
        <g className={`transition-all duration-[4000ms] ease-out ${isActive ? 'opacity-100' : 'opacity-20'}`}>

            {/* Substrate Base with Hatch Pattern */}
            <path
                d="M20,250 L380,250 L380,280 L20,280 Z"
                fill="url(#hatch-transistor)"
                stroke="#1A1A1A"
                strokeWidth="1"
                strokeDasharray="1000"
                strokeDashoffset={isActive ? 0 : 1000}
                className="transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />

            {/* Channel Region Highlight */}
            <rect x="140" y="251" width="120" height="4" fill="#5E7A8A" fillOpacity="0.1" />

            {/* Source (N-Well) */}
            <path
                d="M60,250 L60,180 L140,180 L140,250 Z"
                fill="#1A1A1A" fillOpacity="0.03"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeDasharray="500"
                strokeDashoffset={isActive ? 0 : 500}
                className="transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[600ms]"
            />

            {/* Drain (N-Well) */}
            <path
                d="M260,250 L260,180 L340,180 L340,250 Z"
                fill="#1A1A1A" fillOpacity="0.03"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeDasharray="500"
                strokeDashoffset={isActive ? 0 : 500}
                className="transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[600ms]"
            />

            {/* Gate Oxide (Insulator) */}
            <rect
                x="140" y="172" width="120" height="6"
                fill="#5E7A8A" fillOpacity="0.2"
                className={`transition-opacity duration-1000 delay-[1000ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}
            />
            <line x1="140" y1="178" x2="260" y2="178" stroke="#5E7A8A" strokeWidth="1.5" strokeDasharray="120" strokeDashoffset={isActive ? 0 : 120} className="transition-all duration-1000 delay-[1000ms]" />

            {/* Gate Poly (Conductor) */}
            <path
                d="M160,165 L160,100 L240,100 L240,165 Z"
                fill="#F9F9F7"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeDasharray="400"
                strokeDashoffset={isActive ? 0 : 400}
                className="transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[1400ms]"
            />

            {/* Metal Contacts */}
            <g className={`transition-opacity duration-1000 delay-[2000ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                {/* Source Contact */}
                <line x1="100" y1="180" x2="100" y2="80" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4,4" />
                <circle cx="100" cy="80" r="3" fill="#1A1A1A" />
                <text x="85" y="70" className="font-mono text-[9px] fill-[#1A1A1A]">SOURCE</text>

                {/* Drain Contact */}
                <line x1="300" y1="180" x2="300" y2="80" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4,4" />
                <circle cx="300" cy="80" r="3" fill="#1A1A1A" />
                <text x="285" y="70" className="font-mono text-[9px] fill-[#1A1A1A]">DRAIN</text>

                {/* Gate Contact */}
                <circle cx="200" cy="100" r="3" fill="#5E7A8A" />
                <text x="215" y="95" className="font-mono text-[9px] fill-[#5E7A8A]">GATE</text>
            </g>

            <text x="30" y="270" className="font-mono text-[9px] fill-[#5E7A8A] font-bold tracking-widest">P-SUBSTRATE // SI-DOPED</text>
        </g>
    </svg>
);

export const SchematicIC: React.FC<SchematicProps> = ({ isActive }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-4 lg:p-12 overflow-visible">
        <defs>
            <pattern id="grid-ic" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#1A1A1A" fillOpacity="0.1" />
            </pattern>
        </defs>
        <g className={`transition-all duration-[4000ms] ease-out ${isActive ? 'opacity-100' : 'opacity-20'}`}>

            {/* Wafer Background Context */}
            <rect
                x="50" y="50" width="300" height="200" rx="4"
                fill="url(#grid-ic)"
                stroke="#1A1A1A" strokeWidth="1.5"
                strokeDasharray="1200" strokeDashoffset={isActive ? 0 : 1200}
                className="transition-all duration-[5000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />

            {/* Logic Blocks with Fills */}
            {[0, 1, 2].map((i) => (
                <g key={i}>
                    <rect
                        x={80 + (i * 90)} y="100" width="60" height="60"
                        fill="#5E7A8A" fillOpacity="0.05"
                        stroke="#5E7A8A" strokeWidth="1.5"
                        strokeDasharray="300" strokeDashoffset={isActive ? 0 : 300}
                        className={`transition-all duration-[3000ms] ease-[cubic-bezier(0.22,1,0.36,1)]`}
                        style={{ transitionDelay: `${1000 + (i * 400)}ms` }}
                    />
                    {/* Inner Logic Gates Details */}
                    <rect
                        x={95 + (i * 90)} y="115" width="30" height="30"
                        fill="none" stroke="#5E7A8A" strokeWidth="0.5" strokeOpacity="0.5"
                        className={`transition-opacity duration-1000`}
                        style={{ transitionDelay: `${1600 + (i * 400)}ms`, opacity: isActive ? 1 : 0 }}
                    />
                </g>
            ))}

            {/* Complex Interconnects (Manhattan Routing) */}
            <path
                d="M140,130 L155,130 L155,110 L170,110 M230,130 L245,130 L245,150 L260,150"
                fill="none"
                stroke="#1A1A1A" strokeWidth="1"
                strokeDasharray="200" strokeDashoffset={isActive ? 0 : 200}
                className="transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[2000ms]"
            />

            {/* Bonding Pads & Wires */}
            {Array.from({ length: 12 }).map((_, i) => {
                const isBottom = i >= 6;
                const x = 70 + (i % 6) * 50;
                const y = isBottom ? 250 : 50;
                const dy = isBottom ? 25 : -25;
                return (
                    <g key={i} className="transition-all duration-[1000ms] ease-out delay-[2400ms]">
                        {/* Pad */}
                        <rect
                            x={x - 4} y={isBottom ? 240 : 50} width="8" height="8"
                            fill="#1A1A1A" fillOpacity="0.8"
                            className={`transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}
                        />
                        {/* Wire */}
                        <path
                            d={`M${x},${y} L${x},${y + dy}`}
                            stroke="#1A1A1A" strokeWidth="0.5"
                            strokeDasharray="30" strokeDashoffset={isActive ? 0 : 30}
                        />
                    </g>
                )
            })}

            <text x="60" y="235" className="font-mono text-[9px] fill-[#1A1A1A] opacity-50 tracking-widest">ASIC_CORE_REV_4</text>
        </g>
    </svg>
);

export const SchematicLayers: React.FC<SchematicProps> = ({ isActive }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-4 lg:p-12 overflow-visible">
        <defs>
            <linearGradient id="metal-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5E7A8A" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#5E7A8A" stopOpacity="0.05" />
            </linearGradient>
        </defs>
        <g className={`transition-all duration-[4000ms] ease-out ${isActive ? 'opacity-100' : 'opacity-20'}`}>

            {/* Layer 1 (Substrate - Bottom) - Isometric projection hint */}
            <path
                d="M50,220 L350,220 L320,190 L20,190 Z"
                fill="#1A1A1A" fillOpacity="0.05"
                stroke="#1A1A1A" strokeWidth="1.5"
                strokeDasharray="1000" strokeDashoffset={isActive ? 0 : 1000}
                className="transition-all duration-[3000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />

            {/* Layer 2 (Dielectric / Metal 1) */}
            <path
                d="M50,170 L350,170 L320,140 L20,140 Z"
                fill="url(#metal-gradient)"
                stroke="#5E7A8A" strokeWidth="1.5"
                strokeDasharray="1000" strokeDashoffset={isActive ? 0 : 1000}
                className="transition-all duration-[3000ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[600ms]"
            />

            {/* Layer 3 (Top Metal / Passivation) */}
            <path
                d="M50,120 L350,120 L320,90 L20,90 Z"
                fill="none"
                stroke="#1A1A1A" strokeWidth="1.5"
                strokeDasharray="1000" strokeDashoffset={isActive ? 0 : 1000}
                className="transition-all duration-[3000ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[1200ms]"
            />

            {/* Vertical Interconnect Access (VIAs) - Cylinders */}
            <g className={`transition-opacity duration-1000 delay-[2000ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                {/* Via Group 1 */}
                <ellipse cx="100" cy="190" rx="3" ry="1.5" fill="#1A1A1A" />
                <line x1="100" y1="190" x2="100" y2="170" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="2,2" />
                <ellipse cx="100" cy="170" rx="3" ry="1.5" fill="#5E7A8A" />

                {/* Via Group 2 */}
                <ellipse cx="250" cy="140" rx="3" ry="1.5" fill="#5E7A8A" />
                <line x1="250" y1="140" x2="250" y2="120" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="2,2" />
                <ellipse cx="250" cy="120" rx="3" ry="1.5" fill="#1A1A1A" stroke="#1A1A1A" />
            </g>

            <text x="360" y="210" className="font-mono text-[9px] fill-[#1A1A1A] opacity-50">SI_WAFER</text>
            <text x="360" y="160" className="font-mono text-[9px] fill-[#5E7A8A] opacity-80">METAL_L1</text>
            <text x="360" y="110" className="font-mono text-[9px] fill-[#1A1A1A] opacity-50">OXIDE_PAS</text>
        </g>
    </svg>
);

export const SchematicWaveform: React.FC<SchematicProps> = ({ isActive }) => (
    <svg viewBox="0 0 400 300" className="w-full h-full p-4 lg:p-12 overflow-visible">
        <g className={`transition-all duration-[4000ms] ease-out ${isActive ? 'opacity-100' : 'opacity-20'}`}>
            {/* UI Window Frame */}
            <rect
                x="20" y="40" width="360" height="220"
                fill="#F9F9F7" fillOpacity="0.8"
                stroke="#1A1A1A" strokeWidth="1"
                strokeDasharray="1200" strokeDashoffset={isActive ? 0 : 1200}
                className="transition-all duration-[3000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />

            {/* Oscilloscope Grid */}
            <defs>
                <pattern id="grid-scope" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A1A1A" strokeWidth="0.5" strokeOpacity="0.1" />
                </pattern>
            </defs>
            <rect x="20" y="40" width="360" height="220" fill="url(#grid-scope)" />

            {/* Axes */}
            <line x1="20" y1="150" x2="380" y2="150" stroke="#1A1A1A" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="200" y1="40" x2="200" y2="260" stroke="#1A1A1A" strokeWidth="0.5" strokeOpacity="0.3" />

            {/* Digital Clock Signal (Background) */}
            <path
                d="M20,200 L60,200 L60,230 L100,230 L100,200 L140,200 L140,230 L180,230 L180,200 L220,200 L220,230 L260,230 L260,200 L300,200 L300,230 L340,230 L340,200"
                fill="none" stroke="#1A1A1A" strokeWidth="1" strokeOpacity="0.2"
                strokeDasharray="800" strokeDashoffset={isActive ? 0 : 800}
                className="transition-all duration-[4000ms] ease-linear"
            />

            {/* Analog Signal (Foreground) */}
            <path
                d="M20,150 Q60,50 100,150 T180,150 T260,150 T340,150"
                fill="none" stroke="#5E7A8A" strokeWidth="2"
                strokeDasharray="500" strokeDashoffset={isActive ? 0 : 500}
                className="transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[1000ms] drop-shadow-md"
            />

            {/* Measurement Points */}
            <g className={`transition-opacity duration-300 delay-[2400ms] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <circle cx="100" cy="150" r="3" fill="#1A1A1A" />
                <text x="105" y="140" className="font-mono text-[8px] fill-[#1A1A1A]">V_peak</text>

                <circle cx="260" cy="150" r="3" fill="#1A1A1A" />
                <text x="265" y="165" className="font-mono text-[8px] fill-[#1A1A1A]">t_fall</text>
            </g>

            {/* Header UI */}
            <rect x="20" y="40" width="360" height="20" fill="#1A1A1A" fillOpacity="0.05" />
            <text x="30" y="54" className="font-mono text-[9px] fill-[#1A1A1A] opacity-70">OSC_INPUT_01 // 500MHz</text>
        </g>
    </svg>
);
