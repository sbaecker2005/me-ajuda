import React, { useState } from 'react';

const CallToActionSection: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the email submission logic here
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <section className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated!</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest updates and offers.</p>
            <form onSubmit={handleSubmit} className="flex justify-center">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="p-2 rounded-l-md focus:outline-none"
                    required
                />
                <button type="submit" className="bg-blue-700 p-2 rounded-r-md hover:bg-blue-600">
                    Subscribe
                </button>
            </form>
        </section>
    );
};

export default CallToActionSection;