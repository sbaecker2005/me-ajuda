import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-center">
            <div>
                <h1 className="text-5xl font-bold mb-4">Melodia: Sua Música, Sua Forma</h1>
                <p className="text-lg mb-8">Descubra a trilha sonora da sua vida com Melodia. Ouça, crie e compartilhe suas playlists favoritas.</p>
                <a href="#features" className="bg-white text-purple-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition">
                    Ouvir Agora
                </a>
            </div>
        </section>
    );
};

export default HeroSection;