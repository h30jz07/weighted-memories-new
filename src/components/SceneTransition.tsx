import React from 'react';
import { motion } from 'framer-motion';

interface SceneTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const SceneTransition: React.FC<SceneTransitionProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
};