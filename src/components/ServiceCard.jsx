import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, features = [] }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-2xl transition-all"
    >
      {Icon && (
        <div className="text-5xl text-accent mb-4">
          <Icon />
        </div>
      )}

      <h3 className="text-2xl font-bold text-luxury mb-3">{title}</h3>

      <p className="text-gray-600 mb-4">{description}</p>

      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-700 flex items-start gap-2">
              <span className="text-accent mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
