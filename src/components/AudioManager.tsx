import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioManagerProps {
  src?: string;
  loop?: boolean;
  autoPlay?: boolean;
  volume?: number;
}

export const AudioManager: React.FC<AudioManagerProps> = ({
  src = '/audio/ambient-atmosphere.mp3', // Default atmospheric audio
  loop = true,
  autoPlay = true,
  volume = 0.3
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = loop;
    
    if (autoPlay) {
      const playPromise = audio.play();
      if (playPromise) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Auto-play was prevented, user interaction required
            console.log('Audio autoplay prevented');
          });
      }
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [src, loop, autoPlay, volume]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      <div className="audio-controls">
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-md bg-card/80 hover:bg-card transition-colors"
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
        <button
          onClick={toggleMute}
          className="p-2 rounded-md bg-card/80 hover:bg-card transition-colors ml-1"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </>
  );
};