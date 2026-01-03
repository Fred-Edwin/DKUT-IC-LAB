import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
}

export const useIntersectionObserver = (
    options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
    const { threshold = 0.15, rootMargin = '0px' } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin]);

    return [ref, isVisible];
};
