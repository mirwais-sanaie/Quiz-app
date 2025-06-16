import useQuizStore from "../store/store";
import Options from "./Options";

function Question() {
  const { currentQuestionIndex, questions, selectedOption } = useQuizStore();
  const currentQuestion = questions[currentQuestionIndex];
  const options = currentQuestion.options;
  return (
    <div>
      <h4>{currentQuestion.question}</h4>

      <Options
        options={options}
        correctOption={currentQuestion.correctOption}
        points={currentQuestion.points}
        answer={selectedOption}
      />
    </div>
  );
}

export default Question;
