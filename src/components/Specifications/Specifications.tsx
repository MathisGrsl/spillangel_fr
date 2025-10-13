import React from 'react';
import './Specifications.css';

const specificationsData = [
    { spec: 'Detection distance', value: '0.2 - 3 m' },
    { spec: 'Operating temperature', value: '-20°C to +60°C' },
    { spec: 'Adjustable modulation', value: '0,1 - 2500 Hz' },
    { spec: 'Sensitivity to oils', value: '1 µm oil film thickness' },
    { spec: 'Consumption', value: '1.5 W, 12 - 35 VDC (standard)' },
    { spec: 'Emission safety class', value: '3B' },
];

const Specifications = () => {
    return (
        <section className="specifications">
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