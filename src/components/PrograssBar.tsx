import useQuizStore from "../store/store";

function PrograssBar() {
  const { questions, currentQuestionIndex, points } = useQuizStore();
  const totalPoints = questions.reduce(
    (total, question) => total + question.points,
    0
  );
  return (
    <div className="progress">
      <progress
        max={questions.length}
        value={currentQuestionIndex + 1}
      ></progress>
      <p>
        Question <strong>{currentQuestionIndex + 1}</strong> /{" "}
        {questions.length}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints} points
      </p>
    </div>
  );
}

export default PrograssBar;
