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
              
              {/* Speech bubble */}
              <div className="relative flex-1">
                <div 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-accent-cool/20 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setShowThought(!showThought)}
                >
                  {/* Speech bubble tail */}
                  <div className="absolute left-0 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-white -translate-x-[15px]"></div>
                  
                  {showThought ? (
                    <p className="text-gray-800 text-left leading-relaxed font-medium">
                      "Maybe others will help Madam Leong, but what if no one does? Even if it's inconvenient for me, I think I'll feel better knowing I did what I can do to help."
                    </p>
                  ) : (
                    <p className="text-gray-600 text-left text-xl font-bold">
                      ...
                    </p>
                  )}
                </div>
                
                {!showThought && (
                  <p className="text-sm text-foreground-muted mt-2">Click to hear Meng's thoughts</p>
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
                Continue →
              </StoryButton>
            </div>
          )}
        </div>
      </div>
    </SceneTransition>
  );
};