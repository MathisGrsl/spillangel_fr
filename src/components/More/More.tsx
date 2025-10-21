import React, {useEffect, useRef, useState} from 'react';
import './More.css';

const More = () => {
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

        grandParent.addEventListener('scroll', handleScroll, {passive: true});
        handleScroll();
        return () => grandParent.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`more ${visible ? 'visible' : 'hidden'}`} ref={sectionRef}>
            <h2>More Information</h2>
            <div className="more-content">
                <p>
                    The sensor uses pulsed ultraviolet (UV) light. When the UV light hits water or soil containing oil,
                    the hydrocarbons absorb it and re-emit light at a shifted frequency (fluorescence). This fluorescent
                    signal is detected, analyzed, and triggers an ALARM through the communication line. The sensor is
                    insensitive to other objects in its detection area. SpillAngel can detect various petroleum
                    products, including crude oil, diesel, heating oil, hydraulic and lubricating oils, and marine
                    diesel.
                </p>
                <img src="./graph.png" alt="" />
            </div>
        </section>
    );
};

export default More;
