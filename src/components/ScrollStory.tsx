import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { StoryButton } from '@/components/StoryButton';
import { AudioManager } from '@/components/AudioManager';
import clutteredFlat from '@/assets/cluttered-hdb-flat.jpg';
import charactersImage from '@/assets/characters-trio.jpg';

// Import all story sections
import { StorySection } from './StorySection';

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
    backstory: "Madam Leong lives in a one-room HDB flat and accumulated various items over the years. She insists that all items are important to her in their own ways.",
    objective: "Feeling abandoned by her husband and her kids. She only finds joy in her possessions that remind her of them.",
    image: "/lovable-uploads/63b361ca-910e-4e13-9ebb-c7c63ba94393.png"
  },
  {
    name: "Meng",
    role: "The neighbour",
    backstory: "Meng is Madam Leong's neighbor. He walks past her unit every day, noticing her items stacked from floor to ceiling.",
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

export const ScrollStory: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-background/20 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-accent-warm to-highlight"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Audio Controls */}
      <div className="fixed top-4 right-4 z-40">
        <AudioManager />
      </div>

      {/* Title Section */}
      <StorySection
        backgroundImage={clutteredFlat}
        className="min-h-screen flex items-center justify-center"
        parallaxStrength={0.5}
      >
        <div className="text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-2xl">
              Three Lives, One Story
            </h1>
            
            <div className="narrative-text max-w-3xl mx-auto mb-8 leading-relaxed">
              <p className="mb-4 text-xl drop-shadow-lg">
                A story of three people, one house, and the weight we carry 
                that others do not see.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-foreground/70 text-center">
            <div className="text-2xl mb-2">↓</div>
            <p className="text-sm">Scroll to begin</p>
          </div>
        </div>
      </StorySection>

      {/* Characters Section */}
      <StorySection className="min-h-screen py-20" parallaxStrength={0.3}>
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-highlight">Meet the Characters</h2>
            <p className="narrative-text max-w-2xl mx-auto text-lg">
              Everyone carries their own perspective, struggles, and hopes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {characters.map((character, index) => (
              <motion.div
                key={character.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="character-popup text-center p-8 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedCharacter(character)}
              >
                <div className="mb-6">
                  <div 
                    className="w-40 h-40 mx-auto rounded-full bg-cover bg-center mb-4 border-4 border-accent-warm/30 shadow-xl"
                    style={{ backgroundImage: `url(${character.image})` }}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{character.name}</h3>
                <p className="caption-text text-accent-warm text-lg">{character.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </StorySection>

      {/* Introduction Video Section */}
      <StorySection 
        className="min-h-screen py-20"
        backgroundImage="linear-gradient(135deg, hsl(var(--accent-warm) / 0.1), hsl(var(--background)))"
      >
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-accent-warm">Understanding Hoarding</h2>
            <p className="narrative-text max-w-2xl mx-auto text-lg">
              A glimpse into hoarding disorder and the complexity behind it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="aspect-video bg-card rounded-lg overflow-hidden shadow-2xl"
          >
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/1107831367?h=cd230bc2f9"
              title="Understanding Hoarding Disorder"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      </StorySection>

      {/* Story Choice Branches */}
      <StorySection className="min-h-screen py-20" parallaxStrength={0.2}>
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-highlight">The Journey Begins</h2>
            <p className="narrative-text max-w-2xl mx-auto text-lg mb-12">
              Each choice shapes the story. Experience different perspectives and outcomes 
              through empathy-driven decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card p-8 rounded-lg border border-accent-warm/20 hover:bg-card/80 transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent-warm">Path of Understanding</h3>
              <p className="dialogue-text mb-6">
                Explore the story through moments of empathy, connection, and growth.
              </p>
              <div className="text-sm text-foreground-muted">
                → Interactive cleanup process<br/>
                → Character perspective moments<br/>
                → Empathy-building choices
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card p-8 rounded-lg border border-accent-cool/20 hover:bg-card/80 transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent-cool">Consequences of Actions</h3>
              <p className="dialogue-text mb-6">
                See how different approaches lead to vastly different outcomes.
              </p>
              <div className="text-sm text-foreground-muted">
                → Multiple story branches<br/>
                → Emotional consequences<br/>
                → Learning from mistakes
              </div>
            </motion.div>
          </div>
        </div>
      </StorySection>

      {/* Empathy Lessons Section */}
      <StorySection 
        className="min-h-screen py-20"
        backgroundImage="linear-gradient(45deg, hsl(var(--highlight) / 0.1), hsl(var(--accent-cool) / 0.1))"
      >
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-highlight">The Power of Empathy</h2>
            <blockquote className="text-2xl italic mb-8 text-accent-warm max-w-2xl mx-auto leading-relaxed">
              "Empathy is about finding echoes of another person in yourself."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-card p-12 rounded-lg border border-card-border shadow-xl"
          >
            <p className="narrative-text text-lg mb-6">
              Through the perspectives of Madam Leong, Meng, and Fion, we explore how empathy 
              transforms not just individual interactions, but entire communities.
            </p>
            <p className="narrative-text text-lg">
              Hoarding disorder is not a choice, but how we respond to those who struggle 
              with it absolutely is.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-16"
          >
            <p className="narrative-text text-lg mb-8">
              In every interaction, we have the opportunity to choose understanding over judgment, 
              connection over isolation, and hope over despair.
            </p>
            
            <StoryButton
              variant="primary"
              onClick={() => {
                localStorage.removeItem('scene4ThrownAwayItems');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-lg px-8 py-4"
            >
              Begin the Journey Again
            </StoryButton>
          </motion.div>
        </div>
      </StorySection>

      {/* Character Detail Modal */}
      <AnimatePresence>
        {selectedCharacter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={() => setSelectedCharacter(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card p-8 rounded-lg border border-card-border max-w-md w-full character-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold mb-2 text-accent-warm">
                {selectedCharacter.name}
              </h2>
              <p className="text-foreground-muted mb-6">{selectedCharacter.role}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground text-lg">Background</h3>
                  <p className="dialogue-text">{selectedCharacter.backstory}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground text-lg">Perspective</h3>
                  <p className="dialogue-text">{selectedCharacter.objective}</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <StoryButton
                  variant="secondary"
                  onClick={() => setSelectedCharacter(null)}
                  className="px-6 py-2"
                >
                  Close
                </StoryButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};