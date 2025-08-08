import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene7Consequences: React.FC = () => {
  const navigate = useNavigate();
  const [showNarration, setShowNarration] = useState(false);

  useEffect(() => {
    // Show narration after a brief delay to let the fire video play
    const timer = setTimeout(() => {
      setShowNarration(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SceneTransition>
      <div className="min-h-screen bg-black relative flex items-center justify-center">
        {/* Fire video background (placeholder) */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-orange-900/20">
          <div className="w-full h-full flex items-center justify-center">
            {/* Placeholder for fire video */}
            <div className="text-center text-red-400">
              <div className="text-8xl mb-4 animate-pulse">🔥</div>
              <p className="text-xl">Madam Leong's hoarding was left unattended...</p>
            </div>
          </div>
        </div>

        {/* Narration overlay */}
        {showNarration && (
          <div className="absolute inset-0 bg-background-overlay flex items-center justify-center z-10">
            <div className="max-w-3xl mx-auto text-center p-8">
              
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/ec0a7238-ab6d-4229-91ac-bd4ad2e41378.png" 
                  alt="Text about Madam Leong's hoarding condition and fire prevention" 
                  className="max-w-full h-auto transform scale-150"
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