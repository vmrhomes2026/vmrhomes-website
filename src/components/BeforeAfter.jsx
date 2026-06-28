import { useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfter = ({ before, after, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-lg aspect-video cursor-col-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={(e) => handleMouseMove(e.touches[0])}
    >
      <img src={after} alt="After" className="w-full h-full object-cover" loading="lazy" />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${100 - sliderPosition}%` }}
      >
        <img src={before} alt="Before" className="w-screen h-full object-cover" loading="lazy" />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-accent"
        style={{ left: `${100 - sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-luxury rounded-full p-3">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-accent text-luxury px-4 py-2 rounded-lg text-sm font-semibold">
        After
      </div>
    </motion.div>
  );
};

export default BeforeAfter;
