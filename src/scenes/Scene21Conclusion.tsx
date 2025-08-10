import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene21Conclusion: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-highlight/20 to-background flex flex-col items-center justify-center p-8 space-y-12">
        
        {/* Heading + narrative text */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12 text-highlight">
            The Power of Empathy
          </h1>
          <p className="narrative-text mb-12">
            {/* Optional description could go here */}
          </p>
        </div>

        {/* Full-width image */}
        <div className="w-screen flex justify-center">
          <img
            src="/lovable-uploads/58cbcfa2-bdde-461f-b345-cd2394600db0.png"
            alt="Empathy conclusion with community message"
            className="h-auto max-w-7xl w-full"
          />
        </div>


        {/* Buttons + caption */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <StoryButton
            variant="primary"
            onClick={() => {
              localStorage.removeItem('scene4ThrownAwayItems');
              navigate('/');
            }}
            className="text-lg px-8 py-4"
          >
            Start the Journey Again
          </StoryButton>

          <p className="caption-text text-foreground-muted">
            Thank you for exploring the power of empathy with us
          </p>
        </div>

        {/* Credits section */}
        <div className="fixed bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 max-w-xs">
          <h3 className="text-xs font-semibold text-foreground-muted mb-2">Credits</h3>
          <div className="space-y-1">
            <a 
              href="https://www.youtube.com/watch?v=9W0UIbQC3qU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xs text-primary hover:text-primary/80 transition-colors"
            >
              YouTube Video 1
            </a>
            <a 
              href="https://www.youtube.com/watch?v=uqKBKewYJNU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xs text-primary hover:text-primary/80 transition-colors"
            >
              YouTube Video 2
            </a>
            <a 
              href="https://www.youtube.com/watch?v=oMWNwE7C_iI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xs text-primary hover:text-primary/80 transition-colors"
            >
              YouTube Video 3
            </a>
            <a 
              href="https://www.youtube.com/watch?v=Pjs0vzEy4q0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-xs text-primary hover:text-primary/80 transition-colors"
            >
              YouTube Video 4
            </a>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};
