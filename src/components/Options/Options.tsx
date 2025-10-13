import React from 'react';
import './Options.css';

const optionsData = [
    { spec: 'Weight', value: '0.8 kg' },
    { spec: 'Weight', value: '2.5 kg' },
    { spec: 'Target', value: 'Diameter Ø 10 cm' },
    { spec: 'Target', value: 'Diameter Ø 14 cm' },
    { spec: 'Case', value: 'IP68, corrosion-resistant painted aluminum' },
    { spec: 'Case', value: 'IP66, corrosion-resistant aluminum' },
];

const Options = () => {
    return (
        <section className="options">
            <h2>Case Options</h2>
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