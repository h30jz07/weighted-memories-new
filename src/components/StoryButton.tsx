import React from 'react';
import { cn } from '@/lib/utils';

interface StoryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'choice' | 'sticky-note';
  children: React.ReactNode;
}

export const StoryButton: React.FC<StoryButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const baseClasses = "story-button inline-flex items-center justify-center text-lg font-normal transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover border-2 border-card-border",
    choice: "bg-accent-warm text-accent-warm-foreground hover:bg-accent-warm/90 min-w-[200px] transform hover:rotate-0 rotate-[-0.8deg]",
    'sticky-note': "bg-gradient-to-br from-yellow-200 to-yellow-300 text-gray-800 hover:from-yellow-300 hover:to-yellow-400 border-2 border-yellow-400/60 shadow-sticky transform rotate-[-1.2deg] hover:rotate-0 relative before:content-[''] before:absolute before:top-[-3px] before:right-2 before:w-3 before:h-3 before:bg-yellow-400 before:rounded-full before:shadow-inner"
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};