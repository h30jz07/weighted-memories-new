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
                backgroundImage: `url('/lovable-uploads/324f4e2b-8989-42b4-90ac-42c89230b0a2.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Background overlay with blur effect */}
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
              
              <div className="relative z-10 text-center">
              <h1 className="text-3xl font-bold mb-6 text-destructive">
                Acting Without Permission
              </h1>
              <div className="bg-amber-900/30 backdrop-blur-sm p-8 rounded-lg border border-destructive/20 max-w-2xl mx-auto">
                <p className="text-lg">
                  Meng picks up what looks like an old, worthless newspaper and tosses it 
                  into the garbage bag without asking...
                </p>
              </div>
              </div>
            </div>
          ) : (
            /* Madam Leong's reaction */
            <div>
              {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-destructive/30 flex items-center justify-center">
                <span className="text-4xl">😰</span>
              </div> */}
              <h1 className="text-3xl font-bold mb-6 text-destructive">
                "You Don't Understand!"
              </h1>
              
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

                <div className="bg-card p-6 rounded-lg border border-destructive/20">
                  <h2 className="text-xl font-semibold mb-4 text-destructive">
                    Madam Leong's Anguished Response:
                  </h2>
                  <blockquote className="text-lg italic mb-4">
                    "You don't understand! How can you just throw that away! That newspaper was from 
                    the day my grandson was born. I was saving it to show him when he got older!"
                  </blockquote>
                  <p>
                    Hearing her response, Meng realises the magnitude of the mistake. What seemed worthless to him
                    was precious in Madam Leong's eyes.
                  </p>
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
                          "I wish that they would slow down, understand me, and ask me before throwing my things away. All these are my treasures."
                        </p>
                      ) : (
                        <p className="text-gray-600 text-left text-xl font-bold">
                          ...
                        </p>
                      )}
                    </div>
                    
                    {!showThought && (
                      <p className="text-sm text-foreground-muted mt-2">Click to hear Madam Leong&apos;s thoughts</p>
                    )}
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
                
                {/* <p className="caption-text text-foreground-muted">
                  Every item has a story - empathy means listening before acting
                </p> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </SceneTransition>
  );
};