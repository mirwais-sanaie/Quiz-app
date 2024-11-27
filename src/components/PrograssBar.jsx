function PrograssBar({ numOfQuestions, index, points, totalPoints }) {
  return (
    <div className="progress">
      <progress max={numOfQuestions} value={index + 1}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints} points
      </p>
    </div>
  );
}

export default PrograssBar;
