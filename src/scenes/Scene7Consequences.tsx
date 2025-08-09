import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene7Consequences: React.FC = () => {
  const navigate = useNavigate();
  const [showNarration, setShowNarration] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Show narration after a brief delay to let the fire video play
    const timer = setTimeout(() => {
      setShowNarration(true); // Show narration
      setBackgroundImage('/lovable-uploads/burn.png'); // Change background image after the narration shows
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SceneTransition>
      <div 
        className="min-h-screen relative flex items-center justify-center" 
        style={{ 
          backgroundColor: '#1a1410', 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center center' 
        }}
      >
        {/* Fire video background (placeholder) */}
        {!showNarration && (
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-orange-900/20">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-red-400">
                <div className="text-8xl mb-4 animate-pulse">🔥</div>
                <p className="text-xl">Madam Leong's hoarding was left unattended...</p>
              </div>
            </div>
          </div>
        )}

        {/* Narration overlay */}
        {showNarration && (
          <div 
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} // Make the overlay translucent with 60% opacity
          >
            <div className="max-w-3xl mx-auto text-center p-8">
              
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/d8eca8ab-39fe-4c59-ab8d-6fb0825c98d0.png"
                  alt="Madam Leong's hoarding condition worsened and fire prevention information"
                  className="max-w-full h-auto transform scale-150 mb-20"
                  style={{ objectFit: 'contain' }} // Ensures the image is fully visible without cropping
                />
              </div>

              <div className="space-y-4 mt-12">
                <StoryButton
                  variant="secondary"
                  onClick={() => navigate('/scene/6')}
                  className="text-lg px-8 py-4"
                >
                  ← Try Again
                </StoryButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </SceneTransition>
  );
};
