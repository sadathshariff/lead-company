import { useState } from 'react';

const faqs = [
	{
	question: 'How long does it take to build my website?',
	answer:
		'Most projects are completed in about 10–14 days, depending on the scope and features. This covers strategy, design, development, AI integration, and testing. Our accelerated process gets you generating leads quickly while ensuring everything is built to last.',
},

	{
		question: 'Do you provide ongoing support after launch?',
		answer:
			'Yes! We provide 3 months of included support after launch, and then offer ongoing maintenance packages. We\'re committed to your long-term success and will help optimize your website for better results.',
	},
	{
		question: 'Can you work with my existing website?',
		answer:
			'Absolutely! We can either redesign your existing website or build a completely new one. We\'ll analyze your current site and recommend the best approach to maximize your lead generation potential.',
	},
	{
		question: 'How much does it cost?',
		answer:
			'Our pricing varies based on your specific needs, but typically ranges from $3,000-$8,000 for a complete website with AI lead generation. This includes design, development, AI integration, and 3 months of support. We also offer flexible payment plans.',
	},
	{
		question: 'What makes your websites different from others?',
		answer:
			'Our websites are built specifically for lead generation, not just looks. We combine conversion-focused design with AI-powered automation to capture and qualify leads 24/7. Plus, we focus on SEO to drive organic traffic.',
	},
	{
		question: 'Do you guarantee results?',
		answer:
			'While we can\'t guarantee specific numbers (as results depend on many factors), we do guarantee that your website will be optimized for conversions and lead generation. We\'ve helped hundreds of businesses increase their leads by 150-300%.',
	},
	{
		question: 'What industries do you work with?',
		answer:
			'We work with service-based businesses across all industries including construction, healthcare, legal, consulting, real estate, and more. Our system is designed to work for any business that wants to generate more qualified leads.',
	},
	{
		question: 'How do you handle SEO and Google rankings?',
		answer:
			'We build SEO optimization into every website from the ground up. This includes technical SEO, content optimization, mobile-first design, and local SEO for businesses serving specific geographic areas. We also provide ongoing SEO recommendations.',
	},
];

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section id="faq" className="py-20 bg-gray-950">
			<div className="max-w-3xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
					Frequently Asked Questions
				</h2>
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="bg-gray-900 rounded-xl border border-gray-800"
						>
							<button
								className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
								onClick={() => toggleFAQ(index)}
							>
								<span className="text-lg font-medium text-white">
									{faq.question}
								</span>
								<span className="ml-4 text-2xl text-blue-400">
									{openIndex === index ? '-' : '+'}
								</span>
							</button>
							{openIndex === index && (
								<div className="px-6 pb-6 pt-2">
									<p className="text-gray-300 leading-relaxed mt-2">
										{faq.answer}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
