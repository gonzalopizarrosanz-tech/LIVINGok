
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface AudioControlProps {
  src: string;
}

const AudioControl: React.FC<AudioControlProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
        audioRef.current = new Audio(src);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;
    }
  }, [src]);
  
  const togglePlay = useCallback(() => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => console.error("Audio play failed:", error));
        }
        setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  return (
    <button
      onClick={togglePlay}
      className="absolute top-4 right-4 z-50 p-3 text-xl border-2 border-pink-500 bg-black text-pink-500 hover:bg-pink-500 hover:text-black transition-colors"
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? '🔊' : '🔇'}
    </button>
  );
};

export default AudioControl;
