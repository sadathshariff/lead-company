import React from 'react';

const ResultsSection = () => {
    return (
        <section className="results-section">
            <h2 className="text-2xl font-bold">Our Results</h2>
            <div className="results-grid">
                {/* Example result item */}
                <div className="result-item">
                    <h3 className="result-title">Result Title</h3>
                    <p className="result-description">Description of the result achieved.</p>
                </div>
                {/* Add more result items as needed */}
            </div>
        </section>
    );
};

export default ResultsSection;