import { useEffect, useState } from 'react';

const CountUp = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(value / 30);
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= value) {
          clearInterval(timer);
          return value;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

export default CountUp;
