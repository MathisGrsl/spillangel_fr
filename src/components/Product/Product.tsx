import React from 'react';
import './Product.css';

const Product: React.FC = () => {
    return (
        <section className="product">
            <video
                className="product-bg-video"
                src="/demo.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="product-title">OIL SPILL DETECTOR - SPILLANGEL</div>
            <div className="product-description">
                <p>
                    is a sensor transmitter that detects the presence of hydrocarbons using
                    invisible ultraviolet radiation.
                </p>
            </div>
        </section>
    );
};

export default Product;