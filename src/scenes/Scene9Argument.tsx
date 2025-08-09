import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene9Argument: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image from Scene8 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/lovable-uploads/corridor3.png')` }}
        >
          {/* White background overlay, appears after transition */}
          <div className="absolute inset-0 bg-white/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center relative"> {/* Added relative positioning for positioning the button */}
            {/* Scene visualization */}
            <div className="max-w-3xl mx-auto space-y-8 mb-12">
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/63794ea1-7dec-4da4-8a85-6b6ea9b2f3f8.png" 
                  alt="Dialogue between Meng and Madam Leong with empathy explanation" 
                  className="max-w-full h-auto transform scale-150"
                />
              </div>
            </div>

            {/* Button Section */}
            <div className="absolute left-1/2 transform -translate-x-1/2 pt-32"> {/* Absolute positioning for the button */}
              <StoryButton
                variant="primary"
                onClick={() => navigate('/scene/8')}
                className="text-lg px-8 py-4"
              >
                ← Retry
              </StoryButton>
            </div>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};
