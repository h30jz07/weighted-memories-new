import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene10Understanding: React.FC = () => {
  const navigate = useNavigate();
  const [showThought, setShowThought] = useState(false);

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-accent-warm/20 to-background flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Scene visualization */}
          <div className="mb-12">
            {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent-warm/20 flex items-center justify-center">
              <span className="text-4xl">🤝</span>
            </div> */}
            {/* <h1 className="text-3xl font-bold mb-6 text-accent-warm">
              When Empathy Opens Doors
            </h1> */}
          </div>
          
          <div className="narrative-text max-w-3xl mx-auto space-y-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-accent-warm/20">
              <div className="mb-4">
                <span className="font-semibold text-accent-warm">Meng:</span>
                <p className="mt-2 italic">
                  "Hello Aunty, is everything okay? I saw so much stuff outside your house, is there anything I can do to help?"
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-card-border">
              <div className="mb-4">
                <span className="font-semibold text-foreground">Madam Leong:</span>
                <p className="mt-2 italic">
                  "Sorry ah boy, Aunty knows it is messy, but I cannot throw them away
                  ...they are all I have left of my husband.
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-card-border">
              <div className="mb-4">
                <span className="font-semibold text-accent-warm">Meng:</span>
                <p className="mt-2 italic">
                  "OMG, i'm sorry aunty. But leaving so many things here can be dangerous. Do you want go through the items together? You can keep what's important."
                </p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-card-border">
              <div className="mb-4">
                <span className="font-semibold text-foreground">Madam Leong (nodding reluctantly):</span>
                <p className="mt-2 italic">
                  "err... I think can."
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 max-w-2xl mx-auto">
              {/* Character image */}
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/63b361ca-910e-4e13-9ebb-c7c63ba94393.png" 
                  alt="Madam Leong" 
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
                      "This ah boy seems nice. Maybe he can understand me."
                    </p>
                  ) : (
                    <p className="text-gray-600 text-left text-xl font-bold">
                      ...
                    </p>
                  )}
                </div>
                
                {!showThought && (
                  <p className="text-sm text-foreground-muted mt-2">Hear Madam Leong's thoughts</p>
                )}
              </div>
            </div>
          </div>

          {showThought && (
            <div className="space-y-4">
              <StoryButton
                variant="primary"
                onClick={() => navigate('/scene/11')}
                className="text-lg px-8 py-4"
              >
                Continue →
              </StoryButton>
              
              {/* <p className="caption-text text-foreground-muted">
                Understanding paves the way for meaningful change
              </p> */}
            </div>
          )}
        </div>
      </div>
    </SceneTransition>
  );
};