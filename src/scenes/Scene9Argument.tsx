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
          
          <div className="narrative-text max-w-3xl mx-auto space-y-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-destructive/20">
              <div className="mb-4">
                <span className="font-semibold text-destructive">Meng:</span>
                <p className="mt-2 text-destructive-foreground italic">
                  "This is damn disgusting! The whole corridor smells because of your flat. 
                    Can you clean this mess up. It's affecting everyone!"
                </p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-card-border">
              <div className="mb-4">
                <span className="font-semibold text-accent-warm">Madam Leong:</span>
                <p className="mt-2 italic">
                  "knn! This is also not your home. Mind your own business!"
                </p>
              </div>
            </div>

            <div className="bg-accent-warm/20 backdrop-blur-sm p-8 rounded-lg border border-accent-warm/30">
              
                  <p className="text-lg mb-6 leading-relaxed">
                    Meng lacks empathy:
                  </p>
                  <ul className="text-left space-y-4 text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-destructive font-bold text-lg">•</span>
                      <span>Focus only on his <strong>own discomfort</strong>, not the hoarder's emotional state</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive font-bold text-lg">•</span>
                      <span><strong>Judge the surface problem</strong> without understanding deeper reasons like grief, trauma, or mental illness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive font-bold text-lg">•</span>
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
              Next →
            </StoryButton>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};