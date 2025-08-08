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
                src="/lovable-uploads/75a3f3b0-0d68-4626-8ea1-5216a7a654be.png" 
                alt="Dialogue between Meng and Madam Leong" 
                className="max-w-full h-auto transform scale-150"
              />
            </div>

            <div className="scrapbook-text transform rotate-0.5 max-w-2xl mx-auto mt-20">
              <p className="text-xl mb-6 leading-relaxed">
                Meng lacks empathy:
              </p>
              <ul className="text-left space-y-4 text-base">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <span>Focus only on his <strong>own discomfort</strong>, not the hoarder's emotional state</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <span><strong>Judge the surface problem</strong> without understanding deeper reasons like grief, trauma, or mental illness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <span>Use <strong>accusatory language</strong> that shames rather than supports</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="space-y-4">
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