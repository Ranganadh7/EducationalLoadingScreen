
# Educational Loading Screen

A React-based loading screen that transforms a 20-second video buffering wait into a micro-learning moment for high school students studying programming and STEM.

Live Demo: https://ranganadh7.github.io/EducationalLoadingScreen/


## What It Does

Instead of showing a blank spinner while a video lesson loads, this screen uses the wait time to teach students something small but meaningful — a quick programming tip, a CS concept, or a STEM fact. Every second of loading becomes a second of learning.

The screen cycles through bite-sized educational cards timed to the 20-second load window, accompanied by a progress bar so students always know how long remains.


### Why This Approach

Reframing the wait: A loading screen is usually a dead zone — frustrating and forgettable. By filling it with content that's directly relevant to what the student is about to learn, we turn friction into value. Students finish loading already primed for the lesson.

Micro-learning works: Short, atomic facts are easier to retain than long explanations. 20 seconds is exactly the right window — long enough to read and absorb one idea, short enough that it never feels like homework.

Relevance builds engagement: The content shown is tied to programming and STEM — the same subjects students are here to study. This reinforces the learning environment rather than breaking it.


### Features


Timed content cards that rotate during the 20-second load
Animated progress bar showing remaining load time
Curated programming tips, CS concepts, and STEM facts
Responsive layout — works on desktop, tablet, and mobile
Built with React functional components and hooks


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

**EduLearn** transforms the traditional loading Screen into an interactive learnign experience using:

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

--
### 🧩 Component Library
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

### ⚙️ Tech Stack
Technology	Purpose
React 18+	Frontend framework
CSS Modules	Styling system
Framer Motion	Animations
Three.js (optional)	3D rendering
Jest / RTL	Testing
CRA / Vite	Build tooling
---

### 📥 Installation
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
### 🚀 Usage
▶ Quick Start
Import components from /components
Use learningData.js for centralized content
Integrate hooks like useLoadingTimer and useSoundEffects
---
### 🧪 Component Integration
Wrap app with EducationalLoadingScreen
Combine FactCard, MnemonicCard, QuizCard for lessons
Use ProgressBar and ScoreBar for tracking
Display results using SummaryCard
---
### ⚡ Performance
Optimization	Implementation
Memoization	Prevent unnecessary re-renders
GPU Animations	Uses transform & opacity
Lazy Loading	Code splitting for faster load
Cleanup	Proper interval & event cleanup
---
### ♿ Accessibility
ARIA labels for all interactive components
Full keyboard navigation support
prefers-reduced-motion compliance
Semantic HTML structure
---
### 🌐 Browser Support
Browser	Version
Chrome	60+
Firefox	55+
Safari	12+
Edge	79+
---
### 🤝 Contributing
Fork repository

Create feature branch

git checkout -b feature/amazing-feature

Commit changes

git commit -m "Add amazing feature"

Push branch

git push origin feature/amazing-feature
Open Pull Request
---
### 📌 Guidelines
Follow ESLint / Prettier rules
Write unit tests for new features
Update documentation when needed
---
### 📜 License

This project is licensed under the MIT License.

🌍 Live Demo

👉 View Demo

👨‍💻 Maintainer

Ranganadh


---
