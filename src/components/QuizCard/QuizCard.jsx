// components/QuizCard.jsx
import React, { useState, useEffect } from 'react';
import './QuizCard.css';

const QuizCard = ({ 
  question, 
  options, 
  correct, 
  explanation, 
  icon, 
  questionNumber,
  onAnswer, 
  isAnswered,
  isActive 
}) => {
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (isActive) {
      setSelected(null);
      setShowFeedback(false);
    }
  }, [isActive]);

  const handleAnswer = (index) => {
    if (isAnswered || selected !== null || !isActive) return;
    
    setSelected(index);
    const answerIsCorrect = index === correct;
    setIsCorrect(answerIsCorrect);
    
    setShowFeedback(true);
    
    setTimeout(() => {
      onAnswer(answerIsCorrect);
    }, 100);
    
    setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  };

  if (!isActive && !showFeedback) return null;

  return (
    <div className="quiz-card-modern">
      <div className="quiz-card-header">
        <div className="quiz-icon-wrapper">
          <span>{icon}</span>
        </div>
        <div className="quiz-title-wrapper">
          <h3>Quick Challenge #{questionNumber}</h3>
          <div className="quiz-points">+10 XP</div>
        </div>
      </div>
      
      <div className="quiz-question-wrapper">
        <p>{question}</p>
      </div>
      
      <div className="quiz-options-wrapper">
        {options.map((option, idx) => (
          <button
            key={idx}
            className={`quiz-option-btn 
              ${selected === idx ? (idx === correct ? 'correct-answer' : 'wrong-answer') : ''}
              ${isAnswered && idx === correct && selected !== idx ? 'show-correct' : ''}`}
            onClick={() => handleAnswer(idx)}
            disabled={isAnswered || selected !== null || !isActive}
          >
            <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
            <span className="option-text">{option}</span>
            {selected === idx && idx === correct && <span className="result-icon correct-icon">✓</span>}
            {selected === idx && idx !== correct && <span className="result-icon wrong-icon">✗</span>}
          </button>
        ))}
      </div>
      
      {/* {showFeedback && (
        <div className={`quiz-feedback ${isCorrect ? 'feedback-success' : 'feedback-error'}`}>
          <span className="feedback-emoji">{isCorrect ? '🎉' : '💡'}</span>
          <span>{explanation}</span>
        </div>
      )} */}
    </div>
  );
};

export default QuizCard;