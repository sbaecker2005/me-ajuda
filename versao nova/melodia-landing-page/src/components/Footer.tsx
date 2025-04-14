import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold">Melodia</h2>
                    <p>Transformando a forma como você ouve música.</p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-semibold">Contato</h3>
                    <p>Email: contato@melodia.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-semibold">Redes Sociais</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                            Facebook
                        </button>
                        <button className="bg-blue-400 text-white px-4 py-2 rounded-full">
                            Twitter
                        </button>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                            Instagram
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;