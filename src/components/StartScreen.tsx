import useQuizStore from "../store/store";

function StartScreen() {
  const { questions, startQuiz } = useQuizStore();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{questions.length} questions to test your React mastry</h3>
      <button onClick={startQuiz} className="btn btn-ui">
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
