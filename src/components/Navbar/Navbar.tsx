import React, { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = [
  { to: 'product', label: 'Product' },
  { to: 'features', label: 'Features' },
  { to: 'specifications', label: 'Specifications' },
  { to: 'options', label: 'Options' },
  { to: 'more', label: 'More' },
];

const Navbar = () => {
  const [active, setActive] = useState('product');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map(item => {
        const el = document.getElementById(item.to);
        if (!el) return { id: item.to, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.to, top: Math.abs(rect.top) };
      });
      const current = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(current.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <aside className="navbar">
      <img
        src="/logo.png"
        alt="SpillAngel Logo"
        className={`logo logo-fade${animate ? ' logo-fade-in' : ''}`}
      />
      <nav>
        <ul>
          {navItems.map((item, idx) => (
            <li
              key={item.to}
              className={
                `${active === item.to ? 'active' : ''} nav-item-anim${animate ? ' nav-item-anim-in' : ''}`
              }
              style={{
                transitionDelay: animate ? `${0.3 + idx * 0.12}s` : '0s'
              }}
            >
              <button
                className={active === item.to ? 'active' : ''}
                onClick={() => handleClick(item.to)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={`contact-button contact-anim${animate ? ' contact-anim-in' : ''}`}
      >
        Contact
      </button>
    </aside>
  );
};

export default Navbar;