import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene14CompassionFatigue: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-muted/30 flex items-center justify-center">
              <span className="text-4xl">💔</span>
            </div>
            <h1 className="text-3xl font-bold mb-6 text-foreground">
              The Weight of Caring
            </h1>
          </div>
          
          <div className="narrative-text max-w-3xl mx-auto space-y-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-card-border">
              <h2 className="text-xl font-semibold mb-4 text-accent-cool">
                Fion's Internal Struggle
              </h2>
              <p className="mb-4 italic">
                "I have so many other cases to handle. Sometimes I feel like I'm carrying 
                everyone's pain, and I'm not sure I have enough left to give."
              </p>
              <p className="mb-4 italic">
                "Maybe someone else should take this case. Maybe I need to think about myself for once."
              </p>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg border border-highlight/30">
              <h2 className="text-xl font-semibold mb-4 text-highlight">
                The Truth About Empathy Work
              </h2>
              <p className="mb-4">
                Compassion fatigue is real. Those who give empathy professionally often struggle 
                with burnout, feeling overwhelmed by others' pain, and questioning whether 
                they're making a difference.
              </p>
              <p className="font-medium">
                "But every time I show up, I remind someone they're not forgotten. 
                And sometimes, that's everything."
              </p>
            </div> 

            <div className="bg-accent-warm/10 p-6 rounded-lg border border-accent-warm/30">
              <h2 className="text-xl font-semibold mb-4 text-accent-warm">
                Small Acts, Big Impact
              </h2>
              <p>
                Even when Fion feels depleted, she remembers that her help and empathy 
                communicates worth and hope to the invisible and judged.
              </p>
              <br/>
              <div className="space-y-4 text-left">
                <div className="bg-card/50 p-4 rounded italic">
                  "Thank you, Fion. You're the first person who didn't look at me like I was broken."
                </div>
                <div className="bg-card/50 p-4 rounded italic">
                  "I never thought anyone would understand, but you listened to my story."
                </div>
              </div>
            </div>

          </div>

          <div className="space-y-4">
            <StoryButton
              variant="secondary"
              onClick={() => navigate('/scene/13')}
              className="text-lg px-8 py-4"
            >
              ← Back to Previous
            </StoryButton>
            
            <p className="caption-text text-foreground-muted">
              Those who care for others also need care, understanding, and time for themselves.
            </p>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};