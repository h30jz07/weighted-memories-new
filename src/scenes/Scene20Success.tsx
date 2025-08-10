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
          style={{ backgroundImage: `url('/lovable-uploads/5356f4ba-19be-4415-bf5d-5e38001bb29f.png')` }}
        >
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            {!showContent ? (
              /* Initial action */
              <div>
                <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-accent-warm/20 max-w-2xl mx-auto">
                  <p className="text-lg">
                    At last, my flat is transformed!
                  </p>
                </div>
              </div>
            ) : (
              /* Main content */
              <div>
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
                  <div className="flex justify-center mb-8 mx-4">
                    <img 
                      src="/lovable-uploads/scene20.png" 
                      alt="Scrap paper with text about flat transformation" 
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Character Conversations */}
                  <div className="space-y-8 max-w-2xl mx-auto">
                    {/* Madam Leong's Reflection */}
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
                              "I thought no one understand me. Who cares about an old aunty like me?
                              But everyone here listened to me. They never shame me, but respected me."
                            </p>
                          ) : (
                            <p className="text-gray-600 text-left text-xl font-bold">
                              ...
                            </p>
                          )}
                        </div>
                      
                      </div>
                    </div>

                    {/* Meng's Learning */}
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
                              "I learnt that helping someone isn't about "fixing" them. It's about listening, 
                              understanding, and supporting them to make their own choices."
                            </p>
                          ) : (
                            <p className="text-gray-600 text-left text-xl font-bold">
                              ...
                            </p>
                          )}
                        </div>
                        
                      </div>
                    </div>

                    {/* Fion's Insight */}
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
                      
                      </div>
                    </div>
                  </div>
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

        {/* White background added after transition */}
        {showContent && <div className="absolute inset-0 bg-white/70" />}
      </div>
    </SceneTransition>
  );
};
