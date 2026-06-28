import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      testimonial: 'VMR Homes transformed our kitchen beyond our expectations. The team was professional and delivered on time.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Apartment Owner',
      testimonial: 'The wardrobe design is perfect! Great quality materials and excellent customer service throughout the process.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Villa Owner',
      testimonial: 'Outstanding work! The TV unit looks amazing and has increased the beauty of our living room significantly.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      role: 'Young Couple',
      testimonial: 'VMR Homes helped us design our dream home. The design team is very creative and responsive.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4'
    },
    {
      id: 5,
      name: 'Sanjay Singh',
      role: 'Business Owner',
      testimonial: 'Professional team with excellent execution. Our office looks sophisticated and functional now.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5'
    },
    {
      id: 6,
      name: 'Anjali Verma',
      role: 'Homeowner',
      testimonial: 'Best interior design company in the city! Highly recommend VMR Homes for quality and professionalism.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6'
    },
  ];

  return (
    <div>
      <HeroSection
        title="Testimonials"
        subtitle="What Our Clients Say"
        description="Real feedback from our satisfied customers"
      />

      <section className="section-spacing">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-4">Happy Clients</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testimonials from our satisfied customers across Hyderabad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
