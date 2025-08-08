import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import cleanupImage from '@/assets/cleanup-together.jpg';

export const Scene12SocialWork: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cleanupImage})` }}
        >
          <div className="absolute inset-0 bg-background-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="narrative-text space-y-8">

              <div className="bg-accent-warm/20 backdrop-blur-sm p-8 rounded-lg border border-accent-warm/30">
                
                <div className="mb-6">
                  <p className="text-base leading-relaxed">
                    Empathy allows social workers to see the situation from the perspectives of the people they are helping.
                    By practicing empathy, social workers are less likely to come off as judgemental and harsh.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-card/50 p-4 rounded">
                    <h3 className="font-semibold text-accent-cool">❌ Without Empathy:</h3>
                    <p className="text-sm">Hoarders may shut down or resist help, and the clutter often returns because the root issues are not addressed.</p>
                  </div>
                  <div className="bg-card/50 p-4 rounded">
                    <h3 className="font-semibold text-accent-warm">✓ With Empathy:</h3>
                    <p className="text-sm">Hoarders can feel safe and understood. They’re more open to support, empowered to make decisions at their own pace, and lasting change becomes possible.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-12">
              <StoryButton
                variant="primary"
                onClick={() => navigate('/scene/13')}
                className="text-lg px-8 py-4"
              >
                Continue to Fion's Challenge →
              </StoryButton>
            </div>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};