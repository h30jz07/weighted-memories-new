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
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-6 text-destructive">
              When Frustration Takes Over
            </h1>
          </div>
          
          <div className="narrative-text max-w-3xl mx-auto space-y-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-destructive/20">
              <div className="mb-4">
                <span className="font-semibold text-destructive">Meng:</span>
                <p className="mt-2 text-destructive-foreground italic">
                  "This is disgusting! The whole corridor smells because of your flat. 
                  You need to clean this mess up right now. It's not fair to the rest of us!"
                </p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-card-border">
              <div className="mb-4">
                <span className="font-semibold text-accent-warm">Madam Leong:</span>
                <p className="mt-2 italic">
                  "You don't understand! This is my home, 
                  my life. You have no right to tell me what to do with my belongings!"
                </p>
              </div>
            </div>

            <div className="bg-accent-warm/20 backdrop-blur-sm p-8 rounded-lg border border-accent-warm/30">
                <h2 className="text-2xl font-semibold mb-6 text-highlight">
                  ❌ Why This Option Shows No Empathy
                </h2>
                <div className="bg-card/50 p-6 rounded-lg">
                  <p className="text-lg mb-6 leading-relaxed">
                    When Meng complains about the smell, they lack empathy because they:
                  </p>
                  <ul className="text-left space-y-4 text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-destructive font-bold text-lg">•</span>
                      <span>Focus only on their <strong>own discomfort</strong>, not the hoarder's emotional state</span>
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

          </div>

          <div className="space-y-4">
            <StoryButton
              variant="primary"
              onClick={() => navigate('/scene/9a')}
              className="text-lg px-8 py-4"
            >
              Continue →
            </StoryButton>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};