import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import charactersImage from '@/assets/characters-trio.jpg';
import clutteredFlat from '@/assets/cluttered-hdb-flat.jpg';

interface Character {
  name: string;
  role: string;
  backstory: string;
  objective: string;
  image?: string;
}

const characters: Character[] = [
  {
    name: "Madam Leong",
    role: "The Hoarder",
    backstory: "Madam Leong lives in a one-room HDB flat and accumulated various items over the years. She buys new things while older items get lost in the mess. She insists that all items are important to her in their own ways.",
    objective: "Feeling abandoned by her husband and her kids. She only finds joy in her possessions that remind her of them.",
    image: "/lovable-uploads/63b361ca-910e-4e13-9ebb-c7c63ba94393.png"
  },
  {
    name: "Meng",
    role: "The neighbour",
    backstory: "Meng is Madam Leong's neighbor. He walks past her house every day, noticing her items stacked from floor to ceiling.",
    objective: "Has a growing concern about hygiene and safety issues for Madam Leong and thus wants to see if he can help her out.",
    image: "/lovable-uploads/59c1b913-5b5e-4470-9231-4781cfb474a2.png"
  },
  {
    name: "Fion",
    role: "The Social Worker",
    backstory: "A social worker with 15 years of experience helping vulnerable individuals. She received a concerned call about Madam Leong's living conditions.",
    objective: "Fion has a lot on her plate currently but she knows how important her job can be. Can she rise to the occasion and help Madam Leong declutter her house?",
    image: "/lovable-uploads/0d72c890-ae4d-43b8-9294-d60813ba1f26.png"
  }
];

export const Scene1Characters: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <SceneTransition>
      <div 
        className="min-h-screen relative p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${clutteredFlat})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background-overlay"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Meet the Characters
            </h1>
            <p className="narrative-text max-w-2xl mx-auto">
              Everyone carries their own perspective, struggles, and hopes. 
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {characters.map((character, index) => (
              <div
                key={character.name}
                className="character-popup clickable-object text-center p-6 cursor-pointer"
                onClick={() => setSelectedCharacter(character)}
              >
                <div className="mb-4">
                  <div 
                    className="w-32 h-32 mx-auto rounded-full bg-cover bg-center mb-4"
                    style={{ 
                      backgroundImage: character.image 
                        ? `url(${character.image})` 
                        : `url(${charactersImage})`,
                      backgroundPosition: character.image 
                        ? 'center' 
                        : `${index * 33}% center`
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{character.name}</h3>
                <p className="caption-text text-accent-warm">{character.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <StoryButton 
              variant="primary"
              onClick={() => navigate('/scene/2')}
              className="text-lg px-8 py-4"
            >
              Continue →
            </StoryButton>
          </div>
        </div>
      </div>

      {/* Character Detail Modal */}
      <Dialog open={!!selectedCharacter} onOpenChange={() => setSelectedCharacter(null)}>
        <DialogContent className="character-popup max-w-md">
          {selectedCharacter && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-accent-warm">
                  {selectedCharacter.name}
                </DialogTitle>
                <p className="text-sm text-foreground-muted">{selectedCharacter.role}</p>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Background</h4>
                  <p className="dialogue-text">{selectedCharacter.backstory}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Perspective</h4>
                  <p className="dialogue-text">{selectedCharacter.objective}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SceneTransition>
  );
};