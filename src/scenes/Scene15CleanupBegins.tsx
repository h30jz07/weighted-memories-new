import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import cleanupImage from '@/assets/cleanup-together.jpg';

export const Scene15CleanupBegins: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cleanupImage})` }}
        >
          <div className="absolute inset-0 bg-background-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-8 text-highlight">
              Working Together
            </h1>
            
            <div className="narrative-text max-w-2xl mx-auto mb-12">
              <div className="bg-card/90 backdrop-blur-sm p-8 rounded-lg border border-card-border">
                <p className="mb-4">
                  Meng, Madam Leong, and Fion stand together in the cluttered flat. The atmosphere 
                  is tense but hopeful. Everyone understands this is a delicate process.
                </p>
                <p className="mb-4">
                  Fion has explained the approach: "We move slowly, we ask permission, 
                  and we focus on safety first."
                </p>
                <p className="text-accent-warm font-medium">
                  But even with the best intentions, challenging moments lie ahead...
                </p>
              </div>
            </div>

            {/* Interactive choices */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-8 text-foreground">
                As the cleanup begins, what happens?
              </h2>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <StoryButton
                  variant="choice"
                  onClick={() => navigate('/scene/16')}
                  className="min-h-[100px] flex flex-col justify-center p-4 bg-destructive/20 hover:bg-destructive/30 text-destructive-foreground"
                >
                  <span className="text-2xl mb-2">🗑️</span>
                  <span className="font-semibold text-sm">Teen Tosses Without Asking</span>
                </StoryButton>

                <StoryButton
                  variant="choice"
                  onClick={() => navigate('/scene/17')}
                  className="min-h-[100px] flex flex-col justify-center p-4"
                >
                  <span className="text-2xl mb-2">🤝</span>
                  <span className="font-semibold text-sm">Teen Asks Before Discarding</span>
                </StoryButton>

                <StoryButton
                  variant="choice"
                  onClick={() => navigate('/scene/18')}
                  className="min-h-[100px] flex flex-col justify-center p-4 bg-muted hover:bg-muted/80 text-foreground-muted"
                >
                  <span className="text-2xl mb-2">😭</span>
                  <span className="font-semibold text-sm">Hoarder Breaks Down</span>
                </StoryButton>

                <StoryButton
                  variant="choice"
                  onClick={() => navigate('/scene/19')}
                  className="min-h-[100px] flex flex-col justify-center p-4 bg-destructive/30 hover:bg-destructive/40 text-destructive-foreground"
                >
                  <span className="text-2xl mb-2">🚛</span>
                  <span className="font-semibold text-sm">Throw Everything Away</span>
                </StoryButton>

                <StoryButton
                  variant="choice"
                  onClick={() => navigate('/scene/20')}
                  className="min-h-[100px] flex flex-col justify-center p-4 bg-accent-warm/20 hover:bg-accent-warm/30 text-accent-warm-foreground md:col-span-2 lg:col-span-1"
                >
                  <span className="text-2xl mb-2">✨</span>
                  <span className="font-semibold text-sm">Finish Clean-up Successfully</span>
                </StoryButton>
              </div>

              <p className="caption-text text-foreground-muted mt-8">
                Each choice will demonstrate different aspects of empathy (or lack of empathy) in action
              </p>
            </div>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};