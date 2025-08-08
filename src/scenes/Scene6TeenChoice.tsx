import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene6TeenChoice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen flex items-center justify-center p-8 relative bg-background">
        {/* Scrapbook paper texture overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 1px, transparent 1px),
                                radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.08) 1px, transparent 1px)`,
               backgroundSize: '20px 20px'
             }}>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Animation scene description */}
          <div className="mb-12">
            <div className="narrative-text max-w-4xl mx-auto space-y-4">
              {/* First text snippet on scrap paper */}
              <div className="relative inline-block transform -rotate-1" style={{ width: '280px', height: '120px' }}>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/lovable-uploads/2a440965-7c50-4633-a8a8-14bb0a8b2a81.png')`,
                    backgroundPosition: '10% 15%',
                    backgroundSize: '600px 400px'
                  }}
                ></div>
                <p className="absolute inset-0 flex items-center justify-center text-amber-900 text-sm font-medium leading-relaxed px-6 text-center">
                  Meng walks past Madam Leong's unit on his way home from school.
                </p>
              </div>
              
              {/* Second text snippet */}
              <div className="relative inline-block transform rotate-1 ml-8" style={{ width: '200px', height: '100px' }}>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/lovable-uploads/2a440965-7c50-4633-a8a8-14bb0a8b2a81.png')`,
                    backgroundPosition: '65% 15%',
                    backgroundSize: '600px 400px'
                  }}
                ></div>
                <p className="absolute inset-0 flex items-center justify-center text-amber-900 text-sm font-medium leading-relaxed px-4 text-center">
                  The smell hits him first.
                </p>
              </div>
              
              {/* Third text snippet */}
              <div className="relative inline-block transform -rotate-1" style={{ width: '250px', height: '110px' }}>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/lovable-uploads/2a440965-7c50-4633-a8a8-14bb0a8b2a81.png')`,
                    backgroundPosition: '10% 60%',
                    backgroundSize: '600px 400px'
                  }}
                ></div>
                <p className="absolute inset-0 flex items-center justify-center text-amber-900 text-sm font-medium leading-relaxed px-6 text-center">
                  He notices items spilling out into the corridor.
                </p>
              </div>
              
              {/* Fourth text snippet */}
              <div className="relative inline-block transform rotate-1 ml-12" style={{ width: '300px', height: '130px' }}>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/lovable-uploads/2a440965-7c50-4633-a8a8-14bb0a8b2a81.png')`,
                    backgroundPosition: '65% 60%',
                    backgroundSize: '600px 400px'
                  }}
                ></div>
                <p className="absolute inset-0 flex items-center justify-center text-amber-900 text-sm font-medium leading-relaxed px-6 text-center">
                  Other neighbors gossip and complain, some even leave passive-aggressive notes.
                </p>
              </div>
              {/* <p className="text-accent-warm font-medium">
                In this moment, Meng has a choice that will shape what happens next...
              </p> */}
            </div>
          </div>

          {/* Choice buttons */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <StoryButton
                variant="choice"
                onClick={() => navigate('/scene/7')}
                className="bg-red-200 hover:bg-red-300 text-red-800 border-2 border-red-300/60 min-h-[120px] flex flex-col justify-center p-6 transform rotate-[1deg] hover:rotate-0"
              >
                <span className="font-normal text-lg">"WAH what is that smell?? Can this aunty clean up her own mess or not sia?"</span>
              </StoryButton>

              <div className="nav-label text-2xl">or</div>

              <StoryButton
                variant="choice" 
                onClick={() => navigate('/scene/6a')}
                className="min-h-[120px] flex flex-col justify-center p-6 bg-green-200 hover:bg-green-300 text-green-800 border-2 border-green-300/60"
              >
                <span className="font-normal text-lg">"Hmm, maybe aunty needs help with cleaning up?"</span>
              </StoryButton>
            </div>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};