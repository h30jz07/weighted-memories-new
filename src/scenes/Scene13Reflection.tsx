import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import mariamImage from '@/assets/mariam-tired.jpg';

export const Scene13Reflection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen flex items-center justify-center p-8">

        <div className="max-w-4xl mx-auto text-center">
            
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/ec6f8ee2-9da2-4023-8b24-2d1b8c35bdea.png" 
                  alt="Fion's reflection on her workload" 
                  className="max-w-full h-auto mx-auto transform scale-150"
                />
              </div>

            {/* Choice buttons */}
            <div className="space-y-6 mt-12">
              
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
      </SceneTransition>
  );
};