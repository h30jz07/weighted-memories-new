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
    }, 3000);

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
              <p className="text-xl">Fire spreads through the building...</p>
            </div>
          </div>
        </div>

        {/* Narration overlay */}
        {showNarration && (
          <div className="absolute inset-0 bg-background-overlay flex items-center justify-center z-10">
            <div className="max-w-3xl mx-auto text-center p-8">
              
              <div className="narrative-text space-y-6 mb-8">
                <p>
                  Madam Leong's hoarding condition worsened in isolation. A spark from the kitchen
                  stove ignited a pile of newspapers, which provided fuel for a kitchen fire.
                </p>
                <p className="text-highlight font-semibold">
                  A small kitchen fire became a tragedy that could have been prevented 
                  with compassion and early intervention.
                </p>
                <p>
                  Hoarding disorder is not a choice. It's a mental health condition 
                  that requires understanding, not judgment.
                </p>
              </div>

              <div className="space-y-4">
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