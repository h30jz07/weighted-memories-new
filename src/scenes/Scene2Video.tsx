import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';
import { Play, Pause } from 'lucide-react';

export const Scene2Video: React.FC = () => {
  const navigate = useNavigate();
  const [showProceed, setShowProceed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // This would be replaced with actual video URL
  const videoUrl = "/video/hoarding-basics.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setShowProceed(true);
      setIsPlaying(false);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  return (
    <SceneTransition>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto p-8">
          <header className="text-center mb-8">
            <p className="narrative-text max-w-2xl mx-auto">
              Before we continue with our story, the video below offers a glimpse into what hoarding disorder is like.
            </p>
          </header>

          <div className="relative bg-card rounded-lg overflow-hidden mb-8 shadow-lg">
            {/* YouTube video embed */}
            <div className="aspect-video bg-muted relative">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/1107831367?h=cd230bc2f9"
                title="Understanding Hoarding Disorder"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setShowProceed(true)}
              />
            </div>

            {/* Proceed button overlay */}
            {showProceed && (
              <div className="absolute bottom-4 right-4">
                <StoryButton
                  variant="primary"
                  onClick={() => navigate('/scene/6')}
                >
                  Proceed →
                </StoryButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </SceneTransition>
  );
};