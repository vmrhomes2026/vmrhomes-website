import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, role, testimonial, rating = 5, image }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-2xl transition-all"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 mb-6 italic">"</p>
      <p className="text-gray-700 mb-6">{testimonial}</p>

      <div className="flex items-center gap-4 pt-4 border-t">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          />
        )}
        <div>
          <h4 className="font-bold text-luxury">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
