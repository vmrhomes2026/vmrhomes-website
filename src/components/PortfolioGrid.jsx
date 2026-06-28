import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

const PortfolioGrid = ({ items = [] }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All', ...new Set(items.map((item) => item.category))];
  const filteredItems = selectedFilter === 'All' ? items : items.filter((item) => item.category === selectedFilter);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedFilter === filter
                ? 'bg-accent text-luxury'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default PortfolioGrid;
