import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene14aEmpathy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-background to-background-secondary flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-accent-cool/20 to-accent-warm/20 backdrop-blur-sm p-8 rounded-lg border border-accent-cool/30 flex items-center gap-6 mb-12">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/8fed1935-1f88-4df9-9f57-2461ea178af1.png" 
                alt="Cute squirrel" 
                className="w-24 h-24 rounded-full object-cover border-4 border-accent-cool/30"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-highlight">
                💝 Empathy in Action
              </h2>
              <p className="text-lg leading-relaxed">
                When helping someone clean and organize, empathy means understanding that every item 
                might hold deep emotional significance. Moving slowly, asking permission, and respecting 
                their attachment to possessions—even when it seems irrational—builds trust and makes 
                the process less traumatic. Small acts of consideration can prevent major setbacks.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <StoryButton
              variant="primary"
              onClick={() => navigate('/scene/15')}
              className="text-lg px-8 py-4"
            >
              Continue to the Cleanup Scenarios →
            </StoryButton>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};