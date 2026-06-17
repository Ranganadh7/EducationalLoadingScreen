// components/MnemonicCard.jsx
import React, { useState, useEffect } from 'react';
import './MnemonicCard.css';

const MnemonicCard = ({ title, mnemonic, meaning, icon, isActive }) => {
  const [animationStep, setAnimationStep] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  
  const words = mnemonic.split(' ');
  const letters = mnemonic.match(/[A-Z]/g) || [];

  useEffect(() => {
    if (isActive) {
      setAnimationStep(0);
      setShowMeaning(false);
      
      const interval = setInterval(() => {
        setAnimationStep(prev => {
          if (prev >= letters.length) {
            clearInterval(interval);
            setShowMeaning(true);
            return prev;
          }
          return prev + 1;
        });
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [isActive, letters.length]);

  if (!isActive) return null;

  return (
    <div className="mnemonic-card-modern">
      <div className="mnemonic-card-header">
        <div className="mnemonic-icon">{icon}</div>
        <h3>{title}</h3>
        <div className="mnemonic-badge">🧠 Mnemonic Trick</div>
      </div>
      
      <div className="mnemonic-phrase">
        {words.map((word, idx) => (
          <span 
            key={idx} 
            className={`mnemonic-word ${idx < animationStep ? 'animated-word' : ''}`}
          >
            {word}
            {letters[idx] && (
              <span className="highlight-letter">{letters[idx]}</span>
            )}
          </span>
        ))}
      </div>
      
      {showMeaning && (
        <div className="mnemonic-meaning">
          <div className="meaning-title">🎯 What it means:</div>
          <p>{meaning}</p>
          <div className="mnemonic-example">
            <span>📝 Example:</span> (2 + 3) × 4 = 20
          </div>
        </div>
      )}
      
      <div className="mnemonic-steps">
        {letters.map((_, idx) => (
          <div 
            key={idx} 
            className={`step-dot ${idx < animationStep ? 'step-completed' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MnemonicCard;