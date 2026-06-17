// hooks/useLoadingTimer.js
import { useState, useEffect, useCallback } from 'react';

export const useLoadingTimer = (duration = 20, onComplete) => {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          onComplete?.();
          return 100;
        }
        return prev + (100 / (duration * 1000 / 100));
      });
      
      setTimeLeft(prev => {
        if (prev <= 0.1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return { progress, timeLeft: Math.max(0, timeLeft).toFixed(1), isComplete };
};