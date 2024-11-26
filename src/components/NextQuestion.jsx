function NextQuestion({ dispatch }) {
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
