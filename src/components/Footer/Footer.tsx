import React from 'react';
import './Footer.css'; // Assuming you will create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; Copyright {new Date().getFullYear()} - | Sensotop | All Rights Reserved </p>
            </div>
        </footer>
    );
};

export default Footer;