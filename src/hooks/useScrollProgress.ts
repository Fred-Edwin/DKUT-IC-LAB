import { useEffect, useState, RefObject } from 'react';

export const useScrollProgress = (
    sectionRef: RefObject<HTMLDivElement>
): number => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress: 0 when section top hits 70% screen, 100% when bottom hits center
            const startOffset = windowHeight * 0.7;
            const scrolled = startOffset - rect.top;
            const totalHeight = rect.height;

            let percentage = (scrolled / totalHeight) * 100;
            percentage = Math.max(0, Math.min(percentage, 100)); // Clamp 0-100

            setProgress(percentage);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionRef]);

    return progress;
};
