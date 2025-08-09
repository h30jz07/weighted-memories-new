import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene21Conclusion: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-highlight/20 to-background flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12 text-highlight">
            The Power of Empathy
          </h1>
          
          <div className="narrative-text space-y-8 mb-12">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/287f2650-8f37-44d4-96e1-4c80ba7833b8.png" 
                alt="Empathy conclusion with community photo showing how empathy transforms interactions and communities" 
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
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
        </div>
      </div>
    </SceneTransition>
  );
};