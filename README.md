# 🎓 EduLearn - Interactive Educational Platform

A modular, React-based educational platform designed to make learning engaging through interactive cards, quizzes, mnemonic systems, and animated UI experiences.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Component Library](#component-library)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview

**EduLearn** transforms traditional learning into an interactive experience using:

- 📚 Fact Cards – Animated educational content with categories  
- 🧠 Mnemonic Cards – Memory enhancement techniques  
- ❓ Quiz Cards – Interactive assessments with instant feedback  
- 📊 Progress Tracking – Visual learning progress indicators  
- 🧑‍🚀 3D Avatars – Immersive learner engagement  
- ⏳ Loading Screen – Engaging transitions with motivational messages  

---

## 🏗 Architecture

### 🧩 Design Approach

- Component-Based Modular Architecture  
- Atomic Design principles for reusability  
- Unidirectional Data Flow  
- CSS-based scoped styling approach  

---

### 📁 Component Structure

```bash
components/
├── EducationalLoadingScreen/
├── FactCard/
├── MnemonicCard/
├── QuizCard/
├── ProgressBar/
├── ScoreBar/
├── SummaryCard/
├── Custom3DAvatar/
├── data/
│   └── learningData.js
├── hooks/
│   ├── useLoadingTimer.js
│   └── useSoundEffects.js
└── styles/
    └── loadingScreen.css


---
🧩 Component Library
Component	Purpose	Key Features
EducationalLoadingScreen	Loading experience	Progress bar, animations, motivational messages
FactCard	Educational facts display	Category icons, animated reveal effects
MnemonicCard	Memory aids	Visual associations, recall triggers
QuizCard	Interactive assessment	MCQs, instant feedback system
ProgressBar	Progress tracking	Smooth animations, percentage indicator
ScoreBar	Score visualization	Dynamic score updates
SummaryCard	Session summary	Performance analytics
Custom3DAvatar	Visual engagement	3D animations and interactions
---

⚙️ Tech Stack
Technology	Purpose
React 18+	Frontend framework
CSS Modules	Styling system
Framer Motion	Animations
Three.js (optional)	3D rendering
Jest / RTL	Testing
CRA / Vite	Build tooling
---

📥 Installation
# Clone repository
git clone https://github.com/yourusername/edulearn.git

# Navigate to project
cd edulearn

# Install dependencies
npm install

# Start development server
npm start

# Build production version
npm run build

---
🚀 Usage
▶ Quick Start
Import components from /components
Use learningData.js for centralized content
Integrate hooks like useLoadingTimer and useSoundEffects
---
🧪 Component Integration
Wrap app with EducationalLoadingScreen
Combine FactCard, MnemonicCard, QuizCard for lessons
Use ProgressBar and ScoreBar for tracking
Display results using SummaryCard
---
⚡ Performance
Optimization	Implementation
Memoization	Prevent unnecessary re-renders
GPU Animations	Uses transform & opacity
Lazy Loading	Code splitting for faster load
Cleanup	Proper interval & event cleanup
---
♿ Accessibility
ARIA labels for all interactive components
Full keyboard navigation support
prefers-reduced-motion compliance
Semantic HTML structure
---
🌐 Browser Support
Browser	Version
Chrome	60+
Firefox	55+
Safari	12+
Edge	79+
---
🤝 Contributing
Fork repository

Create feature branch

git checkout -b feature/amazing-feature

Commit changes

git commit -m "Add amazing feature"

Push branch

git push origin feature/amazing-feature
Open Pull Request
---
📌 Guidelines
Follow ESLint / Prettier rules
Write unit tests for new features
Update documentation when needed
---
📜 License

This project is licensed under the MIT License.

🌍 Live Demo

👉 View Demo

👨‍💻 Maintainer

Ranganadh


---
