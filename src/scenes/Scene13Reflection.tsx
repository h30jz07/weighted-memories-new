import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import mariamImage from '@/assets/mariam-tired.jpg';

export const Scene13Reflection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${mariamImage})` }}
        >
          <div className="absolute inset-0 bg-background-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="narrative-text max-w-2xl mx-auto mb-12">
              <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-card-border mb-8">
                <p className="mb-4 italic">
                  "Haizz...Another person who needs help. 
                  But I'm so tired eh..."
                </p>
                <p className="mb-4">
                  Fion stares at her computer screen, feeling the weight of all the cases 
                  she's handled.
                </p>
                <p className="mb-4">
                  The emotional strain of constant empathy and support 
                  takes a toll on her.
                </p>
                {/* <p className="text-accent-warm font-medium">
                  Even those who help others need support. Compassion fatigue is real.
                </p> */}
              </div>
            </div>

            {/* Choice buttons */}
            <div className="space-y-6">
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <StoryButton
                  variant="choice"
                  onClick={() => navigate('/scene/14')}
                  className="bg-muted hover:bg-muted/80 text-foreground-muted min-h-[120px] flex flex-col justify-center p-6"
                >
                  <span className="font-semibold">"Aiyo, give me a break. Why so many cases..."</span>
                </StoryButton>

                <div className="text-foreground-muted">or</div>

                <StoryButton
                  variant="choice" 
                  onClick={() => {
                    localStorage.removeItem('scene4ClickCount');
                    navigate('/scene/4');
                  }}
                  className="min-h-[120px] flex flex-col justify-center p-6"
                >
                  <span className="font-semibold">"Its okay! She needs my help."</span>
                </StoryButton>
              </div>

              {/* <p className="caption-text text-foreground-muted mt-8">
                Social workers should also be shown empathy when they need it
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};