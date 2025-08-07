import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import { AudioManager } from '@/components/AudioManager';
import clutteredFlat from '@/assets/cluttered-hdb-flat.jpg';

export const Scene0Homepage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
        <div 
          className="min-h-screen relative flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${clutteredFlat})` }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-background-overlay"></div>
          
          {/* Audio controls positioned in top right with higher z-index */}
          <div className="absolute top-4 right-4 z-50">
            <AudioManager />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-6">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Three Lives, One Story
              </h1>
              
              <div className="narrative-text max-w-3xl mx-auto mb-8 leading-relaxed">
                <p className="mb-4">
                  A story of three people, one house, and the weight we carry 
                  that others do not see.
                </p>
                <p className="mb-4">
                  Hoarding is not a choice - it's a struggle.
                </p>
                <p className="text-accent-warm">
                  Let's step inside.
                </p>
              </div>
            </div>

            <StoryButton 
              variant="primary"
              onClick={() => {
                localStorage.removeItem('scene4ThrownAwayItems');
                navigate('/scene/1');
              }}
              className="text-lg px-8 py-4"
            >
              Begin the Story
            </StoryButton>
          </div>

          {/* Ambient sound indicators */}
          <div className="absolute bottom-4 left-4 caption-text">
            <p>🎵 Muffled traffic, wind, and birds chirping</p>
          </div>
        </div>
      </SceneTransition>
  );
};