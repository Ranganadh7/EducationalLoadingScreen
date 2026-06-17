// hooks/useSoundEffects.js
import { useCallback, useRef, useEffect } from 'react';

export const useSoundEffects = () => {
  const sounds = useRef({
    correct: new Audio("/sounds/correct.mp3"),
    wrong: new Audio("/sounds/wrong.mp3"),
    complete: new Audio("/sounds/complete.mp3")
  });

  useEffect(() => {
    Object.values(sounds.current).forEach(sound => {
      sound.load();
      sound.volume = 0.5;
    });
  }, []);

  const playCorrect = useCallback(() => {
    const sound = sounds.current.correct;
    sound.currentTime = 0;
    sound.play().catch(e => console.log('Sound play failed:', e));
  }, []);

  const playWrong = useCallback(() => {
    const sound = sounds.current.wrong;
    sound.currentTime = 0;
    sound.play().catch(e => console.log('Sound play failed:', e));
  }, []);

  const playComplete = useCallback(() => {
    const sound = sounds.current.complete;
    sound.currentTime = 0;
    sound.play().catch(e => console.log('Sound play failed:', e));
  }, []);

  return { playCorrect, playWrong, playComplete };
};