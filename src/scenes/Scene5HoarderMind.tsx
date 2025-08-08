import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import madamLeongImage from '@/assets/zara-contemplative.jpg';
import compassionatePuppy from '@/assets/compassionate-puppy.jpg';

export const Scene5HoarderMind: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${madamLeongImage})` }}
        >
          <div className="absolute inset-0 bg-background-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8 text-highlight">
              The Hoarder's POV:
            </h1>
            
            <div className="narrative-text space-y-8">

              <div className="mt-12 mb-8">
                <div className="memory-frame">
                  <div className="aspect-video bg-slate-800 rounded-md overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://player.vimeo.com/video/1107114495?h=6686109fe7"
                      title="Understanding Hoarding Disorder"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>


              <div className="scrapbook-text transform rotate-[-0.8deg] max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-highlight">
                  Common Misconceptions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-red-600">❌ Myth</h3>
                    <p className="text-base">"They're just lazy or dirty"</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-emerald-600">✓ Reality</h3>
                    <p className="text-base">It's a complex mental health condition</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-red-600">❌ Myth</h3>
                    <p className="text-base">"They can stop anytime they want"</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-emerald-600">✓ Reality</h3>
                    <p className="text-base">Discarding causes genuine distress and anxiety</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-12">
            <StoryButton
              variant="primary"
              onClick={() => navigate('/scene/6')}
              className="text-lg px-8 py-4"
            >
              Continue to Understanding →
            </StoryButton>
            </div>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};