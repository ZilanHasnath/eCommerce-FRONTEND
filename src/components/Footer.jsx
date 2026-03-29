import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-amber-400 text-black py-6 px-4 flex flex-col items-center gap-4 rounded-2xl shadow-md">

            <div className="text-lg font-semibold"> Connect with me: </div>

            <div className="flex gap-8 text-2xl">
                <a href="https://github.com/ZilanHasnath" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/zilanhasnath" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/ZilanHasnath" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                    <FaTwitter />
                </a>
            </div>

        </footer>
    );
};

export default Footer;