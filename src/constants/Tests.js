const tests = [
  {
    testName: "Quiz #1",
    id:1,
    enabled: true,
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
        question: "In Winter, do you wear t-shirt?",
        answers: [
          { value: "False", isTrue: true },
          { value: "True", isTrue: false },
        ],
      },
      {
        question: "What do you eat in Summer/Spring?",
        answers: [
          { value: "Soup", isTrue: false },
          { value: "Ice Cream", isTrue: true },
          { value: "Salad", isTrue: false },
        ],
      },
    ],
  },
  {
    testName: "Quiz #2",
    id:2,
    enabled: false,
    questions: [
      {
        question: "question",
        answers: [
          { value: "false", isTrue: false },
          { value: "true", isTrue: true },
          { value: "false", isTrue: false },
        ],
      },
      {
        question: "question",
        answers: [
          { value: "false", isTrue: false },
          { value: "true", isTrue: true },
          { value: "false", isTrue: false },
        ],
      },
      {
        question: "question",
        answers: [
          { value: "false", isTrue: false },
          { value: "true", isTrue: true },
          { value: "false", isTrue: false },
        ],
      },
    ],
  },
  {
    testName: "Quiz #3",
    id:3,
    enabled: false,
    questions: [
      {
        question: "question",
        answers: [
          { value: "false", isTrue: false },
          { value: "true", isTrue: true },
          { value: "false", isTrue: false },
        ],
      },
      {
        question: "question",
        answers: [
          { value: "false", isTrue: false },
          { value: "true", isTrue: true },
          { value: "false", isTrue: false },
        ],
      },
      {
        question: "question",
        answers: [
          { value: "false", isTrue: false },
          { value: "true", isTrue: true },
          { value: "false", isTrue: false },
        ],
      },
    ],
  },
];
export default tests;