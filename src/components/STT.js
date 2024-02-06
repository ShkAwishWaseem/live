import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const controls = useAnimation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowButton = window.scrollY > 100;
      setShowButton(shouldShowButton);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: showButton ? 1 : 0 });
  }, [controls, showButton]);

  const buttonStyles = {
    position: 'fixed',
  bottom: '20px',
  right: '20px',
  background: '#001f3f',
  color: '#f8f8f8',

  border: 'none',
  padding: '10px',
  borderRadius: '100%',
  padding: '8px 10px' ,
  cursor: 'pointer',
  };
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.2 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={buttonStyles}
      className='stt_btn'
      
    >
      {/* Scroll to Top */}
      <KeyboardArrowUpIcon/>
    </motion.button>
  );
};

export default ScrollToTopButton;
