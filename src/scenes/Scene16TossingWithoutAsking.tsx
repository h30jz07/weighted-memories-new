import React, { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene16TossingWithoutAsking: React.FC = () => {
  const navigate = useNavigate();
  const [showReaction, setShowReaction] = useState(false);
  const [showThought, setShowThought] = useState(false);

  useEffect(() => {
    // Show Madam Leong's reaction after a brief moment
    const timer = setTimeout(() => {
      setShowReaction(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-destructive/30 to-background flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          {!showReaction ? (
            /* Initial action */
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: `url('/lovable-uploads/scene16.png')`,
                backgroundSize: 'cover', // Ensure the image covers the full area
                backgroundPosition: 'bottom center', // Align image to the bottom
                backgroundRepeat: 'no-repeat', // Prevent repetition
              }}
            >
              {/* Background overlay with blur effect */}
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
              
              <div className="relative z-10 text-center">
                <div className="flex justify-center items-center max-h-[80vh]">
                  <img 
                    src="/lovable-uploads/4742a3a1-21e1-45dc-becf-2242549df90c.png" 
                    alt="Meng picks up what looks like an old, worthless newspaper and tosses it into the garbage bag without asking..." 
                    className="max-w-4xl w-full h-auto transform scale-150"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Madam Leong's reaction */
            <div>
              <div className="narrative-text space-y-6 mb-12">
                {/* YouTube video embed */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://player.vimeo.com/video/1108301015?h=372e51ee9b"
                    title="Madam Leong's Emotional Breakdown"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/9acc4e61-b1bb-4ae8-ab18-d3d308fd9b92.png" 
                    alt="Madam Leong's emotional response to Meng throwing away her precious newspaper" 
                    className="max-w-6xl w-full h-auto rounded-lg transform scale-110"
                  />
                </div>

                {/* Character conversation with speech bubble */}
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
                          "TSK, these people ah, never even ask me first one! They think I simply keep rubbish meh? Got reason I keep all these things one, you know! They think I siao ah?"
                        </p>
                      ) : (
                        <p className="text-gray-600 text-left text-xl font-bold">
                          ...
                        </p>
                      )}
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {showThought && (
                  <StoryButton
                    variant="secondary"
                    onClick={() => {
                      const currentCount = parseInt(localStorage.getItem('scene4ClickCount') || '0', 10);
                      localStorage.setItem('scene4ClickCount', (currentCount + 1).toString());
                      navigate('/scene/4');
                    }}
                    className="text-lg px-8 py-4"
                  >
                    ← Continue Cleanup Process
                  </StoryButton>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SceneTransition>
  );
};
