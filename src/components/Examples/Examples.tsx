import React, { useEffect, useRef, useState } from 'react';
import './Examples.css';

const Examples = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const videos = document.querySelectorAll<HTMLVideoElement>('.examples-table video');
        videos.forEach((video) => {
            video.volume = 0.0;
        });
    }, []);

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
            className={`examples ${visible ? 'visible' : 'hidden'}`}
            ref={sectionRef}
        >
            <h2>Examples on site</h2>
            <div className="examples-table">
                <video className="example-item" src="simulations/leakFromTank.mp4" controls />
                <img className="example-item" src="examples/2.jpg" alt="Example 2" />
                <img className="example-item" src="examples/3.jpg" alt="Example 3" />
                <video className="example-item" src="simulations/leakFromBoat.mp4" controls />
            </div>
        </section>
    );
};

export default Examples;
