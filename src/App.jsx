import { useEffect, useState } from "react";

const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
];

export default function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  useEffect(
    function () {
      if (timer === 0) return;

      const timerInterval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);

      return () => clearInterval(timerInterval); // first execute
    },
    [timer]
  );

  function handleAnswerClick(isCorrect) {
    const nextQuestion = activeQuestion + 1;
    if (nextQuestion < questions.length) {
      setActiveQuestion((activeQuestion) => activeQuestion + 1);
    } else {
      setShowScore(true);
    }

    if (isCorrect) {
      setScore((score) => score + 1);
    }
  }

  // function handleAnswerRes(isCorrect) {}

  return (
    <div className="container">
      {/* quiz  */}
      {showScore ? (
        <div className="score-section">
          <h1>
            Your final Score is {score} out of {questions.length} question.
          </h1>
        </div>
      ) : (
        <div>
          <div className="question-text">
            {questions[activeQuestion].questionText}
          </div>

          <div className="answer-text">
            {questions[activeQuestion].answerOptions.map((answer, index) => (
              <button
                onClick={() => handleAnswerClick(answer.isCorrect)}
                key={index}
                className="answer-buttons"
              >
                {answer.answerText}
              </button>
            ))}
          </div>

          <div className="timer-container">
            <span className="timer-text">{timer}</span>
            <button className="next-question">Next Question</button>
          </div>

          {timer === 0 && (
            <p className="text-red-600 text-2xl mx-14 mt-7">
              Your time is Over!
            </p>
          )}
        </div>
      )}
    </div>
  );
}
