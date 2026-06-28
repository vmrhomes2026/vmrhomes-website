import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from './CountUp';

const StatisticsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const stats = [
    { label: 'Happy Clients', value: 500, suffix: '+' },
    { label: 'Projects Completed', value: 350, suffix: '+' },
    { label: 'Years of Experience', value: 15, suffix: '+' },
    { label: 'Awards Won', value: 25, suffix: '+' },
  ];

  return (
    <section className="luxury-gradient section-spacing text-white">
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {inView && <CountUp value={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
