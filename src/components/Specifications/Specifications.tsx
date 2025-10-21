import React, {useEffect, useRef, useState} from 'react';
import './Specifications.css';

const specificationsData = [
    {spec: 'Detection distance', value: '0.2 - 3 m'},
    {spec: 'Operating temperature', value: '-20°C to +60°C'},
    {spec: 'Analog Output', value: '4-20mA'},
    {spec: 'Sensitivity to oils', value: '1 µm oil film thickness'},
    {spec: 'Consumption', value: '1.5 W, 12 - 35 VDC (standard)'},
    {spec: 'Emission safety class', value: '3B'},
];

const Specifications = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = sectionRef.current;
        const grandParent = element?.parentElement?.parentElement;
        if (!element || !grandParent) return;

        const handleScroll = () => {
            const rect = element.getBoundingClientRect();
            const height = window.innerHeight;
            const inView = rect.top < height * 0.8 && rect.bottom > height * 0.2;
            setVisible(inView);
        };

        handleScroll(); // Vérifie au chargement
        grandParent.addEventListener('scroll', handleScroll, {passive: true});
        return () => grandParent.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`specifications ${visible ? 'visible' : ''}`} ref={sectionRef}>
            <h2>Technical Specifications</h2>
            <div className="specifications-table">
                {specificationsData.map((item, index) => (
                    <div className="specification-item" key={index}>
                        <span className="spec">{item.spec}</span>
                        <span className="value">{item.value}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Specifications;
