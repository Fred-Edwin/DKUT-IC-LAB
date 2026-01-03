export interface Point {
    x: number;
    y: number;
}

export type ParticleShape = 'circle' | 'square';

export interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
    size: number;
    shape: ParticleShape;
}

export interface Stage {
    id: number;
    tag: string;
    title: string;
    desc: string;
}
