import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import cleanedImage from '@/assets/cleaned-flat.jpg';

export const Scene20Success: React.FC = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [showMadamLeongThought, setShowMadamLeongThought] = useState(false);
  const [showMengThought, setShowMengThought] = useState(false);
  const [showFionThought, setShowFionThought] = useState(false);

  useEffect(() => {
    // Show main content after a brief moment
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cleanedImage})` }}
        >
          <div className="absolute inset-0 bg-background-overlay/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            {!showContent ? (
              /* Initial action */
              <div>
                <div className="mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl animate-bounce">✨</span>
                </div>
                {/* <h1 className="text-3xl font-bold mb-6 text-accent-warm">
                  Successful Collaboration
                </h1> */}
                <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-accent-warm/20 max-w-2xl mx-auto">
                  <p className="text-lg">
                    At last, we have successfully 
                    transformed Madam Leong's living space.
                  </p>
                </div>
              </div>
            ) : (
              /* Main content */
              <div>
                {/* <h1 className="text-4xl font-bold mb-8 text-highlight">
                  Progress Through Empathy
                </h1> */}

            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1107150441?h=4a216f79c5"
                title="Social Worker Introduction - Fion"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="narrative-text space-y-8">
              <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-card-border">
                {/* <h2 className="text-2xl font-semibold mb-6 text-accent-warm">
                  A Transformation Built on Respect
                </h2> */}
                <p className="mb-4">
                  After several hours of patient, collaborative work, Madam Leong's flat seems transformed. 
                  It's not magazine-perfect, but it's safe, navigable, and most importantly, still feels like home.
                </p>
                <p>
                  The pathways are clear, the kitchen is functional, and Madam Leong has kept the 
                  items that truly matter to her while letting go of things that no longer serve her.
                </p>
              </div>

              {/* Character Conversations */}
              <div className="space-y-8 max-w-2xl mx-auto">
                {/* Madam Leong's Reflection */}
                <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-accent-warm/20">
                  <div className="flex items-start gap-6">
                    {/* Character image */}
                    <div className="flex-shrink-0">
                      <img 
                        src="/lovable-uploads/63b361ca-910e-4e13-9ebb-c7c63ba94393.png" 
                        alt="Madam Leong"
                        className="w-20 h-20 rounded-full object-cover border-4 border-accent-warm/30"
                      />
                    </div>
                    
                    {/* Speech bubble */}
                    <div className="relative flex-1">
                      <div 
                        className="bg-white rounded-2xl p-6 shadow-lg border border-accent-warm/20 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => setShowMadamLeongThought(!showMadamLeongThought)}
                      >
                        {/* Speech bubble tail */}
                        <div className="absolute left-0 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-white -translate-x-[15px]"></div>
                        
                        {showMadamLeongThought ? (
                          <p className="text-gray-800 text-left leading-relaxed italic">
                            "I never thought anyone would understand. But they listened to my stories 
                            and helped me see which memories I could carry in my heart instead of in boxes."
                          </p>
                        ) : (
                          <p className="text-gray-600 text-left text-xl font-bold">
                            ...
                          </p>
                        )}
                      </div>
                      
                      {!showMadamLeongThought && (
                        <p className="text-sm text-foreground-muted mt-2">Click to hear Madam Leong's thoughts</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Meng's Learning */}
                <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-accent-cool/20">
                  <div className="flex items-start gap-6">
                    {/* Character image */}
                    <div className="flex-shrink-0">
                      <img 
                        src="/lovable-uploads/59c1b913-5b5e-4470-9231-4781cfb474a2.png" 
                        alt="Meng"
                        className="w-20 h-20 rounded-full object-cover border-4 border-accent-cool/30"
                      />
                    </div>
                    
                    {/* Speech bubble */}
                    <div className="relative flex-1">
                      <div 
                        className="bg-white rounded-2xl p-6 shadow-lg border border-accent-cool/20 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => setShowMengThought(!showMengThought)}
                      >
                        {/* Speech bubble tail */}
                        <div className="absolute left-0 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-white -translate-x-[15px]"></div>
                        
                        {showMengThought ? (
                          <p className="text-gray-800 text-left leading-relaxed italic">
                            "I realised helping someone isn't about "fixing" them. It's about listening, 
                            understanding, and supporting them to make their own choices."
                          </p>
                        ) : (
                          <p className="text-gray-600 text-left text-xl font-bold">
                            ...
                          </p>
                        )}
                      </div>
                      
                      {!showMengThought && (
                        <p className="text-sm text-foreground-muted mt-2">Click to hear Meng's thoughts</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Fion's Insight */}
                <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-highlight/20">
                  <div className="flex items-start gap-6">
                    {/* Character image */}
                    <div className="flex-shrink-0">
                      <img 
                        src="/lovable-uploads/0d72c890-ae4d-43b8-9294-d60813ba1f26.png" 
                        alt="Fion"
                        className="w-20 h-20 rounded-full object-cover border-4 border-highlight/30"
                      />
                    </div>
                    
                    {/* Speech bubble */}
                    <div className="relative flex-1">
                      <div 
                        className="bg-white rounded-2xl p-6 shadow-lg border border-highlight/20 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => setShowFionThought(!showFionThought)}
                      >
                        {/* Speech bubble tail */}
                        <div className="absolute left-0 top-6 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-white -translate-x-[15px]"></div>
                        
                        {showFionThought ? (
                          <p className="text-gray-800 text-left leading-relaxed italic">
                            "This is why I do this work. 
                            Every person deserves to be seen, heard, and supported."
                          </p>
                        ) : (
                          <p className="text-gray-600 text-left text-xl font-bold">
                            ...
                          </p>
                        )}
                      </div>
                      
                      {!showFionThought && (
                        <p className="text-sm text-foreground-muted mt-2">Click to hear Fion's thoughts</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-accent-warm/50 shadow-lg"> */}
                {/* <h2 className="text-2xl font-semibold mb-6 text-accent-warm">
                  What Made the Difference
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-semibold mb-2">Patience</h3>
                    <p className="text-sm mb-4">Working at Madam Leong's pace, not rushing the process</p>
                    
                    <h3 className="font-semibold mb-2">Respect</h3>
                    <p className="text-sm">Asking permission and honoring her choices</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Understanding</h3>
                    <p className="text-sm mb-4">Recognizing the emotional value of possessions</p>
                    
                    <h3 className="font-semibold mb-2">Collaboration</h3>
                    <p className="text-sm">Working with, not doing to</p>
                  </div>
                </div> */}
              {/* </div> */}

              {/* <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-highlight/50 shadow-lg"> */}
                {/* <h2 className="text-xl font-semibold mb-4 text-highlight">
                  The Ripple Effect
                </h2>
                <p>
                  Despite the challenges faced along the way, progress was made because everyone 
                  learned something about empathy, patience, and the complexity of human experience. 
                  The connections formed will last far beyond this single day.
                </p> */}
              {/* </div> */}
            </div>

            <div className="mt-12">
              <StoryButton
                variant="primary"
                onClick={() => navigate('/scene/21')}
                className="text-lg px-8 py-4"
              >
                Continue to Conclusion →
              </StoryButton>
            </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};