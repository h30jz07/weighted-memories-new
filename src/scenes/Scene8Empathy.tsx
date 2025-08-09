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
            
            <div className="narrative-text max-w-2xl mx-auto pb-12">
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/5575a9f2-b1de-4b3e-bc01-09eb61f9873e.png" 
                  alt="Meng stands outside Madam Leong's door" 
                  className="max-w-full h-auto mx-auto transform scale-150 "
                />
              </div>
            </div>

            {/* Choice buttons */}
            <div className="space-y-6 mt-20">
              
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
                  <span className="font-semibold">"Hello Aunty, I see your things piling up outside your house ah, do you need any help to clear your things?"</span>
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
