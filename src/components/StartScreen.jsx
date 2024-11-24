function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numOfQuestions} questions to test your React mastry</h3>
      <button
        onClick={() => dispatch({ type: "active" })}
        className="btn btn-ui"
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
