function FinishScreen({ points, dispatch }) {
  return (
    <div>
      <div className="result">Your score is {points}</div>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart
      </button>
    </div>
  );
}

export default FinishScreen;
