import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to Our Website</h1>
                <p className="hero-description">Your success starts here. Explore our services and solutions.</p>
                <a href="#services" className="hero-cta-button">Get Started</a>
            </div>
        </section>
    );
};

export default HeroSection;