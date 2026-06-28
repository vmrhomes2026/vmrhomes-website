import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroSection = ({ 
  title = 'Crafted with Vision', 
  subtitle = 'Built with Soul',
  description = 'Transform your living spaces into extraordinary interiors',
  backgroundImage = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: backgroundImage,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="container-custom relative z-10 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4">
          {title}
        </motion.h1>
        <motion.p variants={itemVariants} className="text-3xl md:text-4xl text-accent mb-6">
          {subtitle}
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/portfolio"
            className="px-8 py-4 bg-accent text-luxury rounded-lg hover:bg-primary-600 transition-all font-semibold text-lg"
          >
            View Portfolio
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-luxury transition-all font-semibold text-lg"
          >
            Get Free Consultation
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown className="text-white text-3xl" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
