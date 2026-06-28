import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Lightbox = ({ image, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-4xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.image}
          alt={image.title}
          className="w-full h-full object-contain rounded-lg"
        />
        <div className="mt-4 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
          <p className="text-gray-300">{image.description}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
        >
          <FiX size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;
