function StartScreen({ numOfQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h4>{numOfQuestions} questions to test your React mastry</h4>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
