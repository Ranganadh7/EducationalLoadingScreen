// components/FactCard.jsx
import React, { useState, useEffect } from 'react';
import './FactCard.css';

const FactCard = ({ fact, category, icon, isActive }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive) return null;
  console.log("FACT VALUE:", fact);

  return (
    <div className="fact-card-modern">
      <div className="floating-emoji-1">✨</div>
      <div className="floating-emoji-2">💡</div>
      <div className="floating-emoji-3">🤯</div>

      <div className="fact-card-header">
        <div className="fact-category">
          <span className="category-icon">📖</span>
          <span>{category}</span>
        </div>
        <div className="fact-icon">{icon}</div>
      </div>
      
      <div className="fact-body">
        <div className="fact-quote">“</div>
        <p className={`fact-text ${isAnimating ? 'text-pop' : ''}`}>
       
        {String(fact)}
        </p>
      </div>
      
      <div className="fact-footer">
        <div className="fact-badge">
          <span>🌟</span> Did You Know?
        </div>
      </div>

      <div className="card-sparkle"></div>
    </div>
  );
};

export default FactCard;