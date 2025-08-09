import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SceneTransition } from '@/components/SceneTransition';
import { StoryButton } from '@/components/StoryButton';

export const Scene2Video: React.FC = () => {
  const navigate = useNavigate();
  const [showProceed, setShowProceed] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = "/video/hoarding-basics.mp4"; // Example URL for video
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setShowProceed(true); // This will trigger the button to appear when the video ends
      setIsPlaying(false); // Set playing state to false when video ends
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
        <div className="w-full max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <p className="narrative-text max-w-2xl mx-auto">
              A glimpse into hoarding.
            </p>
          </div>
          
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-8">
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/1107831367?h=cd230bc2f9"
              title="Understanding Hoarding Disorder"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Proceed button */}
          {showProceed && (
            <div className="text-center">
              <StoryButton
                variant="primary"
                onClick={() => navigate('/scene/6')}
                className="text-lg px-8 py-4"
              >
                Go {'>'}
              </StoryButton>
            </div>
          )}
        </div>
      </div>
    </SceneTransition>
  );
};
