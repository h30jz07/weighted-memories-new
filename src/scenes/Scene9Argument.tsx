import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene9Argument: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div 
        className="min-h-screen bg-gradient-to-b from-destructive/20 to-background flex items-center justify-center p-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/d843af6b-6afd-48cd-8022-2b69a8eab5ca.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Scene visualization */}
          
          <div className="max-w-3xl mx-auto space-y-8 mb-12">
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/e72e9802-3874-41d2-b73b-544ffce41e66.png" 
                alt="Dialogue between Meng and Madam Leong with empathy explanation" 
                className="max-w-full h-auto transform scale-150"
              />
            </div>

          </div>

          <div className="space-y-4 mt-32">
            <StoryButton
              variant="primary"
              onClick={() => navigate('/scene/9a')}
              className="text-lg px-8 py-4"
            >
              Next &gt;
            </StoryButton>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};