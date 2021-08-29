const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answear");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  deselect();
  const currentQuestion = quizData[currentQuiz];
  questionEl.innerText = currentQuestion.question;
  a_text.innerText = currentQuestion.a;
  b_text.innerText = currentQuestion.b;
  c_text.innerText = currentQuestion.c;
  d_text.innerText = currentQuestion.d;
};

const deselect = () => answerEls.forEach((ans, i) => (ans.checked = false));

const getSelected = () => {
  let answear;
  answerEls.forEach((ans, i) => {
    if (ans.checked) answear = ans.id;
  });
  return answear;
};
submitBtn.addEventListener("click", () => {
  const answear = getSelected();
  if (answear) {
    if (answear === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else
      quiz.innerHTML = `
      <h2>You answeared correctly at ${score}/${quizData.length} questions</h2>
      <button onclick="location.reload()">Reload</button>
    `;
  }
});

loadQuiz();
