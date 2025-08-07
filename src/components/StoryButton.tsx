import React from 'react';
import { cn } from '@/lib/utils';

interface StoryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'choice';
  children: React.ReactNode;
}

export const StoryButton: React.FC<StoryButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const baseClasses = "story-button inline-flex items-center justify-center text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover border border-card-border",
    choice: "bg-accent-warm text-accent-warm-foreground hover:bg-accent-warm/80 min-w-[200px]"
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