import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene6TeenChoice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div 
        className="min-h-screen flex items-center justify-center p-8 relative"
        style={{
          backgroundImage: `url('/lovable-uploads/db52e826-2866-4c75-b681-49f90e85a730.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay with blur effect */}
        <div className="absolute inset-0 bg-background/10 backdrop-blur-sm"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Animation scene description */}
          <div className="mb-12">
            <div className="narrative-text max-w-2xl mx-auto space-y-4 bg-amber-900/30 backdrop-blur-sm p-6 rounded-lg">
              <p>
                Meng walks past Madam Leong's unit on his way home from school. 
              </p>
              <p>
                The smell hits him first.</p>
              <p>
                He notices items spilling out into the corridor.
              </p>
              <p>
                Other neighbors gossip and complain, some even leave passive-aggressive notes.
              </p>
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