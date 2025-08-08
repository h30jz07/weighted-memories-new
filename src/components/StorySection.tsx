import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StorySectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  parallaxStrength?: number;
  overlay?: boolean;
}

export const StorySection: React.FC<StorySectionProps> = ({
  children,
  className = "",
  backgroundImage,
  parallaxStrength = 0.5,
  overlay = true
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * parallaxStrength]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Background with parallax */}
      {backgroundImage && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{ 
              backgroundImage: backgroundImage.startsWith('linear-gradient') 
                ? backgroundImage 
                : `url(${backgroundImage})` 
            }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-background-overlay" />
          )}
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};