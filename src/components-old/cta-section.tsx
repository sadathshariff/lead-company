import React from 'react';

const CTASection = () => {
    return (
        <section className="cta-section bg-blue-500 text-white p-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
                <p className="mb-6">Sign up to receive exclusive updates and offers.</p>
                <a href="/signup" className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
                    Sign Up Now
                </a>
            </div>
        </section>
    );
};

export default CTASection;