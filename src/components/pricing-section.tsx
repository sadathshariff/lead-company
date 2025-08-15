import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const pricingPlans = [
  {
    name: "Basic",
    price: "$99",
    period: "/month",
    description:
      "Simple chatbot to answer queries from your website or provided training data.",
    features: [
      "Simple chatbot to answer queries",
      "Easy embed on any site",
      "500 chats per month",
    ],
    chatLimit: "500 chats",
    popular: false,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Standard",
    price: "$199",
    period: "/month",
    description:
      "Everything in Basic plus lead capturing and contact form integration.",
    features: [
      "Everything in Basic",
      "Lead capturing (via email or CSV export)",
      "Contact form integration",
      "1,500 chats per month",
    ],
    chatLimit: "1,500 chats",
    popular: false,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Advanced",
    price: "$249",
    period: "/month",
    description:
      "Everything in Standard plus instant notifications and custom branding.",
    features: [
      "Everything in Standard",
      "Instant lead notifications via WhatsApp/SMS/Email",
      "Custom branding",
      "3,000 chats per month",
    ],
    chatLimit: "3,000 chats",
    popular: true,
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Premium",
    price: "$499",
    period: "/month",
    description:
      "Everything in Advanced plus appointment booking and calendar sync.",
    features: [
      "Everything in Advanced",
      "Appointment booking system integrated into chatbot",
      "Calendar sync & reminders",
      "Unlimited chats",
    ],
    chatLimit: "Unlimited chats",
    popular: false,
    color: "from-emerald-500 to-emerald-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverVariants = {
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function PricingSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetStarted = () => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contact" } });
      return;
    }

    // If we're already on home page, scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6 pt-16">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start with our Basic plan and scale up as your business grows. All
            plans include our core chatbot technology with additional features.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover="hover"
              className={`relative group ${plan.popular ? "lg:scale-105" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <motion.div
                variants={hoverVariants}
                className={`relative h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 flex flex-col ${
                  plan.popular
                    ? "ring-2 ring-orange-500/50 shadow-2xl shadow-orange-500/20"
                    : "hover:border-gray-600/50 hover:bg-gray-800/70"
                }`}
              >
                {/* Plan Name */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${plan.color} text-white`}
                    >
                      {plan.chatLimit}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 + featureIndex * 0.1,
                      }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGetStarted}
                  className={`mt-auto w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25"
                      : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-gray-600 hover:border-gray-500"
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Need a custom plan? Contact us for enterprise solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
