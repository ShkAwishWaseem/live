import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Progress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="progressBar"
      initial={{ width: '0%' }}
      animate={{ width: `${scrollProgress}%` }}
    />
  );
};

export default Progress;
