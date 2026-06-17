// components/SummaryCard.jsx
import React, { useEffect, useState } from 'react';
import '../../styles/loadingScreen.css';

const SummaryCard = ({ 
  correctAnswers, 
  totalQuestions,
  factsLearned,
  mnemonicLearned,
  quizResults,
  onClose 
}) => {
  const [animate, setAnimate] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setAnimate(true), 100);
    
    // Stop confetti after 3 seconds
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  return (
    <div className="summary-overlay">
      {/* Background with confetti */}
      <div className="summary-bg">
        {showConfetti && (
          <div className="confetti-container">
            {[...Array(100)].map((_, i) => (
              <div 
                key={i} 
                className="confetti-piece" 
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 60%)`,
                  width: `${6 + Math.random() * 8}px`,
                  height: `${10 + Math.random() * 15}px`
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className={`summary-card-final ${animate ? 'animate-in' : ''}`}>
        {/* Header */}
        <div className="summary-header-final">
          <span className="celebration-icon">🎉</span>
          <h2>Learning Summary</h2>
          <span className="celebration-icon">🏆</span>
        </div>

  
        {/* Accomplishments */}
        <div className="accomplishments-section">
          <div className="section-title-final">
            <span>🚀 While waiting, you learned:</span>
          </div>
          
          <div className="accomplishments-grid">
            <div className="accomplishment-card-final">
              <div className="accomp-emoji">🎯</div>
              <div className="accomp-text">
                <h4>Solved {correctAnswers} quiz questions{correctAnswers !== 1 ? 's' : ''}</h4>
              
              </div>
            </div>
            
            <div className="accomplishment-card-final">
              <div className="accomp-emoji">💡</div>
              <div className="accomp-text">
                <h4>Learned {factsLearned} STEM facts</h4>
            
              </div>
            </div>
            
            <div className="accomplishment-card-final">
              <div className="accomp-emoji">🧠</div>
              <div className="accomp-text">
                <h4>Mastered 1 mnemonic</h4>
              
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Results */}
        <div className="quiz-results-section">
          <div className="section-title-final">
            <span>📋 Challenge Results</span>
          </div>
          
          <div className="quiz-results-list">
            {Object.entries(quizResults).map(([id, isCorrect], idx) => (
              <div key={id} className={`quiz-result-item ${isCorrect ? 'correct' : 'learning'}`}>
                <div className="result-status">
                  {isCorrect ? '✅' : '📚'}
                </div>
                <div className="result-details">
                  <span className="result-question">Question {idx + 1}</span>
                  <span className="result-message">
                    {isCorrect ? 'Answered correctly!' : 'Great learning opportunity!'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Message */}
        <div className="motivation-section-final">
          <div className="duo-character-final">
            <span className="duo-emoji-final">👏🏻 </span>
            <div className="motivation-message">
              <p>🎉 Fantastic job, learner! 🎉</p>
              <p className="sub-motivation">You turned 20 seconds into valuable learning time!</p>
            </div>
          </div>
          
          <div className="keep-up-message-final">
            <span>✨ Keep up the great work! Every second counts! ✨</span>
          </div>
        </div>

        {/* Continue Button */}
        <button className="continue-button-final" onClick={onClose}>
          <span>Start Your Lesson</span>
          <span className="button-icon">🚀</span>
        </button>

        {/* Floating Elements */}
        <div className="floating-learning-elements">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="floating-element" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {['📚', '✨', '⭐', '🎯', '💡', '🧠'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;