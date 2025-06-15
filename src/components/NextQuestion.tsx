function NextQuestion({ dispatch, numOfQuestions, index }) {
  if (index === numOfQuestions - 1) {
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "finish" })}
          className="btn btn-ui"
        >
          Finish
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "newAnswer" })}
        className="btn btn-ui"
      >
        Next
      </button>
    </div>
  );
}

export default NextQuestion;
