import React from 'react';

const ProcessSection = () => {
    return (
        <section className="process-section">
            <h2 className="text-2xl font-bold mb-4">Our Process</h2>
            <div className="process-steps">
                <div className="step">
                    <h3 className="font-semibold">Step 1: Consultation</h3>
                    <p>We start with a consultation to understand your needs and goals.</p>
                </div>
                <div className="step">
                    <h3 className="font-semibold">Step 2: Planning</h3>
                    <p>Our team creates a detailed plan tailored to your project.</p>
                </div>
                <div className="step">
                    <h3 className="font-semibold">Step 3: Execution</h3>
                    <p>We execute the plan with precision and dedication.</p>
                </div>
                <div className="step">
                    <h3 className="font-semibold">Step 4: Review</h3>
                    <p>We review the project with you to ensure satisfaction.</p>
                </div>
                <div className="step">
                    <h3 className="font-semibold">Step 5: Launch</h3>
                    <p>Finally, we launch your project and provide ongoing support.</p>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;