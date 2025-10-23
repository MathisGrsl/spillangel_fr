import React, { useEffect, useRef, useState } from 'react';
import './Options.css';

const optionsData = [
    { spec: 'Poids', value: '0.8 kg' },
    { spec: 'Poids', value: '2.5 kg' },
    { spec: 'Cible', value: 'Diamètre Ø 10 cm' },
    { spec: 'Cible', value: 'Diamètre Ø 14 cm' },
    { spec: 'Boîtier', value: 'IP68, aluminium peint résistant à la corrosion' },
    { spec: 'Boîtier', value: 'IP66, aluminium résistant à la corrosion' },
];

const Options = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = sectionRef.current;
        const grandParent = sectionRef.current?.parentElement?.parentElement;
        if (!element || !grandParent) return;

        const handleScroll = () => {
            const grandParentRect = grandParent.getBoundingClientRect();
            const rect = element.getBoundingClientRect();
            const top = rect.top - grandParentRect.top;
            const bottom = rect.bottom - grandParentRect.top;
            const height = window.innerHeight;

            setVisible(bottom > 0 && top < height);
        };

        grandParent.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => grandParent.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className={`options ${visible ? 'visible' : 'hidden'}`}
            ref={sectionRef}
        >
            <h2>Options de boîtier</h2>
            <div className="options-content">
                <div className="options-title">
                    <h3>Standard SpillAngel</h3>
                    <h3>Atex SpillAngel</h3>
                </div>
                <div className="options-comparison">
                    {optionsData.map((item, index) => (
                        <div className="options-item" key={index}>
                            <span className="spec">{item.spec}</span>
                            <span className="value">{item.value}</span>
                        </div>
                    ))}
                </div>
                <div className="options-img">
                    <img src="standard.png" alt="Standard SpillAngel" />
                    <img src="atex.png" alt="Atex SpillAngel" />
                </div>
            </div>
        </section>
    );
};

export default Options;
