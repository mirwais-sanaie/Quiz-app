import Options from "./Options";

function Question({ question, index, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <Options
        options={question.options}
        correctOption={question.correctOption}
      />
    </div>
  );
}

export default Question;
