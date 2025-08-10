import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    <a href="/terms" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;