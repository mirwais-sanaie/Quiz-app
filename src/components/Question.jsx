import Options from "./Options";

function Question({ question, index, answer, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <Options
        options={question.options}
        correctOption={question.correctOption}
        points={question.points}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Question;
