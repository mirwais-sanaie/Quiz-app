function PrograssBar({ numOfQuestions, index }) {
  return (
    <div className="progress">
      <progress max={numOfQuestions} value={index}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>0</strong> / 280 points
      </p>
    </div>
  );
}

export default PrograssBar;
