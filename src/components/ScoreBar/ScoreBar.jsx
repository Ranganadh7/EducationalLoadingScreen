// components/ScoreBar.jsx
import React from 'react';
import '../../styles/loadingScreen.css';

const ScoreBar = ({ score, maxScore }) => {
  const percentage = (score / maxScore) * 100;
  
  return (
    <div className="score-bar">
      <div className="score-header">
        <span className="score-icon">🏆</span>
        <span className="score-label">Your Score</span>
        <span className="score-value">{score} / {maxScore}</span>
      </div>
      <div className="score-progress">
        <div 
          className="score-fill" 
          style={{ width: `${percentage}%` }}
        >
          <div className="score-glow"></div>
        </div>
      </div>
      {score === maxScore && maxScore > 0 && (
        <div className="perfect-badge">🌟 Perfect! 🌟</div>
      )}
    </div>
  );
};

export default ScoreBar;