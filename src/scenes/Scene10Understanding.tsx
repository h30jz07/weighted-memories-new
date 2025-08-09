import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene10Understanding: React.FC = () => {
  const navigate = useNavigate();
  const [showThought, setShowThought] = useState(false);

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/lovable-uploads/corridor2.png')` }}
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-white/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Scene visualization */}
            <div className="mb-12">
              {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-accent-warm/20 flex items-center justify-center">
                <span className="text-4xl">🤝</span>
              </div> */}
              {/* <h1 className="text-3xl font-bold mb-6 text-accent-warm">
                When Empathy Opens Doors
              </h1> */}
            </div>
            
            <div className="max-w-4xl mx-auto mb-12">
              <img 
                src="/lovable-uploads/a38316f4-ab44-4d5e-8843-91d29e930965.png" 
                alt="Dialogue between Meng and Madam Leong about helping with the hoarding situation"
                className="w-full h-auto"
              />
            </div>

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
                      "Don't know why this ah boy trying to help me, but okay la maybe someone finally understand me la hor."
                    </p>
                  ) : (
                    <p className="text-gray-600 text-left text-xl font-bold">
                      ...
                    </p>
                  )}
                </div>
                
                {!showThought && (
                  <p className="text-sm text-foreground-muted mt-2">Hear Madam Leong's thoughts</p>
                )}
              </div>
            </div>

            {showThought && (
              <div className="space-y-4 mt-16">
                <StoryButton
                  variant="primary"
                  onClick={() => navigate('/scene/11')}
                  className="text-lg px-8 py-4"
                >
                  Continue →
                </StoryButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};
