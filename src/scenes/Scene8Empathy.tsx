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
            
            <div className="narrative-text max-w-2xl mx-auto mb-12">
              <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-card-border mb-8">
                <p className="mb-4">
                  Meng stands outside Madam Leong's door and hears movement inside. 
                </p>
                <p className="mb-4">
                  The smell is overwhelming, and part of him wants to walk away. But something 
                  tells him to speak up.
                </p>
              </div>
            </div>

            {/* Choice buttons */}
            <div className="space-y-6">
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <StoryButton
                  variant="choice"
                  onClick={() => navigate('/scene/9')}
                  className="bg-muted hover:bg-muted/80 text-foreground-muted min-h-[120px] flex flex-col justify-center p-6"
                >
                  <span className="font-semibold">"Walao, this is damn smelly. Can you clean this up?!"</span>
                </StoryButton>

                <div className="text-foreground-muted">or</div>

                <StoryButton
                  variant="choice" 
                  onClick={() => navigate('/scene/10')}
                  className="min-h-[120px] flex flex-col justify-center p-6"
                >
                  <span className="font-semibold">"Hello Aunty, I'm your neighbour from that unit over there. Your house looks messy, do you need any help tidying?"</span>
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