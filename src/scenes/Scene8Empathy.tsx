import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import mengImage from '@/assets/elias-at-door.jpg';

export const Scene8Empathy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${mengImage})` }}
        >
          <div className="absolute inset-0 bg-background-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-8 text-highlight">
              A Moment of Choice
            </h1>
            
            <div className="narrative-text max-w-2xl mx-auto mb-12">
              <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-card-border mb-8">
                <p className="mb-4">
                  Meng stands outside Madam Leong's door and hears movement inside. 
                  Maybe he could talk to her to see what's going on.
                </p>
                <p className="mb-4">
                  The smell is overwhelming, and part of him wants to walk away. But something 
                  deeper tells him this is a moment that matters.
                </p>
                <p className="text-accent-warm font-medium">
                  How he approaches this conversation will shape everything that follows.
                </p>
              </div>
            </div>

            {/* Choice buttons */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-8 text-foreground">
                What does Meng do?
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <StoryButton
                  variant="choice"
                  onClick={() => navigate('/scene/9')}
                  className="bg-muted hover:bg-muted/80 text-foreground-muted min-h-[120px] flex flex-col justify-center p-6"
                >
                  <span className="text-2xl mb-2">😤</span>
                  <span className="font-semibold">Complain About the Smell so that Madam Leong will do something</span>
                  <span className="text-sm mt-2 opacity-75 italic">
                    "This smells terrible. Can you clean this up?!"
                  </span>
                </StoryButton>

                <div className="text-foreground-muted">or</div>

                <StoryButton
                  variant="choice" 
                  onClick={() => navigate('/scene/10')}
                  className="min-h-[120px] flex flex-col justify-center p-6"
                >
                  <span className="text-2xl mb-2">🤝</span>
                  <span className="font-semibold">Ask How to Help</span>
                  <span className="text-sm mt-2 opacity-90 italic">
                    "Hello Aunty, I'm your neighbour from that unit over there. Recently I noticed the clutter around your flat. Do you maybe need help with tidying up your place?"
                  </span>
                </StoryButton>
              </div>

              {/* <p className="caption-text text-foreground-muted mt-8">
                Empathy begins with how we choose to engage
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};