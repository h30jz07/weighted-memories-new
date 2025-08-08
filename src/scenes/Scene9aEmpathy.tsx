import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene9aEmpathy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-background to-background-secondary flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="memory-frame mb-12">
            <div className="scrapbook-text flex items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/8fed1935-1f88-4df9-9f57-2461ea178af1.png" 
                  alt="Wise companion" 
                  className="w-20 h-20 rounded-full object-cover border-3 border-amber-200/60 shadow-soft"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  Empathy is crucial in this situation because:
                </p>
                <ul className="text-left space-y-3 text-base leading-relaxed">
                  <li>• Hoarding isn't laziness—it's often a coping mechanism for emotional pain or loss.</li>
                  <li>• Many hoarders feel overwhelmed, ashamed, and alone. What they need most is understanding, not blame.</li>
                  <li>• A single kind gesture can be the first step toward change. Without empathy, that step may never happen.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <StoryButton
              variant="primary"
              onClick={() => navigate('/scene/8')}
              className="text-lg px-8 py-4"
            >
              ← Try again
            </StoryButton>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};