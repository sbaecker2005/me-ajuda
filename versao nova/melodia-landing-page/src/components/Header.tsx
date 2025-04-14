import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full transition-opacity duration-300 ${isScrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'}`}>
            <nav className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold text-gray-800">Melodia</div>
                <ul className="flex space-x-4">
                    <li><a href="#hero" className="text-gray-800 hover:text-blue-500">Home</a></li>
                    <li><a href="#benefits" className="text-gray-800 hover:text-blue-500">Benefícios</a></li>
                    <li><a href="#features" className="text-gray-800 hover:text-blue-500">Recursos</a></li>
                    <li><a href="#testimonials" className="text-gray-800 hover:text-blue-500">Depoimentos</a></li>
                    <li><a href="#contact" className="text-gray-800 hover:text-blue-500">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;