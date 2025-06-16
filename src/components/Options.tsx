type Options = {
  options: string[];
  correctOption: number;
  answer: number | null;
  points: number;
};

function Options({ options, correctOption, answer }: Options) {
  const hadAnswer = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          disabled={hadAnswer}
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
