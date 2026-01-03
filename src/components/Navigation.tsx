import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-100px 0px -60% 0px' }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { label: 'Research', id: 'research' },
        { label: 'Publications', id: 'publications' },
        { label: 'Team', id: 'team' },
        { label: 'Facilities', id: 'facilities' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <nav className="w-full px-6 py-8 md:px-12 lg:px-20 flex items-center justify-between">
            <a href="#" className="text-xl md:text-2xl font-black tracking-tight text-deep-black hover:opacity-70 transition-opacity duration-300">
                DKUT IC LAB
            </a>

            <div className="hidden md:flex items-center gap-10">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`text-sm font-medium transition-all duration-300 relative ${activeSection === item.id
                                ? 'text-steel-blue font-semibold'
                                : 'text-deep-black/70 hover:text-deep-black'
                            }`}
                    >
                        {item.label}
                        {activeSection === item.id && (
                            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-steel-blue"></span>
                        )}
                    </a>
                ))}
            </div>

            <button className="md:hidden text-deep-black">
                <span className="material-symbols-outlined !text-3xl">menu</span>
            </button>
        </nav>
    );
};

export default Navigation;
