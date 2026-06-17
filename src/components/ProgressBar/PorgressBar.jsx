// components/ProgressBar.jsx
import React from 'react';
import '../../styles/loadingScreen.css';

const ProgressBar = ({ progress, timeLeft }) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-header">
        <span className="progress-label">📚 Loading Knowledge</span>
      
      </div>
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        >
          <div className="progress-glow"></div>
        </div>
      </div>
      <div className="progress-stats">
        <span>🎯 {Math.floor(progress)}% Complete</span>
        <span>⚡ Learning in progress...</span>
      </div>
    </div>
  );
};

export default ProgressBar;