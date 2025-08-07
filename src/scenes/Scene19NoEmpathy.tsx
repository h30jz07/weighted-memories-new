import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene19NoEmpathy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-destructive/40 to-background flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-destructive/30 flex items-center justify-center">
              <span className="text-4xl">🚛</span>
            </div>
            <h1 className="text-3xl font-bold mb-6 text-destructive">
              The Complete Absence of Empathy
            </h1>
          </div>
          
          <div className="narrative-text space-y-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-destructive/20">
              <h2 className="text-xl font-semibold mb-4 text-destructive">
                When Understanding Disappears
              </h2>
              <p className="mb-4">
                Frustrated with the slow process, Meng and Fion decide to "just get it done." 
                They work quickly, filling bag after bag with Madam Leong's belongings while she 
                protests helplessly.
              </p>
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/4c235295-4bbe-45e7-876a-9520d95170b2.png" 
                  alt="Madam Leong in distress as social workers dispose of her belongings without empathy"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
              </div>
              <blockquote className="text-lg italic text-destructive-foreground">
                "We're doing this for your own good. You'll thank us later."
              </blockquote>
            </div>

            <div className="bg-destructive/20 p-6 rounded-lg border border-destructive/40">
              <h2 className="text-xl font-semibold mb-4 text-destructive">
                Madam Leong's Experience
              </h2>
              <p className="mb-4">
                Madam Leong sits in the corner, crying as strangers discard her life. She watches 
                her late husband's books disappear into garbage bags. Photo albums from
                her children's childhood are tossed aside without a glance.
              </p>
              <p className="font-medium">
                "They said they were helping, but they made me feel like nothing I cared about mattered."
              </p>
            </div>

            <div className="bg-destructive/30 p-6 rounded-lg border border-destructive/50">
              <h2 className="text-xl font-semibold mb-4 text-destructive">
                The Devastating Consequences
              </h2>
              <div className="space-y-3 text-left">
                <div className="bg-card/50 p-3 rounded">
                  <h3 className="font-semibold text-destructive">Emotional Trauma:</h3>
                  <p className="text-sm">Feeling violated, unheard, and stripped of dignity</p>
                </div>
                <div className="bg-card/50 p-3 rounded">
                  <h3 className="font-semibold text-destructive">Broken Trust:</h3>
                  <p className="text-sm">Madam Leong will never trust helpers again</p>
                </div>
                <div className="bg-card/50 p-3 rounded">
                  <h3 className="font-semibold text-destructive">Likely Relapse:</h3>
                  <p className="text-sm">Without addressing underlying issues, hoarding often returns worse</p>
                </div>
                <div className="bg-card/50 p-3 rounded">
                  <h3 className="font-semibold text-destructive">Social Isolation:</h3>
                  <p className="text-sm">Shame deepens, making future intervention even harder</p>
                </div>
              </div>
            </div>

            <div className="bg-highlight/10 p-6 rounded-lg border border-highlight/30">
              <h2 className="text-xl font-semibold mb-4 text-highlight">
                Why This Approach Fails
              </h2>
              <p className="mb-4">
                While the flat might be physically cleared, the person's emotional well-being 
                is destroyed. Without empathy, "help" becomes harm.
              </p>
              <p className="font-medium">
                Real change only happens when people feel respected, heard, and empowered 
                to participate in their own healing.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <StoryButton
              variant="secondary"
              onClick={() => {
                const currentCount = parseInt(localStorage.getItem('scene4ClickCount') || '0', 10);
                localStorage.setItem('scene4ClickCount', (currentCount + 1).toString());
                navigate('/scene/4');
              }}
              className="text-lg px-8 py-4"
            >
              ← Continue Cleanup Process
            </StoryButton>
            
            <p className="caption-text text-foreground-muted">
              Help without empathy can cause more harm than doing nothing at all
            </p>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};