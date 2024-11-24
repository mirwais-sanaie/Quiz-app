function Options({ options, correctOption }) {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${
            index === correctOption ? "correct" : "wrong"
          }`}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
