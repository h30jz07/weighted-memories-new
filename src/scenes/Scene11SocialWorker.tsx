import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene11SocialWorker: React.FC = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  return (
    <SceneTransition>
      <div className="min-h-screen bg-background flex items-center justify-center">
        {!showContent ? (
          /* Video section */
          <div className="w-full max-w-4xl mx-auto p-8">
            <div className="text-center mb-8">
              <p className="narrative-text">
                Meet Fion the Social Worker
              </p>
            </div>
            
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1107144627?h=85746fb1ec"
                title="Social Worker Introduction - Fion"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="text-center">
              <StoryButton
                variant="primary"
                onClick={() => setShowContent(true)}
                className="text-lg px-8 py-4"
              >
                Continue to Learn More →
              </StoryButton>
            </div>
          </div>
        ) : (
          /* Post-video content */
          <div className="max-w-4xl mx-auto text-center p-8">
            
            <div className="narrative-text space-y-6 mb-12">
              
              <div className="bg-card p-6 rounded-lg border border-card-border">
                <p className="italic">
                  "As a social worker, I know that I need to have more patience and empathy to help those that struggle with hoarding. 
                  Change will only happen when they feel supported, not judged."
                </p>
              </div>

              <div className="bg-accent-cool/10 p-6 rounded-lg border border-accent-cool/30">
                <h3 className="text-lg font-semibold mb-3 text-accent-cool">
                  Key Principles Fion Follows:
                </h3>
                <ul className="text-left space-y-2">
                  <li>• <strong className="text-accent-cool">Listen first</strong> - Understand the individual's history and emotional attachments to their possessions</li>
                  <li>• <strong className="text-accent-cool">Respect autonomy</strong> - Seek consent before moving or discarding items, the individual maintains control over decisions</li>
                  <li>• <strong className="text-accent-cool">Focus on safety</strong> - Address health and safety concerns gently, balancing basic safety with respect</li>
                  <li>• <strong className="text-accent-cool">Build trust</strong> - Create a supportive, nonjudgmental space where empathy drives every interaction</li>
                </ul>
              </div>
              
            </div>

            <StoryButton
              variant="primary"
              onClick={() => navigate('/scene/12')}
              className="text-lg px-8 py-4"
            >
              Next >
            </StoryButton>
          </div>
        )}
      </div>
    </SceneTransition>
  );
};