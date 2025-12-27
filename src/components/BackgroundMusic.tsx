import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Autoplay policies: most browsers only allow autoplay when muted.
    audio.volume = 0.3;
    audio.muted = true;

    const playMuted = async () => {
      try {
        await audio.play();
      } catch {
        // ignore; we'll retry on first interaction
      }
    };

    const enableSound = async () => {
      if (!audioRef.current) return;
      const a = audioRef.current;
      a.muted = false;
      a.volume = 0.3;
      try {
        await a.play();
      } catch {
        // If it still fails, there's likely a network/codecs issue.
        console.log('Audio playback failed after interaction');
      }
    };

    // Try autoplay (muted) immediately
    playMuted();

    // Unmute + ensure playback on first user interaction
    document.addEventListener('pointerdown', enableSound, { once: true });
    document.addEventListener('keydown', enableSound, { once: true });
    document.addEventListener('touchstart', enableSound, { once: true });

    return () => {
      document.removeEventListener('pointerdown', enableSound);
      document.removeEventListener('keydown', enableSound);
      document.removeEventListener('touchstart', enableSound);
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      playsInline
      src="https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3"
    />
  );
};

export default BackgroundMusic;
