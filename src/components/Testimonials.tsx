import React from 'react';

const testimonialsData = [
  {
    quote: "The album cards were a game-changer for our latest release. Fans loved having a physical item to connect with the music instantly.",
    name: "Alexa Rivera",
    role: "Manager, Indie Band 'Starlight Echo'",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704f" // Changed seed for a different male avatar
  },
  {
    quote: "Streammi's Google Review cards simplified our feedback process. We've seen a 40% increase in customer reviews since we started using them.",
    name: "Samantha Chen",
    role: "Owner, 'The Corner Cafe'",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d"
  },
  {
    quote: "The custom NFC desk stands are not only functional but also incredibly stylish. They've become a great conversation starter at our front desk.",
    name: "Amanda Lee",
    role: "Founder, 'Innovate Tech'",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706e" // Changed seed for male avatar
  }
];

interface TestimonialCardProps {
    quote: string;
    name: string;
    role: string;
    avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatarUrl }) => {
  return (
    <div className="bg-brand-gray p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 border border-white">
      <img src={avatarUrl} alt={name} className="w-20 h-20 rounded-full mb-6 border-4 border-brand-red/50" />
      <blockquote className="text-gray-300 italic mb-6 flex-grow">"{quote}"</blockquote>
      <footer className="mt-auto">
        <p className="font-bold text-white text-lg">{name}</p>
        <p className="text-brand-red/80 text-sm">{role}</p>
      </footer>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real feedback from real partners who have transformed their engagement with NAGA NFC.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
