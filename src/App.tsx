import React from 'react';
import Features from './components/Features/Features';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Specifications from './components/Specifications/Specifications';
import Options from './components/Options/Options';
import More from './components/More/More';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App: React.FC = () => {
    return (
        <div className='app'>
            <Navbar />
            <div className="content">
                <section id="product"><Product /></section>
                <section id="features"><Features /></section>
                <section id="specifications"><Specifications /></section>
                <section id="options"><Options /></section>
                <section id="more"><More /></section>
                <Footer />
            </div>
        </div>
    );
};

export default App;