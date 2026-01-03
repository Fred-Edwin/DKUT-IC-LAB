import React, { useEffect, useRef } from 'react';
import { Particle } from '../types';

const QuantumBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000, active: false };

        // Configuration
        const particleCount = 560;
        const interactionRadius = 220;
        const maxVelocity = 3.75;

        // Physics Constants
        const springStrength = 0.005;
        const friction = 0.96;

        // Collision Constants
        const collisionPush = 0.05;

        // Colors
        const baseColor = { r: 170, g: 178, b: 186 }; // #AAB2BA
        const activeColor = { r: 94, g: 122, b: 138 }; // #5E7A8A
        const bgColor = 'rgba(249, 249, 247, 0.25)';

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const isSquare = Math.random() > 0.6;

                particles.push({
                    x,
                    y,
                    originX: x,
                    originY: y,
                    vx: 0,
                    vy: 0,
                    size: isSquare ? 2 : 1.2,
                    shape: isSquare ? 'square' : 'circle',
                });
            }
        };

        const draw = () => {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // 1. Determine Target
                let targetX = p.originX;
                let targetY = p.originY;
                let distToMouse = 10000;

                if (mouse.active) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    distToMouse = Math.sqrt(dx * dx + dy * dy);

                    // Magnetic Attraction
                    if (distToMouse < interactionRadius) {
                        targetX = mouse.x;
                        targetY = mouse.y;
                    }
                }

                // 2. Physics: Spring/Acceleration to Target
                const dx = targetX - p.x;
                const dy = targetY - p.y;

                const ax = dx * springStrength;
                const ay = dy * springStrength;

                p.vx += ax;
                p.vy += ay;

                // 3. Collision Avoidance
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const cdx = p.x - p2.x;
                    const cdy = p.y - p2.y;
                    const dist = Math.sqrt(cdx * cdx + cdy * cdy);

                    const minDist = p.size + p2.size + 1;

                    if (dist < minDist && dist > 0) {
                        const force = collisionPush * (minDist - dist) / minDist;
                        const angle = Math.atan2(cdy, cdx);

                        const fx = Math.cos(angle) * force;
                        const fy = Math.sin(angle) * force;

                        p.vx += fx;
                        p.vy += fy;
                        p2.vx -= fx;
                        p2.vy -= fy;
                    }
                }

                // 4. Friction
                p.vx *= friction;
                p.vy *= friction;

                // 5. Velocity Cap
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > maxVelocity) {
                    const ratio = maxVelocity / speed;
                    p.vx *= ratio;
                    p.vy *= ratio;
                }

                // 6. Update Position
                p.x += p.vx;
                p.y += p.vy;

                // 7. Visuals
                let alpha = 0.1;
                let r = baseColor.r;
                let g = baseColor.g;
                let b = baseColor.b;

                if (mouse.active && distToMouse < interactionRadius) {
                    const ratio = 1 - (distToMouse / interactionRadius);
                    alpha = 0.1 + (ratio * 0.7);

                    r = Math.round(baseColor.r + (activeColor.r - baseColor.r) * ratio);
                    g = Math.round(baseColor.g + (activeColor.g - baseColor.g) * ratio);
                    b = Math.round(baseColor.b + (activeColor.b - baseColor.b) * ratio);
                }

                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

                // 8. Geometry
                ctx.beginPath();
                if (p.shape === 'square') {
                    ctx.fillRect(p.x, p.y, p.size, p.size);
                } else {
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        init();
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
};

export default QuantumBackground;
