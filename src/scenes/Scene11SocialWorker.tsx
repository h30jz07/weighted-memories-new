import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene11SocialWorker: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <p className="narrative-text">
              Meet Fion the Social Worker
            </p>
          </div>
          
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8">
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/1107144627?h=85746fb1ec"
              title="Social Worker Introduction - Fion"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="text-center">
            <StoryButton
              variant="primary"
              onClick={() => navigate('/scene/13')}
              className="text-lg px-8 py-4"
            >
              Next &gt;
            </StoryButton>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};
