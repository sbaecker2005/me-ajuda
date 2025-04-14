import React from 'react';

const FeaturesSection: React.FC = () => {
    const features = [
        {
            title: 'Criação de Playlists',
            description: 'Organize suas músicas favoritas em playlists personalizadas.',
        },
        {
            title: 'Recomendações',
            description: 'Receba sugestões de músicas com base no seu gosto.',
        },
        {
            title: 'Modo Offline',
            description: 'Ouça suas músicas mesmo sem conexão à internet.',
        },
        {
            title: 'Integração Social',
            description: 'Compartilhe suas músicas e playlists com amigos.',
        },
    ];

    return (
        <section id="features" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Recursos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;