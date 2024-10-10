const tests = [
  {
    testName: "Quiz #1",
    id:1,
    questions: [
      {
        question: "What do you wear in summer?",
        answers: [
          { value: "Gloves", isTrue: false },
          { value: "Jacket", isTrue: false },
          { value: "Shorts", isTrue: true },
        ],
      },
      {
        question: "Which country is home to the kangaroo?",
        answers: [
          { value: "South Africa", isTrue: false },
          { value: "Australia", isTrue: true },
          { value: "Brazil", isTrue: false },
        ],
      },
      {
        question: "Who painted the Mona Lisa?",
        answers: [
          { value: "Vincent van Gogh", isTrue: false },
          { value: "Pablo Picasso", isTrue: false },
          { value: "Leonardo da Vinci", isTrue: true },
        ],
      },
    ],
  },
  {
    testName: "Quiz #2",
    id:2,
    questions: [
      {
        question: "What is the chemical symbol for water?",
        answers: [
          { value: "O2", isTrue: false },
          { value: "CO2", isTrue: false },
          { value: "H2O", isTrue: true },
        ],
      },
      {
        question: "Which planet is closest to the sun?",
        answers: [
          { value: "Venus", isTrue: false },
          { value: "Mercury", isTrue: true },
          { value: "Mars", isTrue: false },
        ],
      },
      {
        question: "How many bones are in the human body?",
        answers: [
          { value: "206", isTrue: true },
          { value: "300", isTrue: false },
          { value: "180", isTrue: false },
        ],
      },
    ],
  },
  {
    testName: "Quiz #3",
    id:3,
    questions: [
      {
        question: "Who was the first President of the United States?",
        answers: [
          { value: "Thomas Jefferson", isTrue: false },
          { value: "George Washington", isTrue: true },
          { value: "Abraham Lincoln", isTrue: false },
        ],
      },
      {
        question: "In which year did the Titanic sink?",
        answers: [
          { value: "1912", isTrue: true },
          { value: "1905", isTrue: false },
          { value: "1898", isTrue: false },
        ],
      },
      {
        question: "What ancient civilization built the pyramids?",
        answers: [
          { value: "Romans", isTrue: false },
          { value: "Egyptians", isTrue: true },
          { value: "Aztecs", isTrue: false },
        ],
      },
    ],
  },
];
export default tests;