import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene14CompassionFatigue: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/lovable-uploads/socialworker.png')` }}
        >
          {/* White overlay for the background */}
          <div className="absolute inset-0 bg-white/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              {/* <h1 className="text-3xl font-bold mb-6 text-foreground">
                The Weight of Caring
              </h1> */}
            </div>
            
            <div className="max-w-4xl mx-auto mb-12">
              <img 
                src="/lovable-uploads/bc5e1823-0c95-4633-9d4c-4408a406ec40.png" 
                alt="Fion's internal struggle with compassion fatigue - showing her thoughts about having too many cases and needing a break, along with explanation of compassion fatigue"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-4">
              <StoryButton
                variant="secondary"
                onClick={() => navigate('/scene/13')}
                className="text-lg px-8 py-4"
              >
                ← Back to Previous
              </StoryButton>
              
            </div>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};
