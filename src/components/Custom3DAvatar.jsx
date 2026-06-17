// components/Custom3DAvatar.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Custom3DAvatar.css";

export default function Custom3DAvatar({ onComplete }) {
  const [displayText, setDisplayText] = useState("");
  const [showTyping, setShowTyping] = useState(true);
  
  const fullMessage = " Let's learn something new together while your lesson loads.....";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullMessage.length) {
        setDisplayText(fullMessage.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setShowTyping(false);
        setTimeout(() => {
          onComplete?.();
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullMessage, onComplete]);

  return (
    <div className="welcome-container">
      <div className="welcome-layout">
        {/* Avatar Section */}
        <motion.div
          className="avatar-area"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="avatar-ring" />
        
          <motion.img
            src={`${process.env.PUBLIC_URL}/Avatar.png`}

            alt="Nova STEM Guide"
            className="avatar-img"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <motion.div
            className="hand-wave"
            animate={{ rotate: [0, 30, -15, 30, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            👋
          </motion.div>
        </motion.div>

        {/* Speech Card */}
        <motion.div
          className="speech-container"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        >
          <div className="mentor-badge">
            <span>🚀</span>
            <span> Mentor</span>
          </div>

          <h2 className="greeting-text">
            <span className="wave-icon">👋</span>
            Thanks for waiting!
          </h2>

          <div className="message-box">
            <p className="typing-message">
              {displayText}
              {displayText.length < fullMessage.length && <span className="cursor">|</span>}
            </p>
          </div>

          {showTyping && displayText.length < fullMessage.length && (
            <div className="typing-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          <div className="topic-tags">
            <motion.div className="tag" whileHover={{ scale: 1.05, y: -2 }}>
              <span>💻</span> Technology
            </motion.div>
            <motion.div className="tag" whileHover={{ scale: 1.05, y: -2 }}>
              <span>⚛️</span> Science
            </motion.div>
            <motion.div className="tag" whileHover={{ scale: 1.05, y: -2 }}>
              <span>📊</span> Math
            </motion.div>
            <motion.div className="tag" whileHover={{ scale: 1.05, y: -2 }}>
              <span>🤖</span> Physicis
            </motion.div>
          </div>

          <div className="progress-tracker">
            <div className="progress-fill"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}