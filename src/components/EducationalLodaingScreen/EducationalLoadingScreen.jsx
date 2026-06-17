// EducationalLoadingScreen.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import ProgressBar from '../ProgressBar/PorgressBar';
import FactCard from '../FactCard/FactCard';
import QuizCard from '../QuizCard/QuizCard';
import MnemonicCard from '../MnemonicCard/MnemonicCard';
import ScoreBar from '../ScoreBar/ScoreBar';
import SummaryCard from '../SummaryCard/SummaryCard';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { stemFacts, quizQuestions, mnemonic } from '../../data/learningData';
import '../../styles/loadingScreen.css';



import Custom3DAvatar from '../Custom3DAvatar';


const TOTAL_TIME = 17;

const CARD_SEQUENCE = [
  { id: 0, type: 'fact', data: stemFacts[0], duration: 3, title: 'Fun Fact' },

  { id: 1, type: 'quiz', data: quizQuestions[0], duration: 4, title: 'Quiz' },
  { id: 2, type: 'mnemonic', data: mnemonic, duration: 6, title: 'Mnemonic' },
  { id: 3, type: 'fact', data: stemFacts[1], duration: 3, title: 'Fun Fact' },

];

const EducationalLoadingScreen = ({ onComplete }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  
  const { playCorrect, playWrong, playComplete } = useSoundEffects();
  const cardTimerRef = useRef(null);
  const welcomeTimerRef = useRef(null);

  // Show welcome screen for 5 seconds
  useEffect(() => {
    welcomeTimerRef.current = setTimeout(() => {
      setShowWelcome(false);
      setCurrentCardIndex(0);
    }, 5000);

    return () => {
      if (welcomeTimerRef.current) clearTimeout(welcomeTimerRef.current);
    };
  }, []);

  // Timer for progress bar (starts after welcome)
  useEffect(() => {
    if (showWelcome) return;
    
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const newProgress = (elapsed / TOTAL_TIME) * 100;
      
      if (newProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        playComplete();
        setTimeout(() => setShowSummary(true), 500);
      } else {
        setProgress(newProgress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [showWelcome, playComplete]);

  // Card rotation
  useEffect(() => {
    if (currentCardIndex < 0 || currentCardIndex >= CARD_SEQUENCE.length) return;

    const currentCard = CARD_SEQUENCE[currentCardIndex];
    
    cardTimerRef.current = setTimeout(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentCardIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 400);
    }, currentCard.duration * 1000);

    return () => {
      if (cardTimerRef.current) clearTimeout(cardTimerRef.current);
    };
  }, [currentCardIndex]);

  const handleQuizAnswer = useCallback((questionId, isCorrect) => {
    if (quizAnswers[questionId]) return;
    
    if (isCorrect) {
      playCorrect();
      setCorrectAnswers(prev => prev + 1);
      setQuizResults(prev => ({ ...prev, [questionId]: true }));
    } else {
      playWrong();
      setQuizResults(prev => ({ ...prev, [questionId]: false }));
    }
    
    setQuizAnswers(prev => ({ ...prev, [questionId]: true }));
  }, [quizAnswers, playCorrect, playWrong]);

  const currentCard = currentCardIndex >= 0 && currentCardIndex < CARD_SEQUENCE.length ? CARD_SEQUENCE[currentCardIndex] : null;

  return (
    <div className="loading-screen">
      {/* SINGLE UNIFIED BACKGROUND - Same for everything */}
      <div className="unified-background">
        <div className="bg-gradient-animated"></div>
        <div className="bg-floating-particles">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="bg-particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}>
              {['✨', '⭐', '💫', '🌟', '🎈', '🎀', '💎', '🌸'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
        <div className="bg-soft-overlay"></div>
      </div>

      {/* Main Content Container */}
      <div className="main-content-container">
        {/* Header - Only show after welcome */}
        {!showWelcome && (
          <div className="app-header">
            <div className="app-logo">
            
              <span className="status-icon">⏳</span>
              <h1>Loading Your Lesson....</h1>
            </div>
           
          </div>
        )}

        {/* Progress Bar - Only show after welcome */}
        {!showWelcome && <ProgressBar progress={progress} />}

        {/* Welcome Avatar - Uses same background */}
        {showWelcome && <Custom3DAvatar onComplete={() => {}} />}

        {/* Learning Cards - Only show after welcome */}
        {!showWelcome && (
          <>
            <div className="cards-carousel">
              <div className={`carousel-track ${isTransitioning ? 'transitioning' : ''}`}>
                {CARD_SEQUENCE.map((card, idx) => (
                  <div 
                    key={card.id}
                    className={`carousel-card ${idx === currentCardIndex ? 'active' : idx < currentCardIndex ? 'left' : 'right'}`}
                  >
                    {card.type === 'quiz' && (
                      <QuizCard
                        question={card.data.question}
                        options={card.data.options}
                        correct={card.data.correct}
                        explanation={card.data.explanation}
                        icon={card.data.icon}
                        questionNumber={card.id === 0 ? 1 : 2}
                        onAnswer={(isCorrect) => handleQuizAnswer(card.data.id, isCorrect)}
                        isAnswered={quizAnswers[card.data.id]}
                        isActive={idx === currentCardIndex}
                      />
                    )}
                    
                    {card.type === 'fact' && (
                      <FactCard
                        fact={card.data.fact}
                        category={card.data.category}
                        icon={card.data.icon}
                        color={card.data.color}
                        isActive={idx === currentCardIndex}
                      />
                    )}
                    
                    {card.type === 'mnemonic' && (
                      <MnemonicCard
                        title={card.data.title}
                        mnemonic={card.data.mnemonic}
                        meaning={card.data.meaning}
                        icon={card.data.icon}
                        isActive={idx === currentCardIndex}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Progress Indicator */}
            <div className="mission-progress">
              {CARD_SEQUENCE.map((card, idx) => (
                <div 
                  key={idx}
                  className={`progress-step ${idx === currentCardIndex ? 'active' : ''} ${idx < currentCardIndex ? 'completed' : ''}`}
                >
                  <div className="step-indicator">
                    {idx < currentCardIndex ? '✓' : (idx === currentCardIndex ? '🚀' : '○')}
                  </div>
                  <div className="step-details">
                    <span className="step-emoji">{card.type === 'quiz' ? '🎯' : card.type === 'fact' ? '💡' : '🧠'}</span>
                    <span className="step-title">{card.title}</span>
                  </div>
                </div>
              ))}
            </div>

           
          </>
        )}

        {/* Summary Modal */}
        {showSummary && (
          <SummaryCard
            correctAnswers={correctAnswers}
            totalQuestions={2}
            factsLearned={2}
            mnemonicLearned={1}
            quizResults={quizResults}
            onClose={onComplete}
          />
        )}
      </div>
    </div>
  );
};

export default EducationalLoadingScreen;