import React from 'react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'Marketing Director, TechCorp',
    quote: 'cleanLeads has revolutionized our lead generation process. The AI-powered validation saves us countless hours and the data quality is exceptional.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Sales Manager, GrowthCo',
    quote: 'The analytics dashboard provides invaluable insights into our lead generation efforts. It has become an essential tool for our sales team.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateX',
    quote: 'The API integration was seamless, and the support team was incredibly helpful. We have seen a 40% increase in qualified leads since implementing cleanLeads.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers say about transforming their lead management with cleanLeads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="h-16 w-16 mx-auto mb-6">
                <img 
                  src={`https://placehold.co/100x100?text=${testimonial.name.split(' ')[0]}`} 
                  alt={testimonial.name} 
                  className="rounded-full"
                />
              </div>
              <blockquote className="text-gray-600 text-center mb-6">"{testimonial.quote}"</blockquote>
              <div className="text-center">
                <cite className="font-semibold text-gray-900 block">{testimonial.name}</cite>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;