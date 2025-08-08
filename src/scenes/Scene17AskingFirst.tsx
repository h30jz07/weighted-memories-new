import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene17AskingFirst: React.FC = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [showThought, setShowThought] = useState(false);

  useEffect(() => {
    // Show main content after a brief moment
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-accent-warm/20 to-background flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          {!showContent ? (
            /* Initial action */
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: `url('/lovable-uploads/2c8b4aea-e42e-4b75-91e4-82187bba9cdf.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Background overlay with blur effect */}
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
              
              <div className="relative z-10 text-center">
              {/* <h1 className="text-3xl font-bold mb-6 text-accent-warm">
                Asking for Permission
              </h1> */}
              <div className="bg-amber-900/30 backdrop-blur-sm p-8 rounded-lg border border-accent-warm/20 max-w-2xl mx-auto">
                <p className="text-lg">
                  This time, Meng holds up a ragged old singlet.
                  He gently asks Madam Leong 
                  for her permission before making any decisions...
                </p>
              </div>
              </div>
            </div>
          ) : (
            /* Main content */
            <div>
              <div className="mb-12">
                {/* <h1 className="text-3xl font-bold mb-6 text-accent-warm">
                  The Power of Asking
                </h1> */}
              </div>

          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1107147358?h=4b08187e6c"
                title="Social Worker Introduction - Fion"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
          </div>
          
          <div className="narrative-text space-y-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-accent-warm/20">
              {/* <h2 className="text-xl font-semibold mb-4 text-accent-warm">
                A Simple but Profound Moment
              </h2> */}
              <p className="mb-4 italic">
                "Madam Leong, would it be okay 
                if we moved this to the recycling pile?"
              </p>
              <p>
                I look at it, and pause. The singlet reminds me of my husband. With a soft nod, I give in, "Ok lah, 
                I think that one can go." 
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
                      "I'm glad they understand it now. They can see why I keep these things, and let me know before throwing them away"
                    </p>
                  ) : (
                    <p className="text-gray-600 text-left text-xl font-bold">
                      ...
                    </p>
                  )}
                </div>
                
                {!showThought && (
                  <p className="text-sm text-foreground-muted mt-2"></p>
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
                ← Continue the Cleanup Process
              </StoryButton>
            )}
            
            {/* <p className="caption-text text-foreground-muted">
              Consent and communication are foundations of empathy
            </p> */}
          </div>
            </div>
          )}
        </div>
      </div>
    </SceneTransition>
  );
};