import React from 'react';

const testimonials = [
  {
    name: "João Silva",
    text: "Melodia transformou a forma como ouço música. Adoro a personalização!",
  },
  {
    name: "Maria Oliveira",
    text: "A experiência de ouvir música nunca foi tão boa. Recomendo a todos!",
  },
  {
    name: "Carlos Pereira",
    text: "As playlists são incríveis! Não consigo mais viver sem o Melodia.",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">O que nossos usuários dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;