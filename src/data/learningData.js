// data/learningData.js
export const stemFacts = [
  {
    id: 1,
    fact: "⚡🌩️ Lightning is about five times hotter than the surface of the Sun ☀️—each strike is a massive burst of natural energy ⚡🔥!",
    category: "Physics Fun",
    icon: "⚡",
    color: "#667eea"
  },
  {
    id: 2,
    fact: "🐙💙 Octopuses have three hearts ❤️❤️❤️ and blue blood 🔵—and when they swim 🏊‍♂️, two of their hearts actually stop beating!",
    category: "Science Fun",
    icon: "🐙",
    color: "#4facfe"
  } 
];

export const quizQuestions = [
  {
    id: 1,
    question: "What force keeps us on the ground?",
    options: [

      "A) Magnetism",
"B) Friction",
"C) Gravity ",
"D) Electricity"
    
    ],
    correct: 2,
    explanation: "✅ print() displays text on the screen! It's how Python talks to you.",
    icon: "🖨️"
  },
  {
    id: 2,
    question: "Which symbol is used for single-line comments in Python?",
    options: [
      "A) //",
      "B) <!-- -->",
      "C) #",
      "D) /* */"
    ],
    correct: 2,
    explanation: "✅ # is used for comments! Comments help explain code but Python ignores them.",
    icon: "💬"
  }
];

export const mnemonic = {
  title: "🎯 Order of Operations (PEMDAS)",
  mnemonic: "**Pandas **Eat **Mangoes, **Drink **Apple **Smoothies",
  meaning: "Parentheses → Exponents → Multiplication → Division → Addition → Subtraction",
  icon: "🥭",
  animation: "bounce"
};