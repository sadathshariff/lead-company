import React from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return any item within 30 days of purchase for a full refund."
        },
        {
            question: "How do I track my order?",
            answer: "You will receive a tracking number via email once your order has shipped."
        },
        {
            question: "Can I purchase items in bulk?",
            answer: "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach our customer support team via email or through our contact form on the website."
        }
    ];

    return (
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3 className="faq-question">{faq.question}</h3>
                        <p className="faq-answer">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;