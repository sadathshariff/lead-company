import React from 'react';

const ProblemSection = () => {
    return (
        <section className="problem-section">
            <h2 className="text-2xl font-bold">The Problem</h2>
            <p className="mt-4">
                Describe the problem that your product or service addresses. 
                Highlight the pain points and challenges faced by your target audience.
            </p>
            <ul className="mt-4 list-disc list-inside">
                <li>Problem 1: Brief description of the first problem.</li>
                <li>Problem 2: Brief description of the second problem.</li>
                <li>Problem 3: Brief description of the third problem.</li>
            </ul>
        </section>
    );
};

export default ProblemSection;