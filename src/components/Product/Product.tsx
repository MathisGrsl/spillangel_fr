import React, {useEffect, useState} from 'react';
import './Product.css';

const Product: React.FC = () => {
    const title = 'OIL SPILL DETECTOR - SPILLANGEL';
    const description =
        'is a sensor transmitter that detects the presence of hydrocarbons using invisible ultraviolet radiation.';

    const [visibleTitle, setVisibleTitle] = useState('');
    const [visibleDescription, setVisibleDescription] = useState('');
    const [skipFirtVerif, setSkipFirstVerif] = useState(false);

    useEffect(() => {
        if (!skipFirtVerif) {
            setSkipFirstVerif(true);
            return;
        }
        const animateText = async (
            text: string,
            setVisible: React.Dispatch<React.SetStateAction<string>>,
            delay: number
        ) => {
            for (let i = 0; i < text.length; i++) {
                setVisible((prev) => prev + text[i]);
                await new Promise((res) => setTimeout(res, delay));
            }
        };

        const runAnimation = async () => {
            await animateText(title, setVisibleTitle, 50);
            await animateText(description, setVisibleDescription, 30);
        };

        runAnimation();
    }, [skipFirtVerif]);

    return (
        <section className="product">
            <video className="product-bg-video" src="/demo.mp4" autoPlay loop muted playsInline />
            <div className="product-title">{visibleTitle}</div>
            <div className="product-description">{visibleDescription}</div>
        </section>
    );
};

export default Product;
