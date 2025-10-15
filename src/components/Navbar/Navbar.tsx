import React, {useEffect, useState} from 'react';
import './Navbar.css';

interface NavbarProps {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
    navItems: {to: string; label: string}[];
}

const Navbar: React.FC<NavbarProps> = ({active, setActive, navItems}) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100);
    }, []);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
            setActive(id);
        }
    };

    return (
        <aside className="navbar">
            <img src="/logo.png" alt="SpillAngel Logo" className={`logo logo-fade${animate ? ' logo-fade-in' : ''}`} />
            <nav>
                <ul>
                    {navItems.map((item, idx) => (
                        <li
                            key={item.to}
                            className={`${active === item.to ? 'active' : ''} nav-item-anim${
                                animate ? ' nav-item-anim-in' : ''
                            }`}
                            style={{
                                transitionDelay: animate ? `${0.3 + idx * 0.12}s` : '0s',
                            }}
                        >
                            <button
                                className={active === item.to ? 'active' : ''}
                                onClick={() => handleClick(item.to)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    font: 'inherit',
                                }}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className={`contact-button contact-anim${animate ? ' contact-anim-in' : ''}`}>Contact</button>
        </aside>
    );
};

export default Navbar;
