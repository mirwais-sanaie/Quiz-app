function Options({ options, correctOption, answer, dispatch, points }) {
  const hadAnswer = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          disabled={hadAnswer}
          onClick={() => {
            dispatch({ type: "check", payload: index });
          }}
          className={`btn btn-option ${answer === index && "answer"} ${
            hadAnswer ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          key={index}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
