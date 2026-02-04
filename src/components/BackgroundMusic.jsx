import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);
    return () => document.removeEventListener("click", playMusic);
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/palagi.mp3"  // ✅ path relative to public folder
      loop
    />
  );
}
