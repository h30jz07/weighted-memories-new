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
          <div className="space-y-6">
            {/* <h2 className="text-xl font-semibold mb-8 text-foreground">
              How should Meng respond?
            </h2> */}
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <StoryButton
                variant="choice"
                onClick={() => navigate('/scene/7')}
                className="bg-muted hover:bg-muted/80 text-foreground-muted min-h-[120px] flex flex-col justify-center p-6"
              >
                <span className="font-semibold">"Ew this is disgusting. Why can't she clean up her mess?"</span>
              </StoryButton>

              <div className="text-amber-900 bg-amber-900/20 px-4 py-2 rounded-full">or</div>

              <StoryButton
                variant="choice" 
                onClick={() => navigate('/scene/6a')}
                className="min-h-[120px] flex flex-col justify-center p-6"
              >
                <span className="font-semibold">"I wonder if she needs any help."</span>
              </StoryButton>
            </div>

            {/* <p className="caption-text text-foreground-muted mt-8">
              Your choice will determine the outcome of this story
            </p> */}
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};