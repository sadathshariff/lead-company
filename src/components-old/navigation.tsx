import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/">SiteCraft</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
                    </li>
                    <li>
                        <Link to="/ai-lead-generation" className="text-gray-300 hover:text-white">AI Lead Generation</Link>
                    </li>
                    <li>
                        <Link to="/seo-optimization" className="text-gray-300 hover:text-white">SEO Optimization</Link>
                    </li>
                    <li>
                        <Link to="/website-development" className="text-gray-300 hover:text-white">Website Development</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;