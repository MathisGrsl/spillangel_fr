import React, {useState, useEffect} from 'react';
import Features from './components/Features/Features';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Specifications from './components/Specifications/Specifications';
import Options from './components/Options/Options';
import More from './components/More/More';
import Footer from './components/Footer/Footer';
import Examples from './components/Examples/Examples';
import './styles/global.css';
import Contact from './components/Contact/Contact';

const navItems = [
    {to: 'product', label: 'Product'},
    {to: 'features', label: 'Features'},
    {to: 'specifications', label: 'Specifications'},
    {to: 'options', label: 'Options'},
    {to: 'examples', label: 'Examples'},
    {to: 'more', label: 'More'},
    {to: 'contact', label: 'Contact'},
];

const App: React.FC = () => {
    const [active, setActive] = useState('product');

    useEffect(() => {
        const content = document.querySelector('.content');

        if (!content) return;

        const handleScroll = () => {
            const offsets = navItems.map((item) => {
                const el = document.getElementById(item.to);
                if (!el) return {id: item.to, top: Infinity};
                const rect = el.getBoundingClientRect();
                return {id: item.to, top: rect.top};
            });

            const current = offsets.reduce((a, b) => (Math.abs(a.top) < Math.abs(b.top) ? a : b));
            setActive(current.id);
        };

        content.addEventListener('scroll', handleScroll, {passive: true});
        handleScroll();
        return () => content.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app">
            <Navbar active={active} setActive={setActive} navItems={navItems} />
            <div className="content">
                <section id="product">
                    <Product />
                </section>
                <section id="features">
                    <Features />
                </section>
                <section id="specifications">
                    <Specifications />
                </section>
                <section id="options">
                    <Options />
                </section>
                <section id="examples">
                    <Examples />
                </section>
                <section id="more">
                    <More />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default App;
