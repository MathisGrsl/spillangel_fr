import React, {useEffect, useRef, useState} from 'react';
import './Specifications.css';

const specificationsData = [
    {spec: 'Distance de détection', value: '0.2 - 3 m'},
    {spec: 'Température de fonctionnement', value: '-20°C à +60°C'},
    {spec: 'Sortie analogique', value: '4-20mA'},
    {spec: 'Sensibilité aux huiles', value: '1 µm d\'épaisseur de film huileux'},
    {spec: 'Consommation', value: '1.5 W, 12 - 35 VDC (standard)'},
    {spec: 'Classe de sécurité d\'émission', value: '3B'},
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
            <h2>Spécifications techniques</h2>
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
