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
  const [selectedAnswer, setSelectedAnswer] = useState(null);

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

  function handleAnswerClick(isCorrect, index) {
    setSelectedAnswer(index);
    if (isCorrect) setScore((score) => (timer === 0 ? score : score + 1));
  }

  function handleNextQuestion() {
    const nextQuestion = activeQuestion + 1;
    setSelectedAnswer(null); // Reset selected answer

    if (nextQuestion < questions.length) {
      setActiveQuestion(nextQuestion);
      setTimer(30); // Reset timer for next question
    } else {
      setShowScore(true);
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
                onClick={() => handleAnswerClick(answer.isCorrect, index)}
                key={index}
                className={`answer-buttons ${
                  timer === 0
                    ? " inactive "
                    : selectedAnswer === index
                    ? "selected"
                    : ""
                }`} // Highlight selected answer
              >
                {answer.answerText}
              </button>
            ))}
          </div>

          <div className="timer-container">
            <span className="timer-text">{timer}</span>
            <button
              onClick={() => handleNextQuestion()}
              className="next-question"
            >
              Next Question
            </button>
          </div>

          {timer === 0 && (
            <p className="text-center mt-7 flex flex-col">
              <span className="text-red-600 text-2xl ">Your time is Over!</span>
              <span className="text-red-200">
                And your point from this question is 0
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
