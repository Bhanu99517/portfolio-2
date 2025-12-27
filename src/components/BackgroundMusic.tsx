import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set low volume for ambient feel
    audio.volume = 0.15;
    
    // Try to play (may be blocked by browser autoplay policy)
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        // Autoplay blocked - wait for user interaction
        const handleInteraction = async () => {
          try {
            await audio.play();
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
          } catch (e) {
            console.log('Audio playback failed');
          }
        };
        
        document.addEventListener('click', handleInteraction);
        document.addEventListener('keydown', handleInteraction);
      }
    };

    playAudio();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      src="https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3"
    />
  );
};

export default BackgroundMusic;
