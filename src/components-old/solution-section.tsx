import React from 'react';

const SolutionSection = () => {
    return (
        <section className="solution-section">
            <div className="container">
                <h2 className="section-title">Our Solutions</h2>
                <p className="section-description">
                    We provide a range of solutions tailored to meet your needs. Our team of experts is dedicated to delivering high-quality services that drive results.
                </p>
                <div className="solutions-list">
                    <div className="solution-item">
                        <h3>Solution 1</h3>
                        <p>Description of solution 1.</p>
                    </div>
                    <div className="solution-item">
                        <h3>Solution 2</h3>
                        <p>Description of solution 2.</p>
                    </div>
                    <div className="solution-item">
                        <h3>Solution 3</h3>
                        <p>Description of solution 3.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;