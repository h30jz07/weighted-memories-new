import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene6aEmpathy: React.FC = () => {
  const navigate = useNavigate();
  const [showThought, setShowThought] = useState(false);

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-background to-background-secondary flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Character conversation */}
          <div className="mb-12">
            <div className="flex items-start gap-6 max-w-2xl mx-auto">
              {/* Character image */}
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/59c1b913-5b5e-4470-9231-4781cfb474a2.png" 
                  alt="Meng" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-accent-cool/30"
                />
              </div>
              
              {/* Scrapbook-style speech bubble */}
              <div className="relative flex-1">
                <div 
                  className="speech-bubble left cursor-pointer hover:bg-gradient-to-br hover:from-amber-50 hover:to-yellow-50 transition-colors"
                  onClick={() => setShowThought(!showThought)}
                >
                  {showThought ? (
                    <p className="text-left leading-relaxed">
                      "If no one helps Madam Leong then how ah? I think I should try to help her, if not i'll feel guilty man I dont' know..."
                    </p>
                  ) : (
                    <p className="text-left text-2xl">
                      ...
                    </p>
                  )}
                </div>
                
                {!showThought && (
                  <p className="nav-label mt-3">Click to hear Meng's thoughts</p>
                )}
              </div>
            </div>
          </div>

          {showThought && (
            <div className="mt-12">
              <StoryButton
                variant="primary"
                onClick={() => navigate('/scene/8')}
                className="text-lg px-8 py-4"
              >
                Next >
              </StoryButton>
            </div>
          )}
        </div>
      </div>
    </SceneTransition>
  );
};