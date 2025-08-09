import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene18Breakdown: React.FC = () => {
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
      <div className="min-h-screen bg-gradient-to-b from-accent-warm/20 to-background flex items-center justify-center p-8 font-roboto">
        <div className="max-w-4xl mx-auto text-center">
          {!showContent ? (
            /* Initial action */
              <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: `url('/lovable-uploads/5694c49f-95f5-4d10-af27-e6b3e7328d6f.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-6 flex items-center justify-center">
                  {/* <span className="text-4xl animate-bounce">😭</span> */}
                </div>
                {/* <h1 className="text-3xl font-bold mb-6 text-white">
                  Emotional Overwhelm
                </h1> */}
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/91cd8532-aa0c-49a9-980a-0d2f3123c120.png" 
                    alt="Even with the care of everyone, sorting through a lifetime of memories becomes overwhelming for me..." 
                    className="max-w-4xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Main content */
            <div>
              <div className="mb-12">
                {/* <h1 className="text-3xl font-bold mb-6 text-foreground">
                  When Emotions Overwhelm
                </h1> */}
              </div>
          
              <div className="narrative-text space-y-6 mb-12">
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/21f008a7-48f8-47b2-828a-587f581da038.png" 
                    alt="Story showing emotional breakdown about precious books" 
                    className="max-w-4xl w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Character conversation - following exact format from Scene6a */}
              <div className="flex items-start gap-6 max-w-2xl mx-auto mt-32">
                {/* Character image */}
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/59c1b913-5b5e-4470-9231-4781cfb474a2.png" 
                    alt="Meng" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent-cool/30"
                  />
                </div>
                
                {/* Speech bubble */}
                <div className="relative flex-1">
                  <div 
                    className="bg-white rounded-2xl p-6 shadow-lg border border-accent-cool/20 cursor-pointer hover:bg-gray-50 transition-colors font-roboto"
                    onClick={() => setShowThought(!showThought)}
                  >
                    {/* Speech bubble tail */}
                    <div className="absolute left-0 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-white -translate-x-[15px]"></div>
                    
                    {showThought ? (
                      <p className="text-gray-800 text-left leading-relaxed font-medium italic">
                        "This could be a problem leh OMG! She's halting the process man... so freaking annoying, but bopian I just have to be understanding lor.

                        
                        She's clearly in pain and overwhelmed. If I go step in now and try to fix things ah, 
                        I might lose her respect sia. I should slow down and give her space sia, and show her that I care."
                      </p>
                    ) : (
                      <p className="text-gray-600 text-left text-xl font-bold">
                        ...
                      </p>
                    )}
                  </div>
                  
                  {!showThought && (
                    <p className="text-sm text-foreground-muted mt-2">Click to hear Meng's thoughts</p>
                  )}
                </div>
              </div>

              <div className="space-y-4 mt-16">
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
                  Empathy includes holding space for difficult emotions
                </p> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </SceneTransition>
  );
};