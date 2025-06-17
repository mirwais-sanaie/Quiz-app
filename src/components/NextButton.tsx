import useQuizStore from "../store/store";

function NextQuestion() {
  const { questions, currentQuestionIndex, selectedOption, nextQuestion } =
    useQuizStore();

  if (currentQuestionIndex === questions.length - 1) {
    return (
      <div>
        <button onClick={nextQuestion} className="btn btn-ui">
          Finish
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={nextQuestion}
        className="btn btn-ui"
        disabled={selectedOption === null}
      >
        Next
      </button>
    </div>
  );
}

export default NextQuestion;
