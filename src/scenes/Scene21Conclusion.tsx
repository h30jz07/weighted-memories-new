import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene21Conclusion: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SceneTransition>
      <div className="min-h-screen bg-gradient-to-b from-highlight/20 to-background flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12 text-highlight">
            The Power of Empathy
          </h1>
          
          <div className="narrative-text space-y-8 mb-12">
            <div className="bg-card p-8 rounded-lg border border-card-border">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                What We've Learned
              </h2>
              <p className="mb-4">
                Through the perspectives of Madam Leong, Meng, and Fion, we've explored how empathy 
                transforms not just individual interactions, but entire communities.
              </p>
              <p>
                Hoarding disorder is not a choice, but how we respond to those who struggle 
                with it absolutely is.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-accent-warm/20 p-6 rounded-lg border border-accent-warm/30">
                <h3 className="text-xl font-semibold mb-4 text-accent-warm">From Madam Leong's Perspective</h3>
                <p className="text-sm">
                  Every person struggling with hoarding disorder needs understanding, not judgment. 
                  Behind every cluttered space is a human being with a story, often marked by 
                  loss, trauma, or overwhelming emotions.
                </p>
              </div>

              <div className="bg-accent-cool/20 p-6 rounded-lg border border-accent-cool/30">
                <h3 className="text-xl font-semibold mb-4 text-accent-cool">From Meng's Perspective</h3>
                <p className="text-sm">
                  As community members, we have the power to choose empathy over judgment. 
                  Small acts of understanding and offers of support can transform someone's 
                  entire experience of isolation into connection.
                </p>
              </div>

              <div className="bg-highlight/20 p-6 rounded-lg border border-highlight/30">
                <h3 className="text-xl font-semibold mb-4 text-highlight">From Fion's Perspective</h3>
                <p className="text-sm">
                  Professional helpers also need empathy and support. Sustainable change happens 
                  when we recognize that those who give care also need care, and that empathy 
                  is a practice that requires ongoing attention.
                </p>
              </div>
            </div>

            <div className="bg-highlight/10 p-8 rounded-lg border border-highlight/30">
              <h2 className="text-2xl font-semibold mb-6 text-highlight">
                Empathy in Action
              </h2>
              <div className="text-left space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">👂</span>
                  <div>
                    <h3 className="font-semibold">Listen First</h3>
                    <p className="text-sm">Seek to understand before being understood</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <h3 className="font-semibold">Be Patient</h3>
                    <p className="text-sm">Change happens at the person's pace, not ours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h3 className="font-semibold">Respect Autonomy</h3>
                    <p className="text-sm">Support people in making their own choices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💝</span>
                  <div>
                    <h3 className="font-semibold">See the Whole Person</h3>
                    <p className="text-sm">Everyone has dignity and worth beyond their struggles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-card-border">
              <blockquote className="text-xl italic mb-4 text-accent-warm">
                "Empathy is about finding echoes of another person in yourself."
              </blockquote>
              <p>
                In every interaction, we have the opportunity to choose understanding over judgment, 
                connection over isolation, and hope over despair. These choices ripple outward, 
                creating communities where everyone belongs.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <StoryButton
              variant="primary"
              onClick={() => {
                localStorage.removeItem('scene4ThrownAwayItems');
                navigate('/');
              }}
              className="text-lg px-8 py-4"
            >
              Start the Journey Again
            </StoryButton>
            
            <p className="caption-text text-foreground-muted">
              Thank you for exploring the power of empathy with us
            </p>
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};