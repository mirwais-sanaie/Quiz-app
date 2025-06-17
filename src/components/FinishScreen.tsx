import useQuizStore from "../store/store";

function FinishScreen() {
  const { points, resetQuiz, highestScore } = useQuizStore();
  return (
    <div>
      <div className="result">
        <p>
          Your score is <strong>{points}</strong>{" "}
        </p>
        <p
          style={{
            marginTop: "10px",
            fontSize: "1.4rem",
          }}
        >
          Best record is
          <span
            style={{
              textDecoration: "underline",
              fontSize: "1.49rem",
              padding: "0.2rem 0.4rem",
            }}
          >
            {" "}
            {highestScore}
          </span>
        </p>
      </div>
      <button onClick={resetQuiz} className="btn btn-ui">
        Restart
      </button>
    </div>
  );
}

export default FinishScreen;
