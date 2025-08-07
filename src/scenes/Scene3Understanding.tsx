import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene3Understanding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-background to-background-secondary">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
            Understanding Hoarding Disorder
          </h1>
          
          <div className="narrative-text space-y-8">
            <div className="bg-card p-6 rounded-lg border border-card-border">
              <h2 className="text-2xl font-semibold mb-4 text-accent-warm">
                What is Hoarding Disorder?
              </h2>
              <p>
                Hoarding disorder is a persistent difficulty when it comes to discarding or parting with possessions 
                because of a perceived need to save them. A person with hoarding disorder experiences 
                distress at the thought of getting rid of the items.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-accent-cool">
                  Common Signs
                </h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li>• Difficulty throwing or giving away items</li>
                  <li>• Severe anxiety when attempting to discard items</li>
                  <li>• Living spaces become unusable due to clutter</li>
                  <li>• Demonstrate attachment to a lot of items</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-accent-cool">
                  Common Causes
                </h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li>• Traumatic life events or loss</li>
                  <li>• Genetic predisposition</li>
                  <li>• Brain abnormalities</li>
                  <li>• Stressful life events</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-warm/10 p-6 rounded-lg border border-accent-warm/20">
              <blockquote className="text-lg italic text-foreground">
                "My wife is siao one la.The house ah always cluttered with expired cans of preserved food and soy sauce, mixed with multiple slips of 4-D toto. I damn sian of her hoarding sia."
              </blockquote>
              <cite className="block mt-2 text-sm text-foreground-muted">
                — A hoarder's husband
              </cite>
            </div>

          </div>

          <div className="text-center mt-12">
            <StoryButton
              variant="primary"
              onClick={() => navigate('/scene/5')}
              className="text-lg px-8 py-4"
            >
              Continue →
            </StoryButton>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};